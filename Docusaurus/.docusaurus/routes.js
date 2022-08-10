import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Docusaurus1/__docusaurus/debug',
    component: ComponentCreator('/Docusaurus1/__docusaurus/debug', '550'),
    exact: true
  },
  {
    path: '/Docusaurus1/__docusaurus/debug/config',
    component: ComponentCreator('/Docusaurus1/__docusaurus/debug/config', '119'),
    exact: true
  },
  {
    path: '/Docusaurus1/__docusaurus/debug/content',
    component: ComponentCreator('/Docusaurus1/__docusaurus/debug/content', '5da'),
    exact: true
  },
  {
    path: '/Docusaurus1/__docusaurus/debug/globalData',
    component: ComponentCreator('/Docusaurus1/__docusaurus/debug/globalData', 'd35'),
    exact: true
  },
  {
    path: '/Docusaurus1/__docusaurus/debug/metadata',
    component: ComponentCreator('/Docusaurus1/__docusaurus/debug/metadata', '288'),
    exact: true
  },
  {
    path: '/Docusaurus1/__docusaurus/debug/registry',
    component: ComponentCreator('/Docusaurus1/__docusaurus/debug/registry', 'c49'),
    exact: true
  },
  {
    path: '/Docusaurus1/__docusaurus/debug/routes',
    component: ComponentCreator('/Docusaurus1/__docusaurus/debug/routes', '9d8'),
    exact: true
  },
  {
    path: '/Docusaurus1/blog',
    component: ComponentCreator('/Docusaurus1/blog', '77c'),
    exact: true
  },
  {
    path: '/Docusaurus1/blog/archive',
    component: ComponentCreator('/Docusaurus1/blog/archive', '5b6'),
    exact: true
  },
  {
    path: '/Docusaurus1/blog/first-blog-post',
    component: ComponentCreator('/Docusaurus1/blog/first-blog-post', 'f7c'),
    exact: true
  },
  {
    path: '/Docusaurus1/blog/long-blog-post',
    component: ComponentCreator('/Docusaurus1/blog/long-blog-post', 'aa6'),
    exact: true
  },
  {
    path: '/Docusaurus1/blog/mdx-blog-post',
    component: ComponentCreator('/Docusaurus1/blog/mdx-blog-post', 'd54'),
    exact: true
  },
  {
    path: '/Docusaurus1/blog/tags',
    component: ComponentCreator('/Docusaurus1/blog/tags', 'ac4'),
    exact: true
  },
  {
    path: '/Docusaurus1/blog/tags/docusaurus',
    component: ComponentCreator('/Docusaurus1/blog/tags/docusaurus', 'acb'),
    exact: true
  },
  {
    path: '/Docusaurus1/blog/tags/facebook',
    component: ComponentCreator('/Docusaurus1/blog/tags/facebook', '699'),
    exact: true
  },
  {
    path: '/Docusaurus1/blog/tags/hello',
    component: ComponentCreator('/Docusaurus1/blog/tags/hello', 'ac7'),
    exact: true
  },
  {
    path: '/Docusaurus1/blog/tags/hola',
    component: ComponentCreator('/Docusaurus1/blog/tags/hola', '32b'),
    exact: true
  },
  {
    path: '/Docusaurus1/blog/welcome',
    component: ComponentCreator('/Docusaurus1/blog/welcome', '27e'),
    exact: true
  },
  {
    path: '/Docusaurus1/markdown-page',
    component: ComponentCreator('/Docusaurus1/markdown-page', '779'),
    exact: true
  },
  {
    path: '/Docusaurus1/docs',
    component: ComponentCreator('/Docusaurus1/docs', '2de'),
    routes: [
      {
        path: '/Docusaurus1/docs/category/tutorial---basics',
        component: ComponentCreator('/Docusaurus1/docs/category/tutorial---basics', '886'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus1/docs/category/tutorial---extras',
        component: ComponentCreator('/Docusaurus1/docs/category/tutorial---extras', '272'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus1/docs/intro',
        component: ComponentCreator('/Docusaurus1/docs/intro', '1bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus1/docs/jitsi/',
        component: ComponentCreator('/Docusaurus1/docs/jitsi/', '965'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus1/docs/jitsi/jitsi-box/j-box-',
        component: ComponentCreator('/Docusaurus1/docs/jitsi/jitsi-box/j-box-', '847'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus1/docs/jitsi/sip-media/sip-media-deploy',
        component: ComponentCreator('/Docusaurus1/docs/jitsi/sip-media/sip-media-deploy', 'e85'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus1/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/Docusaurus1/docs/tutorial-basics/congratulations', '4c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus1/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/Docusaurus1/docs/tutorial-basics/create-a-blog-post', '896'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus1/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/Docusaurus1/docs/tutorial-basics/create-a-document', 'cb5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus1/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/Docusaurus1/docs/tutorial-basics/create-a-page', '9ce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus1/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/Docusaurus1/docs/tutorial-basics/deploy-your-site', 'c72'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus1/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/Docusaurus1/docs/tutorial-basics/markdown-features', '5e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus1/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/Docusaurus1/docs/tutorial-extras/manage-docs-versions', '9d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus1/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/Docusaurus1/docs/tutorial-extras/translate-your-site', '66f'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/Docusaurus1/',
    component: ComponentCreator('/Docusaurus1/', 'f44'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
