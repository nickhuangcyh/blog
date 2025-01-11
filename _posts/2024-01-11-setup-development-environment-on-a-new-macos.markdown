---
layout: single
title: "Setup Development Environment on a New macOS"
date: 2025-01-11 15:00:00 +0800
excerpt: "Step-by-step guide to setting up a mobile development environment on a new macOS system."
header:
  overlay_image: /assets/images/raul-per-e-K2w9VegUIb0-unsplash.jpg
  teaser: /assets/images/raul-per-e-K2w9VegUIb0-unsplash.jpg
tags: [macOS, Development, Mobile Development]
categories: [Setup Guide]
---

# Setup Development Environment on a New macOS

## Install [Homebrew](https://brew.sh/index_zh-tw)

```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Common Issue

```zsh
Warning: /opt/homebrew/bin is not in your PATH
```

To resolve this, add Homebrew's bin directory to your PATH:

```zsh
vim ~/.zshrc
export PATH=/opt/homebrew/bin:$PATH
:wq
source ~/.zshrc
```

Refer to [this StackOverflow thread](https://stackoverflow.com/questions/65487249/getting-a-warning-when-installing-homebrew-on-macos-big-sur-m1-chip) for more details.

## Install Git

```zsh
brew install git
```

### [Setup Git Email & Name](https://stackoverflow.com/questions/46941346/how-to-know-the-git-username-and-email-saved-during-configuration/53940971)

```zsh
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

### [Setup Git Alias](https://stackoverflow.com/questions/2553786/how-do-i-alias-commands-in-git)

```zsh
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.br branch
```

## Install [iTerm2](https://formulae.brew.sh/cask/iterm2)

```zsh
brew tap homebrew/cask
brew install --cask iterm2
```

Switch from the default Terminal to iTerm2.

## iTerm2 + Zsh Setup

### Install [Zsh](https://formulae.brew.sh/formula/zsh#default)

```zsh
brew install zsh
```

### Install [Oh-My-Zsh](https://ohmyz.sh/#install)

```zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Setup Colors

Navigate to Preferences -> Profiles -> Colors -> Select 'Solarized'.

### Install Fonts

```zsh
brew tap homebrew/cask-fonts
brew search font-meslo-lg-nerd-font
brew install --cask font-meslo-lg-nerd-font
```

Set your terminal font to `font-meslo-lg-nerd-font` in Preferences.

### Install [Powerlevel10k](https://github.com/romkatv/powerlevel10k) Theme

```zsh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

Update your `~/.zshrc` to use Powerlevel10k:

```zsh
ZSH_THEME="powerlevel10k/powerlevel10k"
```

Run the following to configure the theme:

```zsh
p10k configure
```

### Install [Zsh-Syntax-Highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)

```zsh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

Activate the plugin in `~/.zshrc`:

```zsh
plugins=(... zsh-syntax-highlighting)
```

### Install [Zsh-Autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)

```zsh
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

Activate the plugin in `~/.zshrc`:

```zsh
plugins=(... zsh-autosuggestions)
```

Restart your terminal to apply changes.

## iOS Environment: Install Xcode

### Install Xcodes Tool

```zsh
brew install robotsandpencils/made/xcodes
```

### Common Issue

```zsh
error: terminated(72): /usr/bin/xcrun --sdk macosx --find xctest output:
    xcrun: error: unable to find utility "xctest", not a developer tool or in PATH
```

Refer to [this GitHub issue](https://github.com/RobotsAndPencils/xcodes/issues/148) for resolution.

### Alternative: Use XcodesApp

If issues persist, download Xcode via the [App Store](https://apps.apple.com/).

## Install JetBrains Toolbox

```zsh
brew install --cask jetbrains-toolbox
```

Use JetBrains Toolbox to manage IDEs like Android Studio, IntelliJ IDEA, and PyCharm.

## Install OpenJDK

```zsh
brew install openjdk@11
```

Add OpenJDK to your PATH:

```zsh
echo 'export PATH="/opt/homebrew/opt/openjdk@11/bin:$PATH"' >> ~/.zshrc
```

For compilers, set:

```zsh
export CPPFLAGS="-I/opt/homebrew/opt/openjdk@11/include"
```

## SSH Key Setup

Create unique keys for each platform (e.g., GitHub, GitLab).

### GitHub

Follow [GitHub's guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

### GitLab

Follow [GitLab's SSH setup guide](http://10.1.2.150:53180/help/ssh/README).

## Android Build Issue

```zsh
Caused by: java.lang.Exception: No native library is found for os.name=Mac and os.arch=aarch64. path=/org/sqlite/native/Mac/aarch64
```

Refer to [this StackOverflow solution](https://stackoverflow.com/questions/68884589/caused-by-java-lang-exception-no-native-library-is-found-for-os-name-mac-and-o).

---

🎉 Your macOS development environment setup is complete!
