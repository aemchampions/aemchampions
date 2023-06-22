# AEM Champions

Adobe Experience Manager (AEM) Champions are our most passionate brand ambassadors and product experts who actively share their knowledge and expertise with the larger AEM developer community. They have demonstrated outstanding leadership, loyalty, and a passion for helping customers succeed.

AEM Champions

- 2023 AEM champions (coming soon!)
- [2022 AEM champions](https://business.adobe.com/blog/the-latest/introducing-the-very-first-adobe-experience-manager-champion-class)
- [Inaugural AEM post on Adobe Experience League](https://business.adobe.com/blog/the-latest/introducing-the-very-first-adobe-experience-manager-champion-class)
- [The launch of the Adobe Experience Manager Champion Program](https://experienceleaguecommunities.adobe.com/t5/adobe-experience-manager/the-launch-of-the-adobe-experience-manager-champion-program/m-p/446437)


## Environments
- Preview: https://main--{repo}--{owner}.hlx.page/
- Live: https://main--{repo}--{owner}.hlx.live/

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `helix-project-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [helix-bot](https://github.com/apps/helix-bot) to the repository
1. Install the [Helix CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/helix-cli`
1. Start Franklin Proxy: `hlx up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)
