import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Homer-test/__docusaurus/debug',
    component: ComponentCreator('/Homer-test/__docusaurus/debug', '94b'),
    exact: true
  },
  {
    path: '/Homer-test/__docusaurus/debug/config',
    component: ComponentCreator('/Homer-test/__docusaurus/debug/config', '0d2'),
    exact: true
  },
  {
    path: '/Homer-test/__docusaurus/debug/content',
    component: ComponentCreator('/Homer-test/__docusaurus/debug/content', '24e'),
    exact: true
  },
  {
    path: '/Homer-test/__docusaurus/debug/globalData',
    component: ComponentCreator('/Homer-test/__docusaurus/debug/globalData', 'a36'),
    exact: true
  },
  {
    path: '/Homer-test/__docusaurus/debug/metadata',
    component: ComponentCreator('/Homer-test/__docusaurus/debug/metadata', '2d6'),
    exact: true
  },
  {
    path: '/Homer-test/__docusaurus/debug/registry',
    component: ComponentCreator('/Homer-test/__docusaurus/debug/registry', 'e20'),
    exact: true
  },
  {
    path: '/Homer-test/__docusaurus/debug/routes',
    component: ComponentCreator('/Homer-test/__docusaurus/debug/routes', '56a'),
    exact: true
  },
  {
    path: '/Homer-test/blog',
    component: ComponentCreator('/Homer-test/blog', '8d4'),
    exact: true
  },
  {
    path: '/Homer-test/blog/archive',
    component: ComponentCreator('/Homer-test/blog/archive', '7a9'),
    exact: true
  },
  {
    path: '/Homer-test/blog/first-blog-post',
    component: ComponentCreator('/Homer-test/blog/first-blog-post', 'a76'),
    exact: true
  },
  {
    path: '/Homer-test/blog/long-blog-post',
    component: ComponentCreator('/Homer-test/blog/long-blog-post', 'ae1'),
    exact: true
  },
  {
    path: '/Homer-test/blog/mdx-blog-post',
    component: ComponentCreator('/Homer-test/blog/mdx-blog-post', '19a'),
    exact: true
  },
  {
    path: '/Homer-test/blog/tags',
    component: ComponentCreator('/Homer-test/blog/tags', '078'),
    exact: true
  },
  {
    path: '/Homer-test/blog/tags/docusaurus',
    component: ComponentCreator('/Homer-test/blog/tags/docusaurus', 'b83'),
    exact: true
  },
  {
    path: '/Homer-test/blog/tags/facebook',
    component: ComponentCreator('/Homer-test/blog/tags/facebook', 'cf9'),
    exact: true
  },
  {
    path: '/Homer-test/blog/tags/hello',
    component: ComponentCreator('/Homer-test/blog/tags/hello', '0c5'),
    exact: true
  },
  {
    path: '/Homer-test/blog/tags/hola',
    component: ComponentCreator('/Homer-test/blog/tags/hola', 'db4'),
    exact: true
  },
  {
    path: '/Homer-test/blog/welcome',
    component: ComponentCreator('/Homer-test/blog/welcome', 'ab6'),
    exact: true
  },
  {
    path: '/Homer-test/markdown-page',
    component: ComponentCreator('/Homer-test/markdown-page', 'fe4'),
    exact: true
  },
  {
    path: '/Homer-test/docs',
    component: ComponentCreator('/Homer-test/docs', '38a'),
    routes: [
      {
        path: '/Homer-test/docs/category/tutorial---basics',
        component: ComponentCreator('/Homer-test/docs/category/tutorial---basics', 'ec3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/docs/category/tutorial---extras',
        component: ComponentCreator('/Homer-test/docs/category/tutorial---extras', '392'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/docs/homer/',
        component: ComponentCreator('/Homer-test/docs/homer/', '6b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/docs/homer/j-box-',
        component: ComponentCreator('/Homer-test/docs/homer/j-box-', 'ee1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/docs/intro',
        component: ComponentCreator('/Homer-test/docs/intro', '4cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/docs/jitsi/',
        component: ComponentCreator('/Homer-test/docs/jitsi/', '745'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/docs/jitsi/jitsi-box/j-box-',
        component: ComponentCreator('/Homer-test/docs/jitsi/jitsi-box/j-box-', '8a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/docs/jitsi/sip-media/sip-media-deploy',
        component: ComponentCreator('/Homer-test/docs/jitsi/sip-media/sip-media-deploy', '711'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/Homer-test/docs/tutorial-basics/congratulations', 'eba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/Homer-test/docs/tutorial-basics/create-a-blog-post', '0e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/Homer-test/docs/tutorial-basics/create-a-document', '76d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/Homer-test/docs/tutorial-basics/create-a-page', 'd9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/Homer-test/docs/tutorial-basics/deploy-your-site', 'ec7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/Homer-test/docs/tutorial-basics/markdown-features', '222'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/Homer-test/docs/tutorial-extras/manage-docs-versions', '47a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/Homer-test/docs/tutorial-extras/translate-your-site', 'db9'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/Homer-test/',
    component: ComponentCreator('/Homer-test/', '129'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
