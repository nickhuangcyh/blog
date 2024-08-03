---
layout: single
title: "How to Enable RSA Encryption Algorithm Key in OpenSSH 8.8"
date: 2024-08-02 19:50:00 +0800
excerpt: "如何在 OpenSSH 8.8 中重新啟用 RSA 加密支援，確保可以繼續使用 RSA 金鑰。"
header:
  overlay_image: /assets/images/rsa-algorithm.jpg
  teaser: /assets/images/rsa-algorithm.jpg
tags: [RSA Encryption, OpenSSH 8.8, Encryption Support]
categories: [Cryptography, OpenSSH, Security]
---

## 前言

最近在修改公司的 jenkins CI/CD 架構，Dockerize 我們的 Android Building Environment。
在我啟動 Debian 12 container 來建構我的環境時，配置 RSA Key 到公司的 GitLab server，卻無法抓取 source code，故有了這篇文章希望未來有遇到可以拿出來快速解決問題，也希望幫助到遇到一樣問題的人。

經過分析後才發現，原來 Debian 12 預設使用 OpenSSH 8.8，而 OpenSSH 8.8 預設將 RSA 加密算法關閉，因為安全是以及過時的問題
但公司 GitLab server 較舊，目前只支援較舊的 ssh Key 演算法 RSA，因此需要找方法使其支援。

## 準備作業

> 如果你已經有環境，可以跳過此段落

首先我先用 Docker 啟一台 Debian 12 的 container 如下

```bash
> docker pull debian:bookworm
bookworm: Pulling from library/debian
9c5ed83eaf5c: Pull complete
Digest: sha256:45f2e735295654f13e3be10da2a6892c708f71a71be845818f6058982761a6d3
Status: Downloaded newer image for debian:bookworm
docker.io/library/debian:bookworm
```

```bash
> docker run -it --name debian-bookworm-for-test-openssh debian:bookworm
root@b5336f2395fd:/#
```

### 更新 apt

```bash
> apt update
Get:1 http://deb.debian.org/debian bookworm InRelease [151 kB]
Get:2 http://deb.debian.org/debian bookworm-updates InRelease [55.4 kB]
Get:3 http://deb.debian.org/debian-security bookworm-security InRelease [48.0 kB]
Get:4 http://deb.debian.org/debian bookworm/main arm64 Packages [8688 kB]
Get:5 http://deb.debian.org/debian bookworm-updates/main arm64 Packages [13.7 kB]
Get:6 http://deb.debian.org/debian-security bookworm-security/main arm64 Packages [166 kB]
Fetched 9122 kB in 2s (4556 kB/s)
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
All packages are up to date.
```

### 安裝 Git

```bash
> apt install git
```

### 確定 openSSH 版本

可以查看 openSSH 版本是否 > 8.8

```bash
> ssh -V
OpenSSH_9.2p1 Debian-2+deb12u3, OpenSSL 3.0.13 30 Jan 2024
```

### 建立 SSH RSA Key

建立 Key

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

將 ssh key 加入 ssh-agent

```bash
> eval "$(ssh-agent -s)"
Agent pid 3160
> ssh-add ~/.ssh/id_rsa
Identity added: /root/.ssh/id_rsa (your_email@example.com)
```

### 將 Public Key 上傳到 Git server

先 `cat` 出 public key

```bash
> cat ~/.ssh/id_rsa.pub
```

上傳到你的 Git Server

## 測試 SSH 連線

`x.x.x.x` 請換成你的 git server IP or Domain

