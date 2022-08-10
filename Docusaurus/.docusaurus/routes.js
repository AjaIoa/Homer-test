import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Homer-test/fr/blog',
    component: ComponentCreator('/Homer-test/fr/blog', '54c'),
    exact: true
  },
  {
    path: '/Homer-test/fr/blog/archive',
    component: ComponentCreator('/Homer-test/fr/blog/archive', 'b19'),
    exact: true
  },
  {
    path: '/Homer-test/fr/blog/first-blog-post',
    component: ComponentCreator('/Homer-test/fr/blog/first-blog-post', '512'),
    exact: true
  },
  {
    path: '/Homer-test/fr/blog/long-blog-post',
    component: ComponentCreator('/Homer-test/fr/blog/long-blog-post', 'd7e'),
    exact: true
  },
  {
    path: '/Homer-test/fr/blog/mdx-blog-post',
    component: ComponentCreator('/Homer-test/fr/blog/mdx-blog-post', '775'),
    exact: true
  },
  {
    path: '/Homer-test/fr/blog/tags',
    component: ComponentCreator('/Homer-test/fr/blog/tags', 'd7b'),
    exact: true
  },
  {
    path: '/Homer-test/fr/blog/tags/docusaurus',
    component: ComponentCreator('/Homer-test/fr/blog/tags/docusaurus', '534'),
    exact: true
  },
  {
    path: '/Homer-test/fr/blog/tags/facebook',
    component: ComponentCreator('/Homer-test/fr/blog/tags/facebook', '189'),
    exact: true
  },
  {
    path: '/Homer-test/fr/blog/tags/hello',
    component: ComponentCreator('/Homer-test/fr/blog/tags/hello', 'a49'),
    exact: true
  },
  {
    path: '/Homer-test/fr/blog/tags/hola',
    component: ComponentCreator('/Homer-test/fr/blog/tags/hola', '0c7'),
    exact: true
  },
  {
    path: '/Homer-test/fr/blog/welcome',
    component: ComponentCreator('/Homer-test/fr/blog/welcome', 'a58'),
    exact: true
  },
  {
    path: '/Homer-test/fr/markdown-page',
    component: ComponentCreator('/Homer-test/fr/markdown-page', '6b0'),
    exact: true
  },
  {
    path: '/Homer-test/fr/docs',
    component: ComponentCreator('/Homer-test/fr/docs', '370'),
    routes: [
      {
        path: '/Homer-test/fr/docs/category/tutorial---basics',
        component: ComponentCreator('/Homer-test/fr/docs/category/tutorial---basics', '504'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/fr/docs/category/tutorial---extras',
        component: ComponentCreator('/Homer-test/fr/docs/category/tutorial---extras', '6e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/fr/docs/homer/',
        component: ComponentCreator('/Homer-test/fr/docs/homer/', '1f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/fr/docs/homer/j-box-',
        component: ComponentCreator('/Homer-test/fr/docs/homer/j-box-', 'daf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/fr/docs/intro',
        component: ComponentCreator('/Homer-test/fr/docs/intro', '037'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/fr/docs/jitsi/',
        component: ComponentCreator('/Homer-test/fr/docs/jitsi/', '96e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/fr/docs/jitsi/jitsi-box/j-box-',
        component: ComponentCreator('/Homer-test/fr/docs/jitsi/jitsi-box/j-box-', '4c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/fr/docs/jitsi/sip-media/sip-media-deploy',
        component: ComponentCreator('/Homer-test/fr/docs/jitsi/sip-media/sip-media-deploy', '224'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/fr/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/Homer-test/fr/docs/tutorial-basics/congratulations', 'c85'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/fr/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/Homer-test/fr/docs/tutorial-basics/create-a-blog-post', '5d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/fr/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/Homer-test/fr/docs/tutorial-basics/create-a-document', 'b64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/fr/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/Homer-test/fr/docs/tutorial-basics/create-a-page', 'c50'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/fr/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/Homer-test/fr/docs/tutorial-basics/deploy-your-site', 'f20'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/fr/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/Homer-test/fr/docs/tutorial-basics/markdown-features', '51f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/fr/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/Homer-test/fr/docs/tutorial-extras/manage-docs-versions', 'c07'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Homer-test/fr/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/Homer-test/fr/docs/tutorial-extras/translate-your-site', '653'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/Homer-test/fr/',
    component: ComponentCreator('/Homer-test/fr/', '30e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
