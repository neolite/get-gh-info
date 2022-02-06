import React from 'react';
import styled from 'styled-components';
import { createStore, sample } from 'effector'
import {createGate, useGate, useStore} from 'effector-react'

import { getUserInfo, $githubUser } from './init';

import { CompanyIcon } from './components/CompanyIcon';

const Page = createGate('page')

const $user = createStore<{ login: string }>({
  login: 'gaearon'
})

sample({
  source: $user,
  clock: Page.open,
  target: getUserInfo,
});


const CSSSVariables = styled.div`
  -webkit-text-size-adjust: 100%;
  --Layout-pane-width: 220px;
  --Layout-content-width: 100%;
  --Layout-template-columns: 1fr var(--Layout-pane-width);
  --Layout-template-areas: "content pane";
  --Layout-column-gap: 16px;
  --Layout-row-gap: 16px;
  --Layout-outer-spacing-x: 0px;
  --Layout-outer-spacing-y: 0px;
  --Layout-inner-spacing-min: 0px;
  --Layout-inner-spacing-max: 0px;
  --border-width: 1px;
  --border-style: solid;
  --font-size-small: 12px;
  --font-weight-semibold: 500;
  --size-2: 20px;
  --color-canvas-default-transparent: rgba(255,255,255,0);
  --color-page-header-bg: #f6f8fa;
  --color-marketing-icon-primary: #218bff;
  --color-marketing-icon-secondary: #54aeff;
  --color-diff-blob-addition-num-text: #24292f;
  --color-diff-blob-addition-fg: #24292f;
  --color-diff-blob-addition-num-bg: #CCFFD8;
  --color-diff-blob-addition-line-bg: #E6FFEC;
  --color-diff-blob-addition-word-bg: #ABF2BC;
  --color-diff-blob-deletion-num-text: #24292f;
  --color-diff-blob-deletion-fg: #24292f;
  --color-diff-blob-deletion-num-bg: #FFD7D5;
  --color-diff-blob-deletion-line-bg: #FFEBE9;
  --color-diff-blob-deletion-word-bg: rgba(255,129,130,0.4);
  --color-diff-blob-hunk-num-bg: rgba(84,174,255,0.4);
  --color-diff-blob-expander-icon: #57606a;
  --color-diff-blob-selected-line-highlight-mix-blend-mode: multiply;
  --color-diffstat-deletion-border: rgba(27,31,36,0.15);
  --color-diffstat-addition-border: rgba(27,31,36,0.15);
  --color-diffstat-addition-bg: #2da44e;
  --color-search-keyword-hl: #fff8c5;
  --color-prettylights-syntax-comment: #6e7781;
  --color-prettylights-syntax-constant: #0550ae;
  --color-prettylights-syntax-entity: #8250df;
  --color-prettylights-syntax-storage-modifier-import: #24292f;
  --color-prettylights-syntax-entity-tag: #116329;
  --color-prettylights-syntax-keyword: #cf222e;
  --color-prettylights-syntax-string: #0a3069;
  --color-prettylights-syntax-variable: #953800;
  --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
  --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
  --color-prettylights-syntax-invalid-illegal-bg: #82071e;
  --color-prettylights-syntax-carriage-return-text: #f6f8fa;
  --color-prettylights-syntax-carriage-return-bg: #cf222e;
  --color-prettylights-syntax-string-regexp: #116329;
  --color-prettylights-syntax-markup-list: #3b2300;
  --color-prettylights-syntax-markup-heading: #0550ae;
  --color-prettylights-syntax-markup-italic: #24292f;
  --color-prettylights-syntax-markup-bold: #24292f;
  --color-prettylights-syntax-markup-deleted-text: #82071e;
  --color-prettylights-syntax-markup-deleted-bg: #FFEBE9;
  --color-prettylights-syntax-markup-inserted-text: #116329;
  --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
  --color-prettylights-syntax-markup-changed-text: #953800;
  --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
  --color-prettylights-syntax-markup-ignored-text: #eaeef2;
  --color-prettylights-syntax-markup-ignored-bg: #0550ae;
  --color-prettylights-syntax-meta-diff-range: #8250df;
  --color-prettylights-syntax-brackethighlighter-angle: #57606a;
  --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
  --color-prettylights-syntax-constant-other-reference-link: #0a3069;
  --color-codemirror-text: #24292f;
  --color-codemirror-bg: #ffffff;
  --color-codemirror-gutters-bg: #ffffff;
  --color-codemirror-guttermarker-text: #ffffff;
  --color-codemirror-guttermarker-subtle-text: #6e7781;
  --color-codemirror-linenumber-text: #57606a;
  --color-codemirror-cursor: #24292f;
  --color-codemirror-selection-bg: rgba(84,174,255,0.4);
  --color-codemirror-activeline-bg: rgba(234,238,242,0.5);
  --color-codemirror-matchingbracket-text: #24292f;
  --color-codemirror-lines-bg: #ffffff;
  --color-codemirror-syntax-comment: #24292f;
  --color-codemirror-syntax-constant: #0550ae;
  --color-codemirror-syntax-entity: #8250df;
  --color-codemirror-syntax-keyword: #cf222e;
  --color-codemirror-syntax-storage: #cf222e;
  --color-codemirror-syntax-string: #0a3069;
  --color-codemirror-syntax-support: #0550ae;
  --color-codemirror-syntax-variable: #953800;
  --color-checks-bg: #24292f;
  --color-checks-run-border-width: 0px;
  --color-checks-container-border-width: 0px;
  --color-checks-text-primary: #f6f8fa;
  --color-checks-text-secondary: #8c959f;
  --color-checks-text-link: #54aeff;
  --color-checks-btn-icon: #afb8c1;
  --color-checks-btn-hover-icon: #f6f8fa;
  --color-checks-btn-hover-bg: rgba(255,255,255,0.125);
  --color-checks-input-text: #eaeef2;
  --color-checks-input-placeholder-text: #8c959f;
  --color-checks-input-focus-text: #8c959f;
  --color-checks-input-bg: #32383f;
  --color-checks-input-shadow: none;
  --color-checks-donut-error: #fa4549;
  --color-checks-donut-pending: #bf8700;
  --color-checks-donut-success: #2da44e;
  --color-checks-donut-neutral: #afb8c1;
  --color-checks-dropdown-text: #afb8c1;
  --color-checks-dropdown-bg: #32383f;
  --color-checks-dropdown-border: #424a53;
  --color-checks-dropdown-shadow: rgba(27,31,36,0.3);
  --color-checks-dropdown-hover-text: #f6f8fa;
  --color-checks-dropdown-hover-bg: #424a53;
  --color-checks-dropdown-btn-hover-text: #f6f8fa;
  --color-checks-dropdown-btn-hover-bg: #32383f;
  --color-checks-scrollbar-thumb-bg: #57606a;
  --color-checks-header-label-text: #d0d7de;
  --color-checks-header-label-open-text: #f6f8fa;
  --color-checks-header-border: #32383f;
  --color-checks-header-icon: #8c959f;
  --color-checks-line-text: #d0d7de;
  --color-checks-line-num-text: rgba(140,149,159,0.75);
  --color-checks-line-timestamp-text: #8c959f;
  --color-checks-line-hover-bg: #32383f;
  --color-checks-line-selected-bg: rgba(33,139,255,0.15);
  --color-checks-line-selected-num-text: #54aeff;
  --color-checks-line-dt-fm-text: #24292f;
  --color-checks-line-dt-fm-bg: #9a6700;
  --color-checks-gate-bg: rgba(125,78,0,0.15);
  --color-checks-gate-text: #d0d7de;
  --color-checks-gate-waiting-text: #afb8c1;
  --color-checks-step-header-open-bg: #32383f;
  --color-checks-step-error-text: #ff8182;
  --color-checks-step-warning-text: #d4a72c;
  --color-checks-logline-text: #8c959f;
  --color-checks-logline-num-text: rgba(140,149,159,0.75);
  --color-checks-logline-debug-text: #c297ff;
  --color-checks-logline-error-text: #d0d7de;
  --color-checks-logline-error-num-text: #ff8182;
  --color-checks-logline-error-bg: rgba(164,14,38,0.15);
  --color-checks-logline-warning-text: #d0d7de;
  --color-checks-logline-warning-num-text: #d4a72c;
  --color-checks-logline-warning-bg: rgba(125,78,0,0.15);
  --color-checks-logline-command-text: #54aeff;
  --color-checks-logline-section-text: #4ac26b;
  --color-checks-ansi-black: #24292f;
  --color-checks-ansi-black-bright: #32383f;
  --color-checks-ansi-white: #d0d7de;
  --color-checks-ansi-white-bright: #d0d7de;
  --color-checks-ansi-gray: #8c959f;
  --color-checks-ansi-red: #ff8182;
  --color-checks-ansi-red-bright: #ffaba8;
  --color-checks-ansi-green: #4ac26b;
  --color-checks-ansi-green-bright: #6fdd8b;
  --color-checks-ansi-yellow: #d4a72c;
  --color-checks-ansi-yellow-bright: #eac54f;
  --color-checks-ansi-blue: #54aeff;
  --color-checks-ansi-blue-bright: #80ccff;
  --color-checks-ansi-magenta: #c297ff;
  --color-checks-ansi-magenta-bright: #d8b9ff;
  --color-checks-ansi-cyan: #76e3ea;
  --color-checks-ansi-cyan-bright: #b3f0ff;
  --color-project-header-bg: #24292f;
  --color-project-sidebar-bg: #ffffff;
  --color-project-gradient-in: #ffffff;
  --color-project-gradient-out: rgba(255,255,255,0);
  --color-mktg-btn-bg: #1b1f23;
  --color-mktg-btn-shadow-outline: rgb(0 0 0 / 15%) 0 0 0 1px inset;
  --color-mktg-btn-shadow-focus: rgb(0 0 0 / 15%) 0 0 0 4px;
  --color-mktg-btn-shadow-hover: 0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02);
  --color-mktg-btn-shadow-hover-muted: rgb(0 0 0 / 70%) 0 0 0 2px inset;
  --color-avatar-bg: #ffffff;
  --color-avatar-border: rgba(27,31,36,0.15);
  --color-avatar-stack-fade: #afb8c1;
  --color-avatar-stack-fade-more: #d0d7de;
  --color-avatar-child-shadow: -2px -2px 0 rgba(255,255,255,0.8);
  --color-topic-tag-border: rgba(0,0,0,0);
  --color-counter-border: rgba(0,0,0,0);
  --color-select-menu-backdrop-border: rgba(0,0,0,0);
  --color-select-menu-tap-highlight: rgba(175,184,193,0.5);
  --color-select-menu-tap-focus-bg: #b6e3ff;
  --color-overlay-shadow: 0 1px 3px rgba(27,31,36,0.12), 0 8px 24px rgba(66,74,83,0.12);
  --color-header-text: rgba(255,255,255,0.7);
  --color-header-bg: #24292f;
  --color-header-divider: #57606a;
  --color-header-logo: #ffffff;
  --color-header-search-bg: #24292f;
  --color-header-search-border: #57606a;
  --color-sidenav-selected-bg: #ffffff;
  --color-menu-bg-active: rgba(0,0,0,0);
  --color-input-disabled-bg: rgba(175,184,193,0.2);
  --color-timeline-badge-bg: #eaeef2;
  --color-ansi-black: #24292f;
  --color-ansi-black-bright: #57606a;
  --color-ansi-white: #6e7781;
  --color-ansi-white-bright: #8c959f;
  --color-ansi-gray: #6e7781;
  --color-ansi-red: #cf222e;
  --color-ansi-red-bright: #a40e26;
  --color-ansi-green: #116329;
  --color-ansi-green-bright: #1a7f37;
  --color-ansi-yellow: #4d2d00;
  --color-ansi-yellow-bright: #633c01;
  --color-ansi-blue: #0969da;
  --color-ansi-blue-bright: #218bff;
  --color-ansi-magenta: #8250df;
  --color-ansi-magenta-bright: #a475f9;
  --color-ansi-cyan: #1b7c83;
  --color-ansi-cyan-bright: #3192aa;
  --color-btn-text: #24292f;
  --color-btn-bg: #f6f8fa;
  --color-btn-border: rgba(27,31,36,0.15);
  --color-btn-shadow: 0 1px 0 rgba(27,31,36,0.04);
  --color-btn-inset-shadow: inset 0 1px 0 rgba(255,255,255,0.25);
  --color-btn-hover-bg: #f3f4f6;
  --color-btn-hover-border: rgba(27,31,36,0.15);
  --color-btn-active-bg: hsla(220,14%,93%,1);
  --color-btn-active-border: rgba(27,31,36,0.15);
  --color-btn-selected-bg: hsla(220,14%,94%,1);
  --color-btn-focus-bg: #f6f8fa;
  --color-btn-focus-border: rgba(27,31,36,0.15);
  --color-btn-focus-shadow: 0 0 0 3px rgba(9,105,218,0.3);
  --color-btn-shadow-active: inset 0 0.15em 0.3em rgba(27,31,36,0.15);
  --color-btn-shadow-input-focus: 0 0 0 0.2em rgba(9,105,218,0.3);
  --color-btn-counter-bg: rgba(27,31,36,0.08);
  --color-btn-primary-text: #ffffff;
  --color-btn-primary-bg: #2da44e;
  --color-btn-primary-border: rgba(27,31,36,0.15);
  --color-btn-primary-shadow: 0 1px 0 rgba(27,31,36,0.1);
  --color-btn-primary-inset-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
  --color-btn-primary-hover-bg: #2c974b;
  --color-btn-primary-hover-border: rgba(27,31,36,0.15);
  --color-btn-primary-selected-bg: hsla(137,55%,36%,1);
  --color-btn-primary-selected-shadow: inset 0 1px 0 rgba(0,45,17,0.2);
  --color-btn-primary-disabled-text: rgba(255,255,255,0.8);
  --color-btn-primary-disabled-bg: #94d3a2;
  --color-btn-primary-disabled-border: rgba(27,31,36,0.15);
  --color-btn-primary-focus-bg: #2da44e;
  --color-btn-primary-focus-border: rgba(27,31,36,0.15);
  --color-btn-primary-focus-shadow: 0 0 0 3px rgba(45,164,78,0.4);
  --color-btn-primary-icon: rgba(255,255,255,0.8);
  --color-btn-primary-counter-bg: rgba(255,255,255,0.2);
  --color-btn-outline-text: #0969da;
  --color-btn-outline-hover-text: #ffffff;
  --color-btn-outline-hover-bg: #0969da;
  --color-btn-outline-hover-border: rgba(27,31,36,0.15);
  --color-btn-outline-hover-shadow: 0 1px 0 rgba(27,31,36,0.1);
  --color-btn-outline-hover-inset-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
  --color-btn-outline-hover-counter-bg: rgba(255,255,255,0.2);
  --color-btn-outline-selected-text: #ffffff;
  --color-btn-outline-selected-bg: hsla(212,92%,42%,1);
  --color-btn-outline-selected-border: rgba(27,31,36,0.15);
  --color-btn-outline-selected-shadow: inset 0 1px 0 rgba(0,33,85,0.2);
  --color-btn-outline-disabled-text: rgba(9,105,218,0.5);
  --color-btn-outline-disabled-bg: #f6f8fa;
  --color-btn-outline-disabled-counter-bg: rgba(9,105,218,0.05);
  --color-btn-outline-focus-border: rgba(27,31,36,0.15);
  --color-btn-outline-focus-shadow: 0 0 0 3px rgba(5,80,174,0.4);
  --color-btn-outline-counter-bg: rgba(9,105,218,0.1);
  --color-btn-danger-text: #cf222e;
  --color-btn-danger-hover-text: #ffffff;
  --color-btn-danger-hover-bg: #a40e26;
  --color-btn-danger-hover-border: rgba(27,31,36,0.15);
  --color-btn-danger-hover-shadow: 0 1px 0 rgba(27,31,36,0.1);
  --color-btn-danger-hover-inset-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
  --color-btn-danger-hover-counter-bg: rgba(255,255,255,0.2);
  --color-btn-danger-selected-text: #ffffff;
  --color-btn-danger-selected-bg: hsla(356,72%,44%,1);
  --color-btn-danger-selected-border: rgba(27,31,36,0.15);
  --color-btn-danger-selected-shadow: inset 0 1px 0 rgba(76,0,20,0.2);
  --color-btn-danger-disabled-text: rgba(207,34,46,0.5);
  --color-btn-danger-disabled-bg: #f6f8fa;
  --color-btn-danger-disabled-counter-bg: rgba(207,34,46,0.05);
  --color-btn-danger-focus-border: rgba(27,31,36,0.15);
  --color-btn-danger-focus-shadow: 0 0 0 3px rgba(164,14,38,0.4);
  --color-btn-danger-counter-bg: rgba(207,34,46,0.1);
  --color-btn-danger-icon: #cf222e;
  --color-btn-danger-hover-icon: #ffffff;
  --color-underlinenav-icon: #6e7781;
  --color-underlinenav-border-hover: rgba(175,184,193,0.2);
  --color-action-list-item-inline-divider: rgba(208,215,222,0.48);
  --color-action-list-item-default-hover-bg: rgba(208,215,222,0.32);
  --color-action-list-item-default-hover-border: rgba(0,0,0,0);
  --color-action-list-item-default-active-bg: rgba(208,215,222,0.48);
  --color-action-list-item-default-active-border: rgba(0,0,0,0);
  --color-action-list-item-default-selected-bg: rgba(208,215,222,0.24);
  --color-action-list-item-danger-hover-bg: rgba(255,235,233,0.64);
  --color-action-list-item-danger-active-bg: #FFEBE9;
  --color-action-list-item-danger-hover-text: #cf222e;
  --color-fg-default: #24292f;
  --color-fg-muted: #57606a;
  --color-fg-subtle: #6e7781;
  --color-fg-on-emphasis: #ffffff;
  --color-canvas-default: #ffffff;
  --color-canvas-overlay: #ffffff;
  --color-canvas-inset: #f6f8fa;
  --color-canvas-subtle: #f6f8fa;
  --color-border-default: #d0d7de;
  --color-border-muted: hsla(210,18%,87%,1);
  --color-border-subtle: rgba(27,31,36,0.15);
  --color-shadow-small: 0 1px 0 rgba(27,31,36,0.04);
  --color-shadow-medium: 0 3px 6px rgba(140,149,159,0.15);
  --color-shadow-large: 0 8px 24px rgba(140,149,159,0.2);
  --color-shadow-extra-large: 0 12px 28px rgba(140,149,159,0.3);
  --color-neutral-emphasis-plus: #24292f;
  --color-neutral-emphasis: #6e7781;
  --color-neutral-muted: rgba(175,184,193,0.2);
  --color-neutral-subtle: rgba(234,238,242,0.5);
  --color-accent-fg: #0969da;
  --color-accent-emphasis: #0969da;
  --color-accent-muted: rgba(84,174,255,0.4);
  --color-accent-subtle: #ddf4ff;
  --color-success-fg: #1a7f37;
  --color-success-emphasis: #2da44e;
  --color-success-muted: rgba(74,194,107,0.4);
  --color-success-subtle: #dafbe1;
  --color-attention-fg: #9a6700;
  --color-attention-emphasis: #bf8700;
  --color-attention-muted: rgba(212,167,44,0.4);
  --color-attention-subtle: #fff8c5;
  --color-severe-fg: #bc4c00;
  --color-severe-emphasis: #bc4c00;
  --color-severe-muted: rgba(251,143,68,0.4);
  --color-severe-subtle: #fff1e5;
  --color-danger-fg: #cf222e;
  --color-danger-emphasis: #cf222e;
  --color-danger-muted: rgba(255,129,130,0.4);
  --color-danger-subtle: #FFEBE9;
  --color-done-fg: #8250df;
  --color-done-emphasis: #8250df;
  --color-done-muted: rgba(194,151,255,0.4);
  --color-done-subtle: #fbefff;
  --color-sponsors-fg: #bf3989;
  --color-sponsors-emphasis: #bf3989;
  --color-sponsors-muted: rgba(255,128,200,0.4);
  --color-sponsors-subtle: #ffeff7;
  --color-primer-fg-disabled: #8c959f;
  --color-primer-canvas-backdrop: rgba(27,31,36,0.5);
  --color-primer-canvas-sticky: rgba(255,255,255,0.95);
  --color-primer-border-active: #FD8C73;
  --color-primer-border-contrast: rgba(27,31,36,0.1);
  --color-primer-shadow-highlight: inset 0 1px 0 rgba(255,255,255,0.25);
  --color-primer-shadow-inset: inset 0 1px 0 rgba(208,215,222,0.2);
  --color-primer-shadow-focus: 0 0 0 3px rgba(9,105,218,0.3);
  --color-scale-black: #1b1f24;
  --color-scale-white: #ffffff;
  --color-scale-gray-0: #f6f8fa;
  --color-scale-gray-1: #eaeef2;
  --color-scale-gray-2: #d0d7de;
  --color-scale-gray-3: #afb8c1;
  --color-scale-gray-4: #8c959f;
  --color-scale-gray-5: #6e7781;
  --color-scale-gray-6: #57606a;
  --color-scale-gray-7: #424a53;
  --color-scale-gray-8: #32383f;
  --color-scale-gray-9: #24292f;
  --color-scale-blue-0: #ddf4ff;
  --color-scale-blue-1: #b6e3ff;
  --color-scale-blue-2: #80ccff;
  --color-scale-blue-3: #54aeff;
  --color-scale-blue-4: #218bff;
  --color-scale-blue-5: #0969da;
  --color-scale-blue-6: #0550ae;
  --color-scale-blue-7: #033d8b;
  --color-scale-blue-8: #0a3069;
  --color-scale-blue-9: #002155;
  --color-scale-green-0: #dafbe1;
  --color-scale-green-1: #aceebb;
  --color-scale-green-2: #6fdd8b;
  --color-scale-green-3: #4ac26b;
  --color-scale-green-4: #2da44e;
  --color-scale-green-5: #1a7f37;
  --color-scale-green-6: #116329;
  --color-scale-green-7: #044f1e;
  --color-scale-green-8: #003d16;
  --color-scale-green-9: #002d11;
  --color-scale-yellow-0: #fff8c5;
  --color-scale-yellow-1: #fae17d;
  --color-scale-yellow-2: #eac54f;
  --color-scale-yellow-3: #d4a72c;
  --color-scale-yellow-4: #bf8700;
  --color-scale-yellow-5: #9a6700;
  --color-scale-yellow-6: #7d4e00;
  --color-scale-yellow-7: #633c01;
  --color-scale-yellow-8: #4d2d00;
  --color-scale-yellow-9: #3b2300;
  --color-scale-orange-0: #fff1e5;
  --color-scale-orange-1: #ffd8b5;
  --color-scale-orange-2: #ffb77c;
  --color-scale-orange-3: #fb8f44;
  --color-scale-orange-4: #e16f24;
  --color-scale-orange-5: #bc4c00;
  --color-scale-orange-6: #953800;
  --color-scale-orange-7: #762c00;
  --color-scale-orange-8: #5c2200;
  --color-scale-orange-9: #471700;
  --color-scale-red-0: #FFEBE9;
  --color-scale-red-1: #ffcecb;
  --color-scale-red-2: #ffaba8;
  --color-scale-red-3: #ff8182;
  --color-scale-red-4: #fa4549;
  --color-scale-red-5: #cf222e;
  --color-scale-red-6: #a40e26;
  --color-scale-red-7: #82071e;
  --color-scale-red-8: #660018;
  --color-scale-red-9: #4c0014;
  --color-scale-purple-0: #fbefff;
  --color-scale-purple-1: #ecd8ff;
  --color-scale-purple-2: #d8b9ff;
  --color-scale-purple-3: #c297ff;
  --color-scale-purple-4: #a475f9;
  --color-scale-purple-5: #8250df;
  --color-scale-purple-6: #6639ba;
  --color-scale-purple-7: #512a97;
  --color-scale-purple-8: #3e1f79;
  --color-scale-purple-9: #2e1461;
  --color-scale-pink-0: #ffeff7;
  --color-scale-pink-1: #ffd3eb;
  --color-scale-pink-2: #ffadda;
  --color-scale-pink-3: #ff80c8;
  --color-scale-pink-4: #e85aad;
  --color-scale-pink-5: #bf3989;
  --color-scale-pink-6: #99286e;
  --color-scale-pink-7: #772057;
  --color-scale-pink-8: #611347;
  --color-scale-pink-9: #4d0336;
  --color-scale-coral-0: #FFF0EB;
  --color-scale-coral-1: #FFD6CC;
  --color-scale-coral-2: #FFB4A1;
  --color-scale-coral-3: #FD8C73;
  --color-scale-coral-4: #EC6547;
  --color-scale-coral-5: #C4432B;
  --color-scale-coral-6: #9E2F1C;
  --color-scale-coral-7: #801F0F;
  --color-scale-coral-8: #691105;
  --color-scale-coral-9: #510901;
  color-scheme: light;
  --color-social-reaction-bg-hover: var(--color-scale-gray-1);
  --color-social-reaction-bg-reacted-hover: var(--color-scale-blue-1);
  --color-workflow-card-connector: var(--color-scale-gray-3);
  --color-workflow-card-connector-bg: var(--color-scale-gray-3);
  --color-workflow-card-connector-inactive: var(--color-border-default);
  --color-workflow-card-connector-inactive-bg: var(--color-border-default);
  --color-workflow-card-connector-highlight: var(--color-scale-blue-4);
  --color-workflow-card-connector-highlight-bg: var(--color-scale-blue-4);
  --color-workflow-card-bg: var(--color-scale-white);
  --color-workflow-card-inactive-bg: var(--color-canvas-inset);
  --color-workflow-card-header-shadow: rgba(0, 0, 0, 0);
  --color-workflow-card-progress-complete-bg: var(--color-scale-blue-4);
  --color-workflow-card-progress-incomplete-bg: var(--color-scale-gray-2);
  --color-discussions-state-answered-icon: var(--color-scale-white);
  --color-bg-discussions-row-emoji-box: rgba(209, 213, 218, 0.5);
  --color-notifications-button-text: var(--color-fg-muted);
  --color-notifications-button-hover-text: var(--color-fg-default);
  --color-notifications-button-hover-bg: var(--color-scale-gray-2);
  --color-notifications-row-read-bg: var(--color-canvas-subtle);
  --color-notifications-row-bg: var(--color-scale-white);
  --color-icon-directory: var(--color-scale-blue-3);
  --color-checks-step-error-icon: var(--color-scale-red-4);
  --color-calendar-halloween-graph-day-L1-bg: #ffee4a;
  --color-calendar-halloween-graph-day-L2-bg: #ffc501;
  --color-calendar-halloween-graph-day-L3-bg: #fe9600;
  --color-calendar-halloween-graph-day-L4-bg: #03001c;
  --color-calendar-graph-day-bg: #ebedf0;
  --color-calendar-graph-day-border: rgba(27, 31, 35, 0.06);
  --color-calendar-graph-day-L1-bg: #9be9a8;
  --color-calendar-graph-day-L2-bg: #40c463;
  --color-calendar-graph-day-L3-bg: #30a14e;
  --color-calendar-graph-day-L4-bg: #216e39;
  --color-calendar-graph-day-L1-border: rgba(27, 31, 35, 0.06);
  --color-calendar-graph-day-L2-border: rgba(27, 31, 35, 0.06);
  --color-calendar-graph-day-L3-border: rgba(27, 31, 35, 0.06);
  --color-calendar-graph-day-L4-border: rgba(27, 31, 35, 0.06);
  --color-user-mention-fg: var(--color-fg-default);
  --color-user-mention-bg: var(--color-attention-subtle);
  --color-text-white: var(--color-scale-white);
  word-wrap: break-word;
  --Layout-gutter: 24px;
  --Layout-sidebar-width: 296px;
  box-sizing: border-box;
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  position: relative;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid;
  border-radius: 6px;
  appearance: none;
  color: var(--color-btn-text);
  background-color: var(--color-btn-bg);
  border-color: var(--color-btn-border);
  box-shadow: var(--color-btn-shadow),var(--color-btn-inset-shadow);
  transition: .2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color,background-color,border-color;
  display: block;
  width: 100%;
  text-align: center;
`;


const StyledFollowButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid;
  border-radius: 6px;
  appearance: none;
  
`;

const StyledApp = styled.div`
  width: 296px;
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Avatar = styled.div<{ url: string }>`
  background-image: url(${({ url }) => url});
  border-radius: 50%;
  object-fit: cover;
  width: fit-content;
  min-width: 260px;
  min-height: 260px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Name = styled.h1`
  display: flex;
  margin-bottom: 0px;
`;

const Login = styled.span`
  opacity: 0.75;
`;


const StyledStats = styled.div`
  margin: 4px;
`;

const StyledStatItem = styled.span`
  margin: 2px;
`;

const StyledCompany = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StyledCompanyIcon = styled(CompanyIcon);

function App(props: any) {
  const loading = useStore(getUserInfo.pending)
  const user = useStore($githubUser);
  useGate(Page, props)
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <CSSSVariables>
    <StyledApp>
      <Avatar url={user.avatarUrl}/>
      <Name>{user.name}</Name>
      <Login>{user.login}</Login>
      <StyledFollowButton>Follow</StyledFollowButton>
      <StyledStats>
        <StyledStatItem>{user.followers?.totalCount} followers</StyledStatItem>
        .
        <StyledStatItem>{user.following?.totalCount} following</StyledStatItem>
        .
        <StyledStatItem>{user.starredRepositories?.totalCount} starred</StyledStatItem>
      
      </StyledStats>
      <StyledCompany>
        <StyledCompanyIcon />
        {user.company}
      </StyledCompany>
    </StyledApp>
    </CSSSVariables>
  );
}

export default App;