```bash
ssh -T -v git@x.x.x.x
OpenSSH_9.2p1 Debian-2+deb12u3, OpenSSL 3.0.13 30 Jan 2024
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 19: include /etc/ssh/ssh_config.d/*.conf matched no files
debug1: /etc/ssh/ssh_config line 21: Applying options for *
debug1: Connecting to x.x.x.x [x.x.x.x] port 22.
debug1: Connection established.
debug1: identity file /root/.ssh/id_rsa type 0
debug1: identity file /root/.ssh/id_rsa-cert type -1
debug1: identity file /root/.ssh/id_ecdsa type -1
debug1: identity file /root/.ssh/id_ecdsa-cert type -1
debug1: identity file /root/.ssh/id_ecdsa_sk type -1
debug1: identity file /root/.ssh/id_ecdsa_sk-cert type -1
debug1: identity file /root/.ssh/id_ed25519 type -1
debug1: identity file /root/.ssh/id_ed25519-cert type -1
debug1: identity file /root/.ssh/id_ed25519_sk type -1
debug1: identity file /root/.ssh/id_ed25519_sk-cert type -1
debug1: identity file /root/.ssh/id_xmss type -1
debug1: identity file /root/.ssh/id_xmss-cert type -1
debug1: identity file /root/.ssh/id_dsa type -1
debug1: identity file /root/.ssh/id_dsa-cert type -1
debug1: Local version string SSH-2.0-OpenSSH_9.2p1 Debian-2+deb12u3
debug1: Remote protocol version 2.0, remote software version OpenSSH_6.0p1 Debian-4+deb7u4
debug1: compat_banner: match: OpenSSH_6.0p1 Debian-4+deb7u4 pat OpenSSH* compat 0x04000000
debug1: Authenticating to x.x.x.x:22 as 'git'
debug1: load_hostkeys: fopen /root/.ssh/known_hosts2: No such file or directory
debug1: load_hostkeys: fopen /etc/ssh/ssh_known_hosts: No such file or directory
debug1: load_hostkeys: fopen /etc/ssh/ssh_known_hosts2: No such file or directory
debug1: SSH2_MSG_KEXINIT sent
debug1: SSH2_MSG_KEXINIT received
debug1: kex: algorithm: ecdh-sha2-nistp256
debug1: kex: host key algorithm: ecdsa-sha2-nistp256
debug1: kex: server->client cipher: aes128-ctr MAC: umac-64@openssh.com compression: none
debug1: kex: client->server cipher: aes128-ctr MAC: umac-64@openssh.com compression: none
debug1: expecting SSH2_MSG_KEX_ECDH_REPLY
debug1: SSH2_MSG_KEX_ECDH_REPLY received
debug1: Server host key: ecdsa-sha2-nistp256 SHA256:PTKJPZC0PPuujGp7jIZvu/PyNzUg4aj4pNF0Nlgi290
debug1: load_hostkeys: fopen /root/.ssh/known_hosts2: No such file or directory
debug1: load_hostkeys: fopen /etc/ssh/ssh_known_hosts: No such file or directory
debug1: load_hostkeys: fopen /etc/ssh/ssh_known_hosts2: No such file or directory
debug1: Host 'x.x.x.x' is known and matches the ECDSA host key.
debug1: Found key in /root/.ssh/known_hosts:1
debug1: rekey out after 4294967296 blocks
debug1: SSH2_MSG_NEWKEYS sent
debug1: expecting SSH2_MSG_NEWKEYS
debug1: SSH2_MSG_NEWKEYS received
debug1: rekey in after 4294967296 blocks
debug1: get_agent_identities: bound agent to hostkey
debug1: get_agent_identities: ssh_fetch_identitylist: agent contains no identities
debug1: Will attempt key: /root/.ssh/id_rsa RSA SHA256:IPjmgGepFVyKiqZF74LyLzcywh2Qx4AcWerAw2tXqfU
debug1: Will attempt key: /root/.ssh/id_ecdsa
debug1: Will attempt key: /root/.ssh/id_ecdsa_sk
debug1: Will attempt key: /root/.ssh/id_ed25519
debug1: Will attempt key: /root/.ssh/id_ed25519_sk
debug1: Will attempt key: /root/.ssh/id_xmss
debug1: Will attempt key: /root/.ssh/id_dsa
debug1: SSH2_MSG_SERVICE_ACCEPT received
debug1: Authentications that can continue: publickey,password
debug1: Next authentication method: publickey
debug1: Offering public key: /root/.ssh/id_rsa RSA SHA256:IPjmgGepFVyKiqZF74LyLzcywh2Qx4AcWerAw2tXqfU
debug1: send_pubkey_test: no mutual signature algorithm
debug1: Trying private key: /root/.ssh/id_ecdsa
debug1: Trying private key: /root/.ssh/id_ecdsa_sk
debug1: Trying private key: /root/.ssh/id_ed25519
debug1: Trying private key: /root/.ssh/id_ed25519_sk
debug1: Trying private key: /root/.ssh/id_xmss
debug1: Trying private key: /root/.ssh/id_dsa
debug1: Next authentication method: password
git@x.x.x.x's password:
```

> `debug1: send_pubkey_test: no mutual signature algorithm`
> 發現原因是 ssh client 和 server 之間沒有共同的簽名算法引起的，導致公鑰驗證失敗

## 解決方法

打開 [openSSH 8.8 release document](https://www.openssh.com/txt/release-8.8) 會發現提到這一段

> Incompatibility is more likely when connecting to older SSH
> implementations that have not been upgraded or have not closely tracked
> improvements in the SSH protocol. For these cases, it may be necessary
> to selectively re-enable RSA/SHA1 to allow connection and/or user
> authentication via the HostkeyAlgorithms and PubkeyAcceptedAlgorithms
> options. For example, the following stanza in ~/.ssh/config will enable
> RSA/SHA1 for host and user authentication for a single destination host:

```bash
Host old-host
  HostkeyAlgorithms +ssh-rsa
  PubkeyAcceptedAlgorithms +ssh-rsa
```

開啟 ~/.ssh/config 檔案並加上如下 config

```bash
Host old-host
  HostkeyAlgorithms +ssh-rsa
  PubkeyAcceptedAlgorithms +ssh-rsa
```

再跑一次 `ssh -T -v git@x.x.x.x` 就會發現成功了 🎉

## 參考

- [openSSH 8.8 release document](https://www.openssh.com/txt/release-8.8)
