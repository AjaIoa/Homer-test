---
sidebar_position: 1
---
# SIPMediaDeploy

This repository hosts all scripts that permit to deploy from scratch the entire SIP Media Gateway stack! It is divided in three parts:
* the ansible directory, that uses Ansible for the provisioning of the virtual machines.
* the packer directory, that uses Packer to build VM images.
* the terraform directory, that uses Terraform to deploy the stack on several cloud providers and configures it with Cloud-Init.

The solution developed in this repository relies on two external repositories that permit to build the Docker images:
* the SIPMediaGateway repository, which contains the code of the SIP Media Gateway.
* the SimpleScaleVM repository, which contains the code of the scaling module.

The full explanation of the approach and functioning of this project are described in the documentation directory.


## Configuration

All of the configuration is located in the env.d directory.


## Installation

Each part of the repository relies on packages and dependencies; to install them, follow the installation guidelines detailed in the READMEs and install dependencies with the following command:

```bash
make install
```


## Deploy the stack

To deploy the stack, you must first build the VM images:

```bash
make build
```

Then, you may deploy the stack:

```bash
make deploy
```


## Licensing

Apache License Version 2.0.

See LICENSE to see the full text.

