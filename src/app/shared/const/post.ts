import { Ipost } from '../model/post';

export const posts: Ipost[] = [
  { id: '1', title: 'Getting Started with Angular', body: 'Angular is a platform for building mobile and desktop web applications using TypeScript.' },
  { id: '2', title: 'Understanding @Input and @Output', body: 'Input lets a parent pass data to a child, Output lets a child emit events to its parent.' },
  { id: '3', title: 'Signals in Angular', body: 'Signals give Angular fine-grained reactivity and simpler change detection.' },
  { id: '4', title: 'Standalone Components', body: 'Standalone components remove the need for NgModules and simplify app structure.' },
  { id: '5', title: 'Angular Routing Basics', body: 'The Angular Router enables navigation between views as users perform tasks.' },
  { id: '6', title: 'Reactive Forms Guide', body: 'Reactive forms provide a model-driven approach to handling form inputs.' },
  { id: '7', title: 'HttpClient Made Easy', body: 'HttpClient lets you communicate with backend services over HTTP.' },
  { id: '8', title: 'Control Flow Syntax', body: 'The new @if, @for and @switch blocks replace structural directives in templates.' },
];
