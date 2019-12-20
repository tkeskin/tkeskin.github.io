---
title: Ubuntu ssh nasıl ?
layout: post
tag: ubuntuSSH ubuntuSSHNasıl ubuntuSSHNedir ubuntuSSHAktifEtme
---

Enabling SSH on Ubuntu

- sudo apt update
- sudo apt install openssh-server
- sudo systemctl status ssh
- sudo ufw allow ssh
- ssh username@ip_address

Disabling SSH on Ubuntu

- sudo systemctl disable ssh
- sudo systemctl status ssh