/**
 * Flowtype definitions for redux-observabl
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.2.3
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */
import type { Middleware, MiddlewareAPI, Action } from "redux";
import { Observable, ObservableInput } from "rxjs/Observable";
import { Scheduler } from "rxjs/Scheduler";
import { Operator } from "rxjs/Operator";

declare module "redux-observable" {
  declare export class ActionsObservable<T> mixins Observable<T> {
    /**
 * Just like RxJS itself, we can't actually make this method always type-safe
 * because we would need non-final position spread params e.g.
   `static of<T>(...items: T, scheduler?: Scheduler): ActionsObservable<T>`
which isn't possible in either JavaScript or TypeScript. So instead, we
provide safe typing for up to 6 items, following by a scheduler.
*/
    of<T>(item1: T, scheduler?: Scheduler): ActionsObservable<T>;
    of<T>(item1: T, item2: T, scheduler?: Scheduler): ActionsObservable<T>;
    of<T>(
      item1: T,
      item2: T,
      item3: T,
      scheduler?: Scheduler
    ): ActionsObservable<T>;
    of<T>(
      item1: T,
      item2: T,
      item3: T,
      item4: T,
      scheduler?: Scheduler
    ): ActionsObservable<T>;
    of<T>(
      item1: T,
      item2: T,
      item3: T,
      item4: T,
      item5: T,
      scheduler?: Scheduler
    ): ActionsObservable<T>;
    of<T>(
      item1: T,
      item2: T,
      item3: T,
      item4: T,
      item5: T,
      item6: T,
      scheduler?: Scheduler
    ): ActionsObservable<T>;
    of<T>(...array: Array<T | Scheduler>): ActionsObservable<T>;
    from<T>(
      ish: ObservableInput<T>,
      scheduler?: Scheduler
    ): ActionsObservable<T>;
    from<T, R>(ish: Array<T>, scheduler?: Scheduler): ActionsObservable<R>;
    constructor(input$: Observable<T>): this;
    lift<R>(operator: Operator<T, R>): ActionsObservable<R>;
    lift<R>(operator: Operator<T, R>): Observable<R>;
    ofType<R>(
      ...key: "NO PRINT IMPLEMENTED: IndexedAccessType"[]
    ): ActionsObservable<R>;
  }
  declare export interface Epic<T, S, D, O> {
    (
      action$: ActionsObservable<T>,
      store: MiddlewareAPI<S>,
      dependencies: D
    ): Observable<O>;
  }
  declare export type EpicMiddleware<T, S, D, O> = {
    replaceEpic(nextEpic: Epic<T, S, D, O>): void
  } & Middleware;

  declare interface Adapter {
    input: (input$: Observable<any>) => any;
    output: (output$: any) => Observable<any>;
  }
  declare interface Options<D> {
    adapter?: Adapter;
    dependencies?: D;
  }
  declare export function createEpicMiddleware<T, S, D, O>(
    rootEpic: Epic<T, S, D, O>,
    options?: Options<D>
  ): EpicMiddleware<T, S, D, O>;

  declare export function combineEpics<T, S, D, O>(
    ...epics: Epic<T, S, D, O>[]
  ): Epic<T, S, D, O>;

  declare export function ofType<T, R, K>(
    ...key: K[]
  ): (source: Observable<T>) => Observable<R>;

  declare export var EPIC_END: "@@redux-observable/EPIC_END";
}
