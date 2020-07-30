(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (t, e, n) {
      t.exports = n('zUnb');
    },
    '0QMH': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('fXoL'),
        s = n('rB/T');
      function i(t, e) {
        let n;
        t.hot.accept(),
          e()
            .then((t) => (n = t))
            .catch((t) => console.error(t)),
          t.hot.dispose(() => {
            const t = n.injector.get(r.g).components.map((t) => t.location.nativeElement),
              e = Object(s.createNewHosts)(t);
            n.destroy(), e();
          });
      }
    },
    '2QA8': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (() => ('function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random()))();
    },
    '2fFW': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      let r = !1;
      const s = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + t.stack
            );
          } else r && console.log('RxJS: Back to a better error behavior. Thank you. <3');
          r = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return r;
        },
      };
    },
    '3UD+': function (t, e) {
      t.exports = function (t) {
        if (!t.webpackPolyfill) {
          var e = Object.create(t);
          e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            Object.defineProperty(e, 'exports', { enumerable: !0 }),
            (e.webpackPolyfill = 1);
        }
        return e;
      };
    },
    '5+tZ': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return l;
      });
      var r = n('ZUHj'),
        s = n('l7GE'),
        i = n('51Dv'),
        o = n('lJxs'),
        a = n('Cfvw');
      function l(t, e, n = Number.POSITIVE_INFINITY) {
        return 'function' == typeof e
          ? (r) => r.pipe(l((n, r) => Object(a.a)(t(n, r)).pipe(Object(o.a)((t, s) => e(n, t, r, s))), n))
          : ('number' == typeof e && (n = e), (e) => e.lift(new c(t, n)));
      }
      class c {
        constructor(t, e = Number.POSITIVE_INFINITY) {
          (this.project = t), (this.concurrent = e);
        }
        call(t, e) {
          return e.subscribe(new u(t, this.project, this.concurrent));
        }
      }
      class u extends s.a {
        constructor(t, e, n = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = e),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(t) {
          this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t);
        }
        _tryNext(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(e, t, n);
        }
        _innerSub(t, e, n) {
          const s = new i.a(this, e, n),
            o = this.destination;
          o.add(s);
          const a = Object(r.a)(this, t, void 0, void 0, s);
          a !== s && o.add(a);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active && 0 === this.buffer.length && this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyComplete(t) {
          const e = this.buffer;
          this.remove(t),
            this.active--,
            e.length > 0
              ? this._next(e.shift())
              : 0 === this.active && this.hasCompleted && this.destination.complete();
        }
      }
    },
    '51Dv': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('7o/Q');
      class s extends r.a {
        constructor(t, e, n) {
          super(), (this.parent = t), (this.outerValue = e), (this.outerIndex = n), (this.index = 0);
        }
        _next(t) {
          this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
    },
    '7o/Q': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var r = n('n6bG'),
        s = n('gRHU'),
        i = n('quSY'),
        o = n('2QA8'),
        a = n('2fFW'),
        l = n('NJ4a');
      class c extends i.a {
        constructor(t, e, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = s.a;
              break;
            case 1:
              if (!t) {
                this.destination = s.a;
                break;
              }
              if ('object' == typeof t) {
                t instanceof c
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable), (this.destination = t), t.add(this))
                  : ((this.syncErrorThrowable = !0), (this.destination = new u(this, t)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0), (this.destination = new u(this, t, e, n));
          }
        }
        [o.a]() {
          return this;
        }
        static create(t, e, n) {
          const r = new c(t, e, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(t) {
          this.isStopped || this._next(t);
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: t } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          );
        }
      }
      class u extends c {
        constructor(t, e, n, i) {
          let o;
          super(), (this._parentSubscriber = t);
          let a = this;
          Object(r.a)(e)
            ? (o = e)
            : e &&
              ((o = e.next),
              (n = e.error),
              (i = e.complete),
              e !== s.a &&
                ((a = Object.create(e)),
                Object(r.a)(a.unsubscribe) && this.add(a.unsubscribe.bind(a)),
                (a.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = a),
            (this._next = o),
            (this._error = n),
            (this._complete = i);
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this;
            a.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: n } = a.a;
            if (this._error)
              n && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (e.syncErrorThrowable)
              n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : Object(l.a)(t), this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw t;
              Object(l.a)(t);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              a.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if ((this.unsubscribe(), a.a.useDeprecatedSynchronousErrorHandling)) throw n;
            Object(l.a)(n);
          }
        }
        __tryOrSetError(t, e, n) {
          if (!a.a.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
          try {
            e.call(this._context, n);
          } catch (r) {
            return a.a.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
              : (Object(l.a)(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this;
          (this._context = null), (this._parentSubscriber = null), t.unsubscribe();
        }
      }
    },
    '9ppp': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (() => {
        function t() {
          return (
            Error.call(this), (this.message = 'object unsubscribed'), (this.name = 'ObjectUnsubscribedError'), this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    'A/Ql': function (t) {
      t.exports = JSON.parse(
        '{"APP_NAME":"pruebaEMT","About":"About","Hello world !":"Hello world !","Home":"Home","Version":"Version"}'
      );
    },
    AytR: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = {
        production: !0,
        hmr: !1,
        version: '1.0.0',
        serverUrl: 'https://api.chucknorris.io',
        defaultLanguage: 'en-US',
        supportedLanguages: ['en-US', 'es-ES'],
      };
    },
    Cfvw: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return h;
      });
      var r = n('HDdC'),
        s = n('SeVD'),
        i = n('quSY'),
        o = n('kJWO'),
        a = n('jZKg'),
        l = n('Lhse'),
        c = n('c2HN'),
        u = n('I55L');
      function h(t, e) {
        return e
          ? (function (t, e) {
              if (null != t) {
                if (
                  (function (t) {
                    return t && 'function' == typeof t[o.a];
                  })(t)
                )
                  return (function (t, e) {
                    return new r.a((n) => {
                      const r = new i.a();
                      return (
                        r.add(
                          e.schedule(() => {
                            const s = t[o.a]();
                            r.add(
                              s.subscribe({
                                next(t) {
                                  r.add(e.schedule(() => n.next(t)));
                                },
                                error(t) {
                                  r.add(e.schedule(() => n.error(t)));
                                },
                                complete() {
                                  r.add(e.schedule(() => n.complete()));
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (Object(c.a)(t))
                  return (function (t, e) {
                    return new r.a((n) => {
                      const r = new i.a();
                      return (
                        r.add(
                          e.schedule(() =>
                            t.then(
                              (t) => {
                                r.add(
                                  e.schedule(() => {
                                    n.next(t), r.add(e.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (t) => {
                                r.add(e.schedule(() => n.error(t)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (Object(u.a)(t)) return Object(a.a)(t, e);
                if (
                  (function (t) {
                    return t && 'function' == typeof t[l.a];
                  })(t) ||
                  'string' == typeof t
                )
                  return (function (t, e) {
                    if (!t) throw new Error('Iterable cannot be null');
                    return new r.a((n) => {
                      const r = new i.a();
                      let s;
                      return (
                        r.add(() => {
                          s && 'function' == typeof s.return && s.return();
                        }),
                        r.add(
                          e.schedule(() => {
                            (s = t[l.a]()),
                              r.add(
                                e.schedule(function () {
                                  if (n.closed) return;
                                  let t, e;
                                  try {
                                    const n = s.next();
                                    (t = n.value), (e = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  e ? n.complete() : (n.next(t), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
              }
              throw new TypeError(((null !== t && typeof t) || t) + ' is not observable');
            })(t, e)
          : t instanceof r.a
          ? t
          : new r.a(Object(s.a)(t));
      }
    },
    DH7j: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (() => Array.isArray || ((t) => t && 'number' == typeof t.length))();
    },
    E4Qo: function (t) {
      t.exports = JSON.parse(
        '{"APP_NAME":"pruebaEMT","About":"Acerca de","Hello world !":"\xa1Hola Mundo!","Home":"Inicio","Version":"Versi\xf3n"}'
      );
    },
    HDdC: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var r = n('7o/Q'),
        s = n('2QA8'),
        i = n('gRHU'),
        o = n('kJWO'),
        a = n('mCNh'),
        l = n('2fFW');
      let c = (() => {
        class t {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(e) {
            const n = new t();
            return (n.source = this), (n.operator = e), n;
          }
          subscribe(t, e, n) {
            const { operator: o } = this,
              a = (function (t, e, n) {
                if (t) {
                  if (t instanceof r.a) return t;
                  if (t[s.a]) return t[s.a]();
                }
                return t || e || n ? new r.a(t, e, n) : new r.a(i.a);
              })(t, e, n);
            if (
              (a.add(
                o
                  ? o.call(a, this.source)
                  : this.source || (l.a.useDeprecatedSynchronousErrorHandling && !a.syncErrorThrowable)
                  ? this._subscribe(a)
                  : this._trySubscribe(a)
              ),
              l.a.useDeprecatedSynchronousErrorHandling &&
                a.syncErrorThrowable &&
                ((a.syncErrorThrowable = !1), a.syncErrorThrown))
            )
              throw a.syncErrorValue;
            return a;
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              l.a.useDeprecatedSynchronousErrorHandling && ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    const { closed: e, destination: n, isStopped: s } = t;
                    if (e || s) return !1;
                    t = n && n instanceof r.a ? n : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }
          forEach(t, e) {
            return new (e = u(e))((e, n) => {
              let r;
              r = this.subscribe(
                (e) => {
                  try {
                    t(e);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                e
              );
            });
          }
          _subscribe(t) {
            const { source: e } = this;
            return e && e.subscribe(t);
          }
          [o.a]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length ? this : Object(a.b)(t)(this);
          }
          toPromise(t) {
            return new (t = u(t))((t, e) => {
              let n;
              this.subscribe(
                (t) => (n = t),
                (t) => e(t),
                () => t(n)
              );
            });
          }
        }
        return (t.create = (e) => new t(e)), t;
      })();
      function u(t) {
        if ((t || (t = l.a.Promise || Promise), !t)) throw new Error('no Promise impl found');
        return t;
      }
    },
    I55L: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (t) => t && 'number' == typeof t.length && 'function' != typeof t;
    },
    LbVS: function (t, e, n) {
      'use strict';
      function r(t) {
        return t;
      }
      function s() {
        var t = document.querySelectorAll('input');
        return Array.prototype.slice.call(t).map(function (t) {
          return t.value;
        });
      }
      function i(t) {
        var e = document.querySelectorAll('input');
        t &&
          e.length === t.length &&
          (t.forEach(function (t, n) {
            var r = e[n];
            (r.value = t), r.dispatchEvent(new CustomEvent('input', { detail: r.value }));
          }),
          (t.length = 0));
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.bootloader = function (t, e, n) {
          'object' == typeof t && ((e = t.before), (n = t.after), (t = t.main)), (e = e || r), (n = n || r);
          var s = document.readyState;
          switch (s) {
            case 'loading':
              document.addEventListener('DOMContentLoaded', function r() {
                document.removeEventListener('DOMContentLoaded', r), n(t(e(s)));
              });
              break;
            case 'interactive':
            case 'complete':
            default:
              n(t(e(s)));
          }
        }),
        (e.createNewHosts = function (t) {
          var e = Array.prototype.map.call(t, function (t) {
            var e = document.createElement(t.tagName),
              n = t.parentNode,
              r = e.style.display;
            return (
              (e.style.display = 'none'),
              n.insertBefore(e, t),
              function () {
                e.style.display = r;
                try {
                  n.removeChild(t);
                } catch (s) {}
              }
            );
          });
          return function () {
            e.forEach(function (t) {
              return t();
            });
          };
        }),
        (e.removeNgStyles = function () {
          var t = document.head,
            e = t.querySelectorAll('style');
          Array.prototype.slice
            .call(e)
            .filter(function (t) {
              return -1 !== t.innerText.indexOf('_ng');
            })
            .map(function (e) {
              return t.removeChild(e);
            });
        }),
        (e.getInputValues = s),
        (e.setInputValues = i),
        (e.createInputTransfer = function () {
          var t = s();
          return function () {
            return i(t);
          };
        });
    },
    Lhse: function (t, e, n) {
      'use strict';
      function r() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      }
      n.d(e, 'a', function () {
        return s;
      });
      const s = r();
    },
    NJ4a: function (t, e, n) {
      'use strict';
      function r(t) {
        setTimeout(() => {
          throw t;
        }, 0);
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    PsNa: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.MODULE_CONFIG = {
          OnInit: 'hmrOnInit',
          OnStatus: 'hmrOnStatus',
          OnCheck: 'hmrOnCheck',
          OnDecline: 'hmrOnDecline',
          OnDestroy: 'hmrOnDestroy',
          AfterDestroy: 'hmrAfterDestroy',
        }),
        (e.hmrModule = function (t, n, r) {
          return (
            void 0 === r && (r = e.MODULE_CONFIG),
            n.hot &&
              (n.hot.accept(),
              t.instance[e.MODULE_CONFIG.OnInit] && n.hot.data && t.instance[e.MODULE_CONFIG.OnInit](n.hot.data),
              t.instance[e.MODULE_CONFIG.OnStatus] &&
                n.hot.apply(function (n) {
                  t.instance[e.MODULE_CONFIG.OnStatus](n);
                }),
              t.instance[e.MODULE_CONFIG.OnCheck] &&
                n.hot.check(function (n, r) {
                  t.instance[e.MODULE_CONFIG.OnCheck](n, r);
                }),
              t.instance[e.MODULE_CONFIG.OnDecline] &&
                n.hot.decline(function (n) {
                  t.instance[e.MODULE_CONFIG.OnDecline](n);
                }),
              n.hot.dispose(function (n) {
                t.instance[e.MODULE_CONFIG.OnDestroy] && t.instance[e.MODULE_CONFIG.OnDestroy](n),
                  t.destroy(),
                  t.instance[e.MODULE_CONFIG.AfterDestroy] && t.instance[e.MODULE_CONFIG.AfterDestroy](n);
              })),
            t
          );
        });
    },
    SeVD: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return u;
      });
      var r = n('ngJS'),
        s = n('NJ4a'),
        i = n('Lhse'),
        o = n('kJWO'),
        a = n('I55L'),
        l = n('c2HN'),
        c = n('XoHu');
      const u = (t) => {
        if (t && 'function' == typeof t[o.a])
          return (
            (u = t),
            (t) => {
              const e = u[o.a]();
              if ('function' != typeof e.subscribe)
                throw new TypeError('Provided object does not correctly implement Symbol.observable');
              return e.subscribe(t);
            }
          );
        if (Object(a.a)(t)) return Object(r.a)(t);
        if (Object(l.a)(t))
          return (
            (n = t),
            (t) => (
              n
                .then(
                  (e) => {
                    t.closed || (t.next(e), t.complete());
                  },
                  (e) => t.error(e)
                )
                .then(null, s.a),
              t
            )
          );
        if (t && 'function' == typeof t[i.a])
          return (
            (e = t),
            (t) => {
              const n = e[i.a]();
              for (;;) {
                let e;
                try {
                  e = n.next();
                } catch (r) {
                  return t.error(r), t;
                }
                if (e.done) {
                  t.complete();
                  break;
                }
                if ((t.next(e.value), t.closed)) break;
              }
              return (
                'function' == typeof n.return &&
                  t.add(() => {
                    n.return && n.return();
                  }),
                t
              );
            }
          );
        {
          const e = Object(c.a)(t) ? 'an invalid object' : `'${t}'`;
          throw new TypeError(
            `You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
        var e, n, u;
      };
    },
    SpAZ: function (t, e, n) {
      'use strict';
      function r(t) {
        return t;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    VRyK: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var r = n('HDdC'),
        s = n('z+Ro'),
        i = n('bHdf'),
        o = n('yCtX');
      function a(...t) {
        let e = Number.POSITIVE_INFINITY,
          n = null,
          a = t[t.length - 1];
        return (
          Object(s.a)(a)
            ? ((n = t.pop()), t.length > 1 && 'number' == typeof t[t.length - 1] && (e = t.pop()))
            : 'number' == typeof a && (e = t.pop()),
          null === n && 1 === t.length && t[0] instanceof r.a ? t[0] : Object(i.a)(e)(Object(o.a)(t, n))
        );
      }
    },
    XNiG: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return c;
      }),
        n.d(e, 'a', function () {
          return u;
        });
      var r = n('HDdC'),
        s = n('7o/Q'),
        i = n('quSY'),
        o = n('9ppp'),
        a = n('Ylt2'),
        l = n('2QA8');
      class c extends s.a {
        constructor(t) {
          super(t), (this.destination = t);
        }
      }
      let u = (() => {
        class t extends r.a {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [l.a]() {
            return new c(this);
          }
          lift(t) {
            const e = new h(this, this);
            return (e.operator = t), e;
          }
          next(t) {
            if (this.closed) throw new o.a();
            if (!this.isStopped) {
              const { observers: e } = this,
                n = e.length,
                r = e.slice();
              for (let s = 0; s < n; s++) r[s].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new o.a();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: e } = this,
              n = e.length,
              r = e.slice();
            for (let s = 0; s < n; s++) r[s].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new o.a();
            this.isStopped = !0;
            const { observers: t } = this,
              e = t.length,
              n = t.slice();
            for (let r = 0; r < e; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new o.a();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new o.a();
            return this.hasError
              ? (t.error(this.thrownError), i.a.EMPTY)
              : this.isStopped
              ? (t.complete(), i.a.EMPTY)
              : (this.observers.push(t), new a.a(this, t));
          }
          asObservable() {
            const t = new r.a();
            return (t.source = this), t;
          }
        }
        return (t.create = (t, e) => new h(t, e)), t;
      })();
      class h extends u {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e);
        }
        next(t) {
          const { destination: e } = this;
          e && e.next && e.next(t);
        }
        error(t) {
          const { destination: e } = this;
          e && e.error && this.destination.error(t);
        }
        complete() {
          const { destination: t } = this;
          t && t.complete && this.destination.complete();
        }
        _subscribe(t) {
          const { source: e } = this;
          return e ? this.source.subscribe(t) : i.a.EMPTY;
        }
      }
    },
    XoHu: function (t, e, n) {
      'use strict';
      function r(t) {
        return null !== t && 'object' == typeof t;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    Ylt2: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('quSY');
      class s extends r.a {
        constructor(t, e) {
          super(), (this.subject = t), (this.subscriber = e), (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const t = this.subject,
            e = t.observers;
          if (((this.subject = null), !e || 0 === e.length || t.isStopped || t.closed)) return;
          const n = e.indexOf(this.subscriber);
          -1 !== n && e.splice(n, 1);
        }
      }
    },
    ZAI4: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return Qa;
      });
      var r = n('jhN1'),
        s = n('fXoL'),
        i = n('ofXK'),
        o = n('HDdC'),
        a = n('DH7j'),
        l = n('lJxs'),
        c = n('XoHu'),
        u = n('Cfvw');
      function h(...t) {
        if (1 === t.length) {
          const e = t[0];
          if (Object(a.a)(e)) return d(e, null);
          if (Object(c.a)(e) && Object.getPrototypeOf(e) === Object.prototype) {
            const t = Object.keys(e);
            return d(
              t.map((t) => e[t]),
              t
            );
          }
        }
        if ('function' == typeof t[t.length - 1]) {
          const e = t.pop();
          return d((t = 1 === t.length && Object(a.a)(t[0]) ? t[0] : t), null).pipe(Object(l.a)((t) => e(...t)));
        }
        return d(t, null);
      }
      function d(t, e) {
        return new o.a((n) => {
          const r = t.length;
          if (0 === r) return void n.complete();
          const s = new Array(r);
          let i = 0,
            o = 0;
          for (let a = 0; a < r; a++) {
            const l = Object(u.a)(t[a]);
            let c = !1;
            n.add(
              l.subscribe({
                next: (t) => {
                  c || ((c = !0), o++), (s[a] = t);
                },
                error: (t) => n.error(t),
                complete: () => {
                  i++,
                    (i !== r && c) ||
                      (o === r && n.next(e ? e.reduce((t, e, n) => ((t[e] = s[n]), t), {}) : s), n.complete());
                },
              })
            );
          }
        });
      }
      const f = new s.q('NgValueAccessor'),
        p = { provide: f, useExisting: Object(s.S)(() => g), multi: !0 };
      let g = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t), (this._elementRef = e), (this.onChange = (t) => {}), (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', t);
          }
          registerOnChange(t) {
            this.onChange = t;
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(s.D), s.Mb(s.l));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['input', 'type', 'checkbox', 'formControlName', ''],
              ['input', 'type', 'checkbox', 'formControl', ''],
              ['input', 'type', 'checkbox', 'ngModel', ''],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                s.dc('change', function (t) {
                  return e.onChange(t.target.checked);
                })('blur', function () {
                  return e.onTouched();
                });
            },
            features: [s.yb([p])],
          })),
          t
        );
      })();
      const m = { provide: f, useExisting: Object(s.S)(() => y), multi: !0 },
        b = new s.q('CompositionEventMode');
      let y = (() => {
          class t {
            constructor(t, e, n) {
              (this._renderer = t),
                (this._elementRef = e),
                (this._compositionMode = n),
                (this.onChange = (t) => {}),
                (this.onTouched = () => {}),
                (this._composing = !1),
                null == this._compositionMode &&
                  (this._compositionMode = !(function () {
                    const t = Object(i.y)() ? Object(i.y)().getUserAgent() : '';
                    return /android (\d+)/.test(t.toLowerCase());
                  })());
            }
            writeValue(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == t ? '' : t);
            }
            registerOnChange(t) {
              this.onChange = t;
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            setDisabledState(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
            }
            _handleInput(t) {
              (!this._compositionMode || (this._compositionMode && !this._composing)) && this.onChange(t);
            }
            _compositionStart() {
              this._composing = !0;
            }
            _compositionEnd(t) {
              (this._composing = !1), this._compositionMode && this.onChange(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(s.D), s.Mb(s.l), s.Mb(b, 8));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['input', 'formControlName', '', 3, 'type', 'checkbox'],
                ['textarea', 'formControlName', ''],
                ['input', 'formControl', '', 3, 'type', 'checkbox'],
                ['textarea', 'formControl', ''],
                ['input', 'ngModel', '', 3, 'type', 'checkbox'],
                ['textarea', 'ngModel', ''],
                ['', 'ngDefaultControl', ''],
              ],
              hostBindings: function (t, e) {
                1 & t &&
                  s.dc('input', function (t) {
                    return e._handleInput(t.target.value);
                  })('blur', function () {
                    return e.onTouched();
                  })('compositionstart', function () {
                    return e._compositionStart();
                  })('compositionend', function (t) {
                    return e._compositionEnd(t.target.value);
                  });
              },
              features: [s.yb([m])],
            })),
            t
          );
        })(),
        v = (() => {
          class t {
            get value() {
              return this.control ? this.control.value : null;
            }
            get valid() {
              return this.control ? this.control.valid : null;
            }
            get invalid() {
              return this.control ? this.control.invalid : null;
            }
            get pending() {
              return this.control ? this.control.pending : null;
            }
            get disabled() {
              return this.control ? this.control.disabled : null;
            }
            get enabled() {
              return this.control ? this.control.enabled : null;
            }
            get errors() {
              return this.control ? this.control.errors : null;
            }
            get pristine() {
              return this.control ? this.control.pristine : null;
            }
            get dirty() {
              return this.control ? this.control.dirty : null;
            }
            get touched() {
              return this.control ? this.control.touched : null;
            }
            get status() {
              return this.control ? this.control.status : null;
            }
            get untouched() {
              return this.control ? this.control.untouched : null;
            }
            get statusChanges() {
              return this.control ? this.control.statusChanges : null;
            }
            get valueChanges() {
              return this.control ? this.control.valueChanges : null;
            }
            get path() {
              return null;
            }
            reset(t) {
              this.control && this.control.reset(t);
            }
            hasError(t, e) {
              return !!this.control && this.control.hasError(t, e);
            }
            getError(t, e) {
              return this.control ? this.control.getError(t, e) : null;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = s.Hb({ type: t })),
            t
          );
        })(),
        _ = (() => {
          class t extends v {
            get formDirective() {
              return null;
            }
            get path() {
              return null;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return w(e || t);
            }),
            (t.ɵdir = s.Hb({ type: t, features: [s.wb] })),
            t
          );
        })();
      const w = s.Tb(_);
      function C() {
        throw new Error('unimplemented');
      }
      class S extends v {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null),
            (this._rawValidators = []),
            (this._rawAsyncValidators = []);
        }
        get validator() {
          return C();
        }
        get asyncValidator() {
          return C();
        }
      }
      class E {
        constructor(t) {
          this._cd = t;
        }
        get ngClassUntouched() {
          return !!this._cd.control && this._cd.control.untouched;
        }
        get ngClassTouched() {
          return !!this._cd.control && this._cd.control.touched;
        }
        get ngClassPristine() {
          return !!this._cd.control && this._cd.control.pristine;
        }
        get ngClassDirty() {
          return !!this._cd.control && this._cd.control.dirty;
        }
        get ngClassValid() {
          return !!this._cd.control && this._cd.control.valid;
        }
        get ngClassInvalid() {
          return !!this._cd.control && this._cd.control.invalid;
        }
        get ngClassPending() {
          return !!this._cd.control && this._cd.control.pending;
        }
      }
      let x = (() => {
          class t extends E {
            constructor(t) {
              super(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(S, 2));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', ''],
              ],
              hostVars: 14,
              hostBindings: function (t, e) {
                2 & t &&
                  s.Eb('ng-untouched', e.ngClassUntouched)('ng-touched', e.ngClassTouched)(
                    'ng-pristine',
                    e.ngClassPristine
                  )('ng-dirty', e.ngClassDirty)('ng-valid', e.ngClassValid)('ng-invalid', e.ngClassInvalid)(
                    'ng-pending',
                    e.ngClassPending
                  );
              },
              features: [s.wb],
            })),
            t
          );
        })(),
        O = (() => {
          class t extends E {
            constructor(t) {
              super(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(_, 2));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['', 'formGroupName', ''],
                ['', 'formArrayName', ''],
                ['', 'ngModelGroup', ''],
                ['', 'formGroup', ''],
                ['form', 3, 'ngNoForm', ''],
                ['', 'ngForm', ''],
              ],
              hostVars: 14,
              hostBindings: function (t, e) {
                2 & t &&
                  s.Eb('ng-untouched', e.ngClassUntouched)('ng-touched', e.ngClassTouched)(
                    'ng-pristine',
                    e.ngClassPristine
                  )('ng-dirty', e.ngClassDirty)('ng-valid', e.ngClassValid)('ng-invalid', e.ngClassInvalid)(
                    'ng-pending',
                    e.ngClassPending
                  );
              },
              features: [s.wb],
            })),
            t
          );
        })();
      function A(t) {
        return null == t || 0 === t.length;
      }
      const k = new s.q('NgValidators'),
        T = new s.q('NgAsyncValidators'),
        I = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class R {
        static min(t) {
          return (e) => {
            if (A(e.value) || A(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n < t ? { min: { min: t, actual: e.value } } : null;
          };
        }
        static max(t) {
          return (e) => {
            if (A(e.value) || A(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n > t ? { max: { max: t, actual: e.value } } : null;
          };
        }
        static required(t) {
          return A(t.value) ? { required: !0 } : null;
        }
        static requiredTrue(t) {
          return !0 === t.value ? null : { required: !0 };
        }
        static email(t) {
          return A(t.value) || I.test(t.value) ? null : { email: !0 };
        }
        static minLength(t) {
          return (e) => {
            if (A(e.value)) return null;
            const n = e.value ? e.value.length : 0;
            return n < t ? { minlength: { requiredLength: t, actualLength: n } } : null;
          };
        }
        static maxLength(t) {
          return (e) => {
            const n = e.value ? e.value.length : 0;
            return n > t ? { maxlength: { requiredLength: t, actualLength: n } } : null;
          };
        }
        static pattern(t) {
          if (!t) return R.nullValidator;
          let e, n;
          return (
            'string' == typeof t
              ? ((n = ''),
                '^' !== t.charAt(0) && (n += '^'),
                (n += t),
                '$' !== t.charAt(t.length - 1) && (n += '$'),
                (e = new RegExp(n)))
              : ((n = t.toString()), (e = t)),
            (t) => {
              if (A(t.value)) return null;
              const r = t.value;
              return e.test(r) ? null : { pattern: { requiredPattern: n, actualValue: r } };
            }
          );
        }
        static nullValidator(t) {
          return null;
        }
        static compose(t) {
          if (!t) return null;
          const e = t.filter(j);
          return 0 == e.length
            ? null
            : function (t) {
                return N(
                  (function (t, e) {
                    return e.map((e) => e(t));
                  })(t, e)
                );
              };
        }
        static composeAsync(t) {
          if (!t) return null;
          const e = t.filter(j);
          return 0 == e.length
            ? null
            : function (t) {
                return h(
                  (function (t, e) {
                    return e.map((e) => e(t));
                  })(t, e).map(D)
                ).pipe(Object(l.a)(N));
              };
        }
      }
      function j(t) {
        return null != t;
      }
      function D(t) {
        const e = Object(s.qb)(t) ? Object(u.a)(t) : t;
        if (!Object(s.pb)(e)) throw new Error('Expected validator to return Promise or Observable.');
        return e;
      }
      function N(t) {
        let e = {};
        return (
          t.forEach((t) => {
            e = null != t ? Object.assign(Object.assign({}, e), t) : e;
          }),
          0 === Object.keys(e).length ? null : e
        );
      }
      function P(t) {
        return t.validate ? (e) => t.validate(e) : t;
      }
      function M(t) {
        return t.validate ? (e) => t.validate(e) : t;
      }
      const L = { provide: f, useExisting: Object(s.S)(() => V), multi: !0 };
      let V = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t), (this._elementRef = e), (this.onChange = (t) => {}), (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == t ? '' : t);
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              t('' == e ? null : parseFloat(e));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(s.D), s.Mb(s.l));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['input', 'type', 'number', 'formControlName', ''],
              ['input', 'type', 'number', 'formControl', ''],
              ['input', 'type', 'number', 'ngModel', ''],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                s.dc('change', function (t) {
                  return e.onChange(t.target.value);
                })('input', function (t) {
                  return e.onChange(t.target.value);
                })('blur', function () {
                  return e.onTouched();
                });
            },
            features: [s.yb([L])],
          })),
          t
        );
      })();
      const F = { provide: f, useExisting: Object(s.S)(() => U), multi: !0 };
      let H = (() => {
          class t {
            constructor() {
              this._accessors = [];
            }
            add(t, e) {
              this._accessors.push([t, e]);
            }
            remove(t) {
              for (let e = this._accessors.length - 1; e >= 0; --e)
                if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1);
            }
            select(t) {
              this._accessors.forEach((e) => {
                this._isSameGroup(e, t) && e[1] !== t && e[1].fireUncheck(t.value);
              });
            }
            _isSameGroup(t, e) {
              return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        U = (() => {
          class t {
            constructor(t, e, n, r) {
              (this._renderer = t),
                (this._elementRef = e),
                (this._registry = n),
                (this._injector = r),
                (this.onChange = () => {}),
                (this.onTouched = () => {});
            }
            ngOnInit() {
              (this._control = this._injector.get(S)), this._checkName(), this._registry.add(this._control, this);
            }
            ngOnDestroy() {
              this._registry.remove(this);
            }
            writeValue(t) {
              (this._state = t === this.value),
                this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
            }
            registerOnChange(t) {
              (this._fn = t),
                (this.onChange = () => {
                  t(this.value), this._registry.select(this);
                });
            }
            fireUncheck(t) {
              this.writeValue(t);
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            setDisabledState(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
            }
            _checkName() {
              this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(),
                !this.name && this.formControlName && (this.name = this.formControlName);
            }
            _throwNameError() {
              throw new Error(
                '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(s.D), s.Mb(s.l), s.Mb(H), s.Mb(s.r));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['input', 'type', 'radio', 'formControlName', ''],
                ['input', 'type', 'radio', 'formControl', ''],
                ['input', 'type', 'radio', 'ngModel', ''],
              ],
              hostBindings: function (t, e) {
                1 & t &&
                  s.dc('change', function () {
                    return e.onChange();
                  })('blur', function () {
                    return e.onTouched();
                  });
              },
              inputs: { name: 'name', formControlName: 'formControlName', value: 'value' },
              features: [s.yb([F])],
            })),
            t
          );
        })();
      const z = { provide: f, useExisting: Object(s.S)(() => $), multi: !0 };
      let $ = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t), (this._elementRef = e), (this.onChange = (t) => {}), (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(t));
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              t('' == e ? null : parseFloat(e));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(s.D), s.Mb(s.l));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['input', 'type', 'range', 'formControlName', ''],
              ['input', 'type', 'range', 'formControl', ''],
              ['input', 'type', 'range', 'ngModel', ''],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                s.dc('change', function (t) {
                  return e.onChange(t.target.value);
                })('input', function (t) {
                  return e.onChange(t.target.value);
                })('blur', function () {
                  return e.onTouched();
                });
            },
            features: [s.yb([z])],
          })),
          t
        );
      })();
      const q =
          '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
        B =
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });';
      class G {
        static controlParentException() {
          throw new Error(
            "formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " +
              q
          );
        }
        static ngModelGroupException() {
          throw new Error(
            `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ${B}\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        \n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>`
          );
        }
        static missingFormException() {
          throw new Error(
            'formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ' + q
          );
        }
        static groupParentException() {
          throw new Error(
            "formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " +
              B
          );
        }
        static arrayParentException() {
          throw new Error(
            'formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        \n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });'
          );
        }
        static disabledAttrWarning() {
          console.warn(
            "\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    "
          );
        }
        static ngModelWarning(t) {
          console.warn(
            `\n    It looks like you're using ngModel on the same form field as ${t}. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/${
              'formControl' === t ? 'FormControlDirective' : 'FormControlName'
            }#use-with-ngmodel\n    `
          );
        }
      }
      const Z = { provide: f, useExisting: Object(s.S)(() => W), multi: !0 };
      let W = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {}),
              (this._compareWith = s.rb);
          }
          set compareWith(t) {
            if ('function' != typeof t)
              throw new Error('compareWith must be a function, but received ' + JSON.stringify(t));
            this._compareWith = t;
          }
          writeValue(t) {
            this.value = t;
            const e = this._getOptionId(t);
            null == e && this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
            const n = (function (t, e) {
              return null == t ? '' + e : (e && 'object' == typeof e && (e = 'Object'), `${t}: ${e}`.slice(0, 50));
            })(e, t);
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', n);
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              (this.value = this._getOptionValue(e)), t(this.value);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
          _registerOption() {
            return (this._idCounter++).toString();
          }
          _getOptionId(t) {
            for (const e of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(e), t)) return e;
            return null;
          }
          _getOptionValue(t) {
            const e = (function (t) {
              return t.split(':')[0];
            })(t);
            return this._optionMap.has(e) ? this._optionMap.get(e) : t;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(s.D), s.Mb(s.l));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['select', 'formControlName', '', 3, 'multiple', ''],
              ['select', 'formControl', '', 3, 'multiple', ''],
              ['select', 'ngModel', '', 3, 'multiple', ''],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                s.dc('change', function (t) {
                  return e.onChange(t.target.value);
                })('blur', function () {
                  return e.onTouched();
                });
            },
            inputs: { compareWith: 'compareWith' },
            features: [s.yb([Z])],
          })),
          t
        );
      })();
      const Q = { provide: f, useExisting: Object(s.S)(() => K), multi: !0 };
      let K = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {}),
              (this._compareWith = s.rb);
          }
          set compareWith(t) {
            if ('function' != typeof t)
              throw new Error('compareWith must be a function, but received ' + JSON.stringify(t));
            this._compareWith = t;
          }
          writeValue(t) {
            let e;
            if (((this.value = t), Array.isArray(t))) {
              const n = t.map((t) => this._getOptionId(t));
              e = (t, e) => {
                t._setSelected(n.indexOf(e.toString()) > -1);
              };
            } else
              e = (t, e) => {
                t._setSelected(!1);
              };
            this._optionMap.forEach(e);
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              const n = [];
              if (e.hasOwnProperty('selectedOptions')) {
                const t = e.selectedOptions;
                for (let e = 0; e < t.length; e++) {
                  const r = t.item(e),
                    s = this._getOptionValue(r.value);
                  n.push(s);
                }
              } else {
                const t = e.options;
                for (let e = 0; e < t.length; e++) {
                  const r = t.item(e);
                  if (r.selected) {
                    const t = this._getOptionValue(r.value);
                    n.push(t);
                  }
                }
              }
              (this.value = n), t(n);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
          _registerOption(t) {
            const e = (this._idCounter++).toString();
            return this._optionMap.set(e, t), e;
          }
          _getOptionId(t) {
            for (const e of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(e)._value, t)) return e;
            return null;
          }
          _getOptionValue(t) {
            const e = (function (t) {
              return t.split(':')[0];
            })(t);
            return this._optionMap.has(e) ? this._optionMap.get(e)._value : t;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(s.D), s.Mb(s.l));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['select', 'multiple', '', 'formControlName', ''],
              ['select', 'multiple', '', 'formControl', ''],
              ['select', 'multiple', '', 'ngModel', ''],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                s.dc('change', function (t) {
                  return e.onChange(t.target);
                })('blur', function () {
                  return e.onTouched();
                });
            },
            inputs: { compareWith: 'compareWith' },
            features: [s.yb([Q])],
          })),
          t
        );
      })();
      function J(t, e) {
        return [...e.path, t];
      }
      function Y(t, e) {
        t || nt(e, 'Cannot find control with'),
          e.valueAccessor || nt(e, 'No value accessor for form control with'),
          (t.validator = R.compose([t.validator, e.validator])),
          (t.asyncValidator = R.composeAsync([t.asyncValidator, e.asyncValidator])),
          e.valueAccessor.writeValue(t.value),
          (function (t, e) {
            e.valueAccessor.registerOnChange((n) => {
              (t._pendingValue = n),
                (t._pendingChange = !0),
                (t._pendingDirty = !0),
                'change' === t.updateOn && X(t, e);
            });
          })(t, e),
          (function (t, e) {
            t.registerOnChange((t, n) => {
              e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t);
            });
          })(t, e),
          (function (t, e) {
            e.valueAccessor.registerOnTouched(() => {
              (t._pendingTouched = !0),
                'blur' === t.updateOn && t._pendingChange && X(t, e),
                'submit' !== t.updateOn && t.markAsTouched();
            });
          })(t, e),
          e.valueAccessor.setDisabledState &&
            t.registerOnDisabledChange((t) => {
              e.valueAccessor.setDisabledState(t);
            }),
          e._rawValidators.forEach((e) => {
            e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity());
          }),
          e._rawAsyncValidators.forEach((e) => {
            e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity());
          });
      }
      function X(t, e) {
        t._pendingDirty && t.markAsDirty(),
          t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
          e.viewToModelUpdate(t._pendingValue),
          (t._pendingChange = !1);
      }
      function tt(t, e) {
        null == t && nt(e, 'Cannot find control with'),
          (t.validator = R.compose([t.validator, e.validator])),
          (t.asyncValidator = R.composeAsync([t.asyncValidator, e.asyncValidator]));
      }
      function et(t) {
        return nt(t, 'There is no FormControl instance attached to form control element with');
      }
      function nt(t, e) {
        let n;
        throw (
          ((n =
            t.path.length > 1
              ? `path: '${t.path.join(' -> ')}'`
              : t.path[0]
              ? `name: '${t.path}'`
              : 'unspecified name attribute'),
          new Error(`${e} ${n}`))
        );
      }
      function rt(t) {
        return null != t ? R.compose(t.map(P)) : null;
      }
      function st(t) {
        return null != t ? R.composeAsync(t.map(M)) : null;
      }
      const it = [g, $, V, W, K, U];
      function ot(t) {
        const e = lt(t) ? t.validators : t;
        return Array.isArray(e) ? rt(e) : e || null;
      }
      function at(t, e) {
        const n = lt(e) ? e.asyncValidators : t;
        return Array.isArray(n) ? st(n) : n || null;
      }
      function lt(t) {
        return null != t && !Array.isArray(t) && 'object' == typeof t;
      }
      class ct {
        constructor(t, e) {
          (this.validator = t),
            (this.asyncValidator = e),
            (this._onCollectionChange = () => {}),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []);
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return 'VALID' === this.status;
        }
        get invalid() {
          return 'INVALID' === this.status;
        }
        get pending() {
          return 'PENDING' == this.status;
        }
        get disabled() {
          return 'DISABLED' === this.status;
        }
        get enabled() {
          return 'DISABLED' !== this.status;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
        setValidators(t) {
          this.validator = ot(t);
        }
        setAsyncValidators(t) {
          this.asyncValidator = at(t);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          (this.touched = !0), this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }), this._forEachChild((t) => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((t) => {
              t.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
          (this.pristine = !1), this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((t) => {
              t.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
          (this.status = 'PENDING'),
            !1 !== t.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = 'DISABLED'),
            (this.errors = null),
            this._forEachChild((e) => {
              e.disable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._updateAncestors(Object.assign(Object.assign({}, t), { skipPristineCheck: e })),
            this._onDisabledChange.forEach((t) => t(!0));
        }
        enable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = 'VALID'),
            this._forEachChild((e) => {
              e.enable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
            this._updateAncestors(Object.assign(Object.assign({}, t), { skipPristineCheck: e })),
            this._onDisabledChange.forEach((t) => t(!1));
        }
        _updateAncestors(t) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(t) {
          this._parent = t;
        }
        updateValueAndValidity(t = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              ('VALID' !== this.status && 'PENDING' !== this.status) || this._runAsyncValidator(t.emitEvent)),
            !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t);
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
          this._forEachChild((e) => e._updateTreeValidity(t)),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? 'DISABLED' : 'VALID';
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
          if (this.asyncValidator) {
            this.status = 'PENDING';
            const e = D(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe((e) => this.setErrors(e, { emitEvent: t }));
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe();
        }
        setErrors(t, e = {}) {
          (this.errors = t), this._updateControlsErrors(!1 !== e.emitEvent);
        }
        get(t) {
          return (function (t, e, n) {
            if (null == e) return null;
            if ((Array.isArray(e) || (e = e.split('.')), Array.isArray(e) && 0 === e.length)) return null;
            let r = t;
            return (
              e.forEach((t) => {
                r =
                  r instanceof ht
                    ? r.controls.hasOwnProperty(t)
                      ? r.controls[t]
                      : null
                    : (r instanceof dt && r.at(t)) || null;
              }),
              r
            );
          })(this, t);
        }
        getError(t, e) {
          const n = e ? this.get(e) : this;
          return n && n.errors ? n.errors[t] : null;
        }
        hasError(t, e) {
          return !!this.getError(t, e);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
          (this.valueChanges = new s.n()), (this.statusChanges = new s.n());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? 'DISABLED'
            : this.errors
            ? 'INVALID'
            : this._anyControlsHaveStatus('PENDING')
            ? 'PENDING'
            : this._anyControlsHaveStatus('INVALID')
            ? 'INVALID'
            : 'VALID';
        }
        _anyControlsHaveStatus(t) {
          return this._anyControls((e) => e.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls((t) => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((t) => t.touched);
        }
        _updatePristine(t = {}) {
          (this.pristine = !this._anyControlsDirty()), this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
          (this.touched = this._anyControlsTouched()), this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _isBoxedValue(t) {
          return 'object' == typeof t && null !== t && 2 === Object.keys(t).length && 'value' in t && 'disabled' in t;
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          lt(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return !t && this._parent && this._parent.dirty && !this._parent._anyControlsDirty();
        }
      }
      class ut extends ct {
        constructor(t = null, e, n) {
          super(ot(e), at(n, e)),
            (this._onChange = []),
            this._applyFormState(t),
            this._setUpdateStrategy(e),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
            this._initObservables();
        }
        setValue(t, e = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== e.emitModelToViewChange &&
              this._onChange.forEach((t) => t(this.value, !1 !== e.emitViewToModelChange)),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          this.setValue(t, e);
        }
        reset(t = null, e = {}) {
          this._applyFormState(t),
            this.markAsPristine(e),
            this.markAsUntouched(e),
            this.setValue(this.value, e),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _clearChangeFns() {
          (this._onChange = []), (this._onDisabledChange = []), (this._onCollectionChange = () => {});
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _forEachChild(t) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)
          );
        }
        _applyFormState(t) {
          this._isBoxedValue(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled ? this.disable({ onlySelf: !0, emitEvent: !1 }) : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      }
      class ht extends ct {
        constructor(t, e, n) {
          super(ot(e), at(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        registerControl(t, e) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = e), e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e);
        }
        addControl(t, e) {
          this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange();
        }
        removeControl(t) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        setControl(t, e) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            e && this.registerControl(t, e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            Object.keys(t).forEach((n) => {
              this._throwIfControlMissing(n), this.controls[n].setValue(t[n], { onlySelf: !0, emitEvent: e.emitEvent });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          Object.keys(t).forEach((n) => {
            this.controls[n] && this.controls[n].patchValue(t[n], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = {}, e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this._reduceChildren({}, (t, e, n) => ((t[n] = e instanceof ut ? e.value : e.getRawValue()), t));
        }
        _syncPendingControls() {
          let t = this._reduceChildren(!1, (t, e) => !!e._syncPendingControls() || t);
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[t]) throw new Error(`Cannot find form control with name: ${t}.`);
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach((e) => t(this.controls[e], e));
        }
        _setUpControls() {
          this._forEachChild((t) => {
            t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          let e = !1;
          return (
            this._forEachChild((n, r) => {
              e = e || (this.contains(r) && t(n));
            }),
            e
          );
        }
        _reduceValue() {
          return this._reduceChildren({}, (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t));
        }
        _reduceChildren(t, e) {
          let n = t;
          return (
            this._forEachChild((t, r) => {
              n = e(n, t, r);
            }),
            n
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls)) if (this.controls[t].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n]) throw new Error(`Must supply a value for form control with name: '${n}'.`);
          });
        }
      }
      class dt extends ct {
        constructor(t, e, n) {
          super(ot(e), at(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        at(t) {
          return this.controls[t];
        }
        push(t) {
          this.controls.push(t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange();
        }
        insert(t, e) {
          this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity();
        }
        removeAt(t) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            this.updateValueAndValidity();
        }
        setControl(t, e) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            e && (this.controls.splice(t, 0, e), this._registerControl(e)),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            t.forEach((t, n) => {
              this._throwIfControlMissing(n), this.at(n).setValue(t, { onlySelf: !0, emitEvent: e.emitEvent });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          t.forEach((t, n) => {
            this.at(n) && this.at(n).patchValue(t, { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = [], e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this.controls.map((t) => (t instanceof ut ? t.value : t.getRawValue()));
        }
        clear() {
          this.controls.length < 1 ||
            (this._forEachChild((t) => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity());
        }
        _syncPendingControls() {
          let t = this.controls.reduce((t, e) => !!e._syncPendingControls() || t, !1);
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(t)) throw new Error('Cannot find form control at index ' + t);
        }
        _forEachChild(t) {
          this.controls.forEach((e, n) => {
            t(e, n);
          });
        }
        _updateValue() {
          this.value = this.controls.filter((t) => t.enabled || this.disabled).map((t) => t.value);
        }
        _anyControls(t) {
          return this.controls.some((e) => e.enabled && t(e));
        }
        _setUpControls() {
          this._forEachChild((t) => this._registerControl(t));
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n]) throw new Error(`Must supply a value for form control at index: ${n}.`);
          });
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      let ft = (() => {
        class t extends _ {
          ngOnInit() {
            this._checkParentType(), this.formDirective.addFormGroup(this);
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeFormGroup(this);
          }
          get control() {
            return this.formDirective.getFormGroup(this);
          }
          get path() {
            return J(null == this.name ? this.name : this.name.toString(), this._parent);
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          get validator() {
            return rt(this._validators);
          }
          get asyncValidator() {
            return st(this._asyncValidators);
          }
          _checkParentType() {}
        }
        return (
          (t.ɵfac = function (e) {
            return pt(e || t);
          }),
          (t.ɵdir = s.Hb({ type: t, features: [s.wb] })),
          t
        );
      })();
      const pt = s.Tb(ft);
      let gt = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', '']],
            hostAttrs: ['novalidate', ''],
          })),
          t
        );
      })();
      const mt = new s.q('NgModelWithFormControlWarning'),
        bt = { provide: _, useExisting: Object(s.S)(() => yt) };
      let yt = (() => {
        class t extends _ {
          constructor(t, e) {
            super(),
              (this._validators = t),
              (this._asyncValidators = e),
              (this.submitted = !1),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new s.n());
          }
          ngOnChanges(t) {
            this._checkFormPresent(),
              t.hasOwnProperty('form') &&
                (this._updateValidators(), this._updateDomValue(), this._updateRegistrations());
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(t) {
            const e = this.form.get(t.path);
            return Y(e, t), e.updateValueAndValidity({ emitEvent: !1 }), this.directives.push(t), e;
          }
          getControl(t) {
            return this.form.get(t.path);
          }
          removeControl(t) {
            !(function (t, e) {
              const n = t.indexOf(e);
              n > -1 && t.splice(n, 1);
            })(this.directives, t);
          }
          addFormGroup(t) {
            const e = this.form.get(t.path);
            tt(e, t), e.updateValueAndValidity({ emitEvent: !1 });
          }
          removeFormGroup(t) {}
          getFormGroup(t) {
            return this.form.get(t.path);
          }
          addFormArray(t) {
            const e = this.form.get(t.path);
            tt(e, t), e.updateValueAndValidity({ emitEvent: !1 });
          }
          removeFormArray(t) {}
          getFormArray(t) {
            return this.form.get(t.path);
          }
          updateModel(t, e) {
            this.form.get(t.path).setValue(e);
          }
          onSubmit(t) {
            return (
              (this.submitted = !0),
              (e = this.directives),
              this.form._syncPendingControls(),
              e.forEach((t) => {
                const e = t.control;
                'submit' === e.updateOn &&
                  e._pendingChange &&
                  (t.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
              }),
              this.ngSubmit.emit(t),
              !1
            );
            var e;
          }
          onReset() {
            this.resetForm();
          }
          resetForm(t) {
            this.form.reset(t), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach((t) => {
              const e = this.form.get(t.path);
              t.control !== e &&
                ((function (t, e) {
                  e.valueAccessor.registerOnChange(() => et(e)),
                    e.valueAccessor.registerOnTouched(() => et(e)),
                    e._rawValidators.forEach((t) => {
                      t.registerOnValidatorChange && t.registerOnValidatorChange(null);
                    }),
                    e._rawAsyncValidators.forEach((t) => {
                      t.registerOnValidatorChange && t.registerOnValidatorChange(null);
                    }),
                    t && t._clearChangeFns();
                })(t.control, t),
                e && Y(e, t),
                (t.control = e));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(() => this._updateDomValue()),
              this._oldForm && this._oldForm._registerOnCollectionChange(() => {}),
              (this._oldForm = this.form);
          }
          _updateValidators() {
            const t = rt(this._validators);
            this.form.validator = R.compose([this.form.validator, t]);
            const e = st(this._asyncValidators);
            this.form.asyncValidator = R.composeAsync([this.form.asyncValidator, e]);
          }
          _checkFormPresent() {
            this.form || G.missingFormException();
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(k, 10), s.Mb(T, 10));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['', 'formGroup', '']],
            hostBindings: function (t, e) {
              1 & t &&
                s.dc('submit', function (t) {
                  return e.onSubmit(t);
                })('reset', function () {
                  return e.onReset();
                });
            },
            inputs: { form: ['formGroup', 'form'] },
            outputs: { ngSubmit: 'ngSubmit' },
            exportAs: ['ngForm'],
            features: [s.yb([bt]), s.wb, s.xb],
          })),
          t
        );
      })();
      const vt = { provide: _, useExisting: Object(s.S)(() => _t) };
      let _t = (() => {
        class t extends ft {
          constructor(t, e, n) {
            super(), (this._parent = t), (this._validators = e), (this._asyncValidators = n);
          }
          _checkParentType() {
            St(this._parent) && G.groupParentException();
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(_, 13), s.Mb(k, 10), s.Mb(T, 10));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['', 'formGroupName', '']],
            inputs: { name: ['formGroupName', 'name'] },
            features: [s.yb([vt]), s.wb],
          })),
          t
        );
      })();
      const wt = { provide: _, useExisting: Object(s.S)(() => Ct) };
      let Ct = (() => {
        class t extends _ {
          constructor(t, e, n) {
            super(), (this._parent = t), (this._validators = e), (this._asyncValidators = n);
          }
          ngOnInit() {
            this._checkParentType(), this.formDirective.addFormArray(this);
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeFormArray(this);
          }
          get control() {
            return this.formDirective.getFormArray(this);
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          get path() {
            return J(null == this.name ? this.name : this.name.toString(), this._parent);
          }
          get validator() {
            return rt(this._validators);
          }
          get asyncValidator() {
            return st(this._asyncValidators);
          }
          _checkParentType() {
            St(this._parent) && G.arrayParentException();
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(_, 13), s.Mb(k, 10), s.Mb(T, 10));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['', 'formArrayName', '']],
            inputs: { name: ['formArrayName', 'name'] },
            features: [s.yb([wt]), s.wb],
          })),
          t
        );
      })();
      function St(t) {
        return !(t instanceof _t || t instanceof yt || t instanceof Ct);
      }
      const Et = { provide: S, useExisting: Object(s.S)(() => xt) };
      let xt = (() => {
        class t extends S {
          constructor(t, e, n, r, i) {
            super(),
              (this._ngModelWarningConfig = i),
              (this._added = !1),
              (this.update = new s.n()),
              (this._ngModelWarningSent = !1),
              (this._parent = t),
              (this._rawValidators = e || []),
              (this._rawAsyncValidators = n || []),
              (this.valueAccessor = (function (t, e) {
                if (!e) return null;
                Array.isArray(e) || nt(t, 'Value accessor was not provided as an array for form control with');
                let n = void 0,
                  r = void 0,
                  s = void 0;
                return (
                  e.forEach((e) => {
                    var i;
                    e.constructor === y
                      ? (n = e)
                      : ((i = e),
                        it.some((t) => i.constructor === t)
                          ? (r && nt(t, 'More than one built-in value accessor matches form control with'), (r = e))
                          : (s && nt(t, 'More than one custom value accessor matches form control with'), (s = e)));
                  }),
                  s || r || n || (nt(t, 'No valid value accessor for form control with'), null)
                );
              })(this, r));
          }
          set isDisabled(t) {
            G.disabledAttrWarning();
          }
          ngOnChanges(e) {
            var n, r;
            this._added || this._setUpControl(),
              (function (t, e) {
                if (!t.hasOwnProperty('model')) return !1;
                const n = t.model;
                return !!n.isFirstChange() || !Object(s.rb)(e, n.currentValue);
              })(e, this.viewModel) &&
                ('formControlName',
                (n = t),
                this,
                (r = this._ngModelWarningConfig),
                Object(s.T)() &&
                  'never' !== r &&
                  ((((null !== r && 'once' !== r) || n._ngModelWarningSentOnce) &&
                    ('always' !== r || this._ngModelWarningSent)) ||
                    (G.ngModelWarning('formControlName'),
                    (n._ngModelWarningSentOnce = !0),
                    (this._ngModelWarningSent = !0))),
                (this.viewModel = this.model),
                this.formDirective.updateModel(this, this.model));
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          viewToModelUpdate(t) {
            (this.viewModel = t), this.update.emit(t);
          }
          get path() {
            return J(null == this.name ? this.name : this.name.toString(), this._parent);
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          get validator() {
            return rt(this._rawValidators);
          }
          get asyncValidator() {
            return st(this._rawAsyncValidators);
          }
          _checkParentType() {
            !(this._parent instanceof _t) && this._parent instanceof ft
              ? G.ngModelGroupException()
              : this._parent instanceof _t ||
                this._parent instanceof yt ||
                this._parent instanceof Ct ||
                G.controlParentException();
          }
          _setUpControl() {
            this._checkParentType(),
              (this.control = this.formDirective.addControl(this)),
              this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0),
              (this._added = !0);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(_, 13), s.Mb(k, 10), s.Mb(T, 10), s.Mb(f, 10), s.Mb(mt, 8));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['', 'formControlName', '']],
            inputs: {
              isDisabled: ['disabled', 'isDisabled'],
              name: ['formControlName', 'name'],
              model: ['ngModel', 'model'],
            },
            outputs: { update: 'ngModelChange' },
            features: [s.yb([Et]), s.wb, s.xb],
          })),
          (t._ngModelWarningSentOnce = !1),
          t
        );
      })();
      const Ot = { provide: k, useExisting: Object(s.S)(() => At), multi: !0 };
      let At = (() => {
          class t {
            ngOnChanges(t) {
              'maxlength' in t && (this._createValidator(), this._onChange && this._onChange());
            }
            validate(t) {
              return null != this.maxlength ? this._validator(t) : null;
            }
            registerOnValidatorChange(t) {
              this._onChange = t;
            }
            _createValidator() {
              this._validator = R.maxLength(
                'number' == typeof this.maxlength ? this.maxlength : parseInt(this.maxlength, 10)
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['', 'maxlength', '', 'formControlName', ''],
                ['', 'maxlength', '', 'formControl', ''],
                ['', 'maxlength', '', 'ngModel', ''],
              ],
              hostVars: 1,
              hostBindings: function (t, e) {
                2 & t && s.Ab('maxlength', e.maxlength ? e.maxlength : null);
              },
              inputs: { maxlength: 'maxlength' },
              features: [s.yb([Ot]), s.xb],
            })),
            t
          );
        })(),
        kt = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })(),
        Tt = (() => {
          class t {
            group(t, e = null) {
              const n = this._reduceControls(t);
              let r = null,
                s = null,
                i = void 0;
              return (
                null != e &&
                  ((function (t) {
                    return void 0 !== t.asyncValidators || void 0 !== t.validators || void 0 !== t.updateOn;
                  })(e)
                    ? ((r = null != e.validators ? e.validators : null),
                      (s = null != e.asyncValidators ? e.asyncValidators : null),
                      (i = null != e.updateOn ? e.updateOn : void 0))
                    : ((r = null != e.validator ? e.validator : null),
                      (s = null != e.asyncValidator ? e.asyncValidator : null))),
                new ht(n, { asyncValidators: s, updateOn: i, validators: r })
              );
            }
            control(t, e, n) {
              return new ut(t, e, n);
            }
            array(t, e, n) {
              const r = t.map((t) => this._createControl(t));
              return new dt(r, e, n);
            }
            _reduceControls(t) {
              const e = {};
              return (
                Object.keys(t).forEach((n) => {
                  e[n] = this._createControl(t[n]);
                }),
                e
              );
            }
            _createControl(t) {
              return t instanceof ut || t instanceof ht || t instanceof dt
                ? t
                : Array.isArray(t)
                ? this.control(t[0], t.length > 1 ? t[1] : null, t.length > 2 ? t[2] : null)
                : this.control(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        It = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [H],
              imports: [kt],
            })),
            t
          );
        })(),
        Rt = (() => {
          class t {
            static withConfig(e) {
              return { ngModule: t, providers: [{ provide: mt, useValue: e.warnOnNgModelWithFormControl }] };
            }
          }
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [Tt, H],
              imports: [kt],
            })),
            t
          );
        })();
      var jt = n('z+Ro'),
        Dt = n('yCtX'),
        Nt = n('jZKg');
      function Pt(...t) {
        let e = t[t.length - 1];
        return Object(jt.a)(e) ? (t.pop(), Object(Nt.a)(t, e)) : Object(Dt.a)(t);
      }
      var Mt = n('5+tZ');
      function Lt(t, e) {
        return Object(Mt.a)(t, e, 1);
      }
      var Vt = n('7o/Q');
      function Ft(t, e) {
        return function (n) {
          return n.lift(new Ht(t, e));
        };
      }
      class Ht {
        constructor(t, e) {
          (this.predicate = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new Ut(t, this.predicate, this.thisArg));
        }
      }
      class Ut extends Vt.a {
        constructor(t, e, n) {
          super(t), (this.predicate = e), (this.thisArg = n), (this.count = 0);
        }
        _next(t) {
          let e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          e && this.destination.next(t);
        }
      }
      class zt {}
      class $t {}
      class qt {
        constructor(t) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            t
              ? (this.lazyInit =
                  'string' == typeof t
                    ? () => {
                        (this.headers = new Map()),
                          t.split('\n').forEach((t) => {
                            const e = t.indexOf(':');
                            if (e > 0) {
                              const n = t.slice(0, e),
                                r = n.toLowerCase(),
                                s = t.slice(e + 1).trim();
                              this.maybeSetNormalizedName(n, r),
                                this.headers.has(r) ? this.headers.get(r).push(s) : this.headers.set(r, [s]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(t).forEach((e) => {
                            let n = t[e];
                            const r = e.toLowerCase();
                            'string' == typeof n && (n = [n]),
                              n.length > 0 && (this.headers.set(r, n), this.maybeSetNormalizedName(e, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(t) {
          return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
          this.init();
          const e = this.headers.get(t.toLowerCase());
          return e && e.length > 0 ? e[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
          return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, e) {
          return this.clone({ name: t, value: e, op: 'a' });
        }
        set(t, e) {
          return this.clone({ name: t, value: e, op: 's' });
        }
        delete(t, e) {
          return this.clone({ name: t, value: e, op: 'd' });
        }
        maybeSetNormalizedName(t, e) {
          this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof qt ? this.copyFrom(this.lazyInit) : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate && (this.lazyUpdate.forEach((t) => this.applyUpdate(t)), (this.lazyUpdate = null)));
        }
        copyFrom(t) {
          t.init(),
            Array.from(t.headers.keys()).forEach((e) => {
              this.headers.set(e, t.headers.get(e)), this.normalizedNames.set(e, t.normalizedNames.get(e));
            });
        }
        clone(t) {
          const e = new qt();
          return (
            (e.lazyInit = this.lazyInit && this.lazyInit instanceof qt ? this.lazyInit : this),
            (e.lazyUpdate = (this.lazyUpdate || []).concat([t])),
            e
          );
        }
        applyUpdate(t) {
          const e = t.name.toLowerCase();
          switch (t.op) {
            case 'a':
            case 's':
              let n = t.value;
              if (('string' == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(t.name, e);
              const r = ('a' === t.op ? this.headers.get(e) : void 0) || [];
              r.push(...n), this.headers.set(e, r);
              break;
            case 'd':
              const s = t.value;
              if (s) {
                let t = this.headers.get(e);
                if (!t) return;
                (t = t.filter((t) => -1 === s.indexOf(t))),
                  0 === t.length ? (this.headers.delete(e), this.normalizedNames.delete(e)) : this.headers.set(e, t);
              } else this.headers.delete(e), this.normalizedNames.delete(e);
          }
        }
        forEach(t) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((e) => t(this.normalizedNames.get(e), this.headers.get(e)));
        }
      }
      class Bt {
        encodeKey(t) {
          return Gt(t);
        }
        encodeValue(t) {
          return Gt(t);
        }
        decodeKey(t) {
          return decodeURIComponent(t);
        }
        decodeValue(t) {
          return decodeURIComponent(t);
        }
      }
      function Gt(t) {
        return encodeURIComponent(t)
          .replace(/%40/gi, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/gi, '$')
          .replace(/%2C/gi, ',')
          .replace(/%3B/gi, ';')
          .replace(/%2B/gi, '+')
          .replace(/%3D/gi, '=')
          .replace(/%3F/gi, '?')
          .replace(/%2F/gi, '/');
      }
      class Zt {
        constructor(t = {}) {
          if (((this.updates = null), (this.cloneFrom = null), (this.encoder = t.encoder || new Bt()), t.fromString)) {
            if (t.fromObject) throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function (t, e) {
              const n = new Map();
              return (
                t.length > 0 &&
                  t.split('&').forEach((t) => {
                    const r = t.indexOf('='),
                      [s, i] =
                        -1 == r ? [e.decodeKey(t), ''] : [e.decodeKey(t.slice(0, r)), e.decodeValue(t.slice(r + 1))],
                      o = n.get(s) || [];
                    o.push(i), n.set(s, o);
                  }),
                n
              );
            })(t.fromString, this.encoder);
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach((e) => {
                  const n = t.fromObject[e];
                  this.map.set(e, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(t) {
          return this.init(), this.map.has(t);
        }
        get(t) {
          this.init();
          const e = this.map.get(t);
          return e ? e[0] : null;
        }
        getAll(t) {
          return this.init(), this.map.get(t) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(t, e) {
          return this.clone({ param: t, value: e, op: 'a' });
        }
        set(t, e) {
          return this.clone({ param: t, value: e, op: 's' });
        }
        delete(t, e) {
          return this.clone({ param: t, value: e, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((t) => {
                const e = this.encoder.encodeKey(t);
                return this.map
                  .get(t)
                  .map((t) => e + '=' + this.encoder.encodeValue(t))
                  .join('&');
              })
              .filter((t) => '' !== t)
              .join('&')
          );
        }
        clone(t) {
          const e = new Zt({ encoder: this.encoder });
          return (e.cloneFrom = this.cloneFrom || this), (e.updates = (this.updates || []).concat([t])), e;
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom.keys().forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
              this.updates.forEach((t) => {
                switch (t.op) {
                  case 'a':
                  case 's':
                    const e = ('a' === t.op ? this.map.get(t.param) : void 0) || [];
                    e.push(t.value), this.map.set(t.param, e);
                    break;
                  case 'd':
                    if (void 0 === t.value) {
                      this.map.delete(t.param);
                      break;
                    }
                    {
                      let e = this.map.get(t.param) || [];
                      const n = e.indexOf(t.value);
                      -1 !== n && e.splice(n, 1), e.length > 0 ? this.map.set(t.param, e) : this.map.delete(t.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function Wt(t) {
        return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer;
      }
      function Qt(t) {
        return 'undefined' != typeof Blob && t instanceof Blob;
      }
      function Kt(t) {
        return 'undefined' != typeof FormData && t instanceof FormData;
      }
      class Jt {
        constructor(t, e, n, r) {
          let s;
          if (
            ((this.url = e),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = t.toUpperCase()),
            (function (t) {
              switch (t) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || r
              ? ((this.body = void 0 !== n ? n : null), (s = r))
              : (s = n),
            s &&
              ((this.reportProgress = !!s.reportProgress),
              (this.withCredentials = !!s.withCredentials),
              s.responseType && (this.responseType = s.responseType),
              s.headers && (this.headers = s.headers),
              s.params && (this.params = s.params)),
            this.headers || (this.headers = new qt()),
            this.params)
          ) {
            const t = this.params.toString();
            if (0 === t.length) this.urlWithParams = e;
            else {
              const n = e.indexOf('?');
              this.urlWithParams = e + (-1 === n ? '?' : n < e.length - 1 ? '&' : '') + t;
            }
          } else (this.params = new Zt()), (this.urlWithParams = e);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Wt(this.body) || Qt(this.body) || Kt(this.body) || 'string' == typeof this.body
            ? this.body
            : this.body instanceof Zt
            ? this.body.toString()
            : 'object' == typeof this.body || 'boolean' == typeof this.body || Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || Kt(this.body)
            ? null
            : Qt(this.body)
            ? this.body.type || null
            : Wt(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof Zt
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body || 'number' == typeof this.body || Array.isArray(this.body)
            ? 'application/json'
            : null;
        }
        clone(t = {}) {
          const e = t.method || this.method,
            n = t.url || this.url,
            r = t.responseType || this.responseType,
            s = void 0 !== t.body ? t.body : this.body,
            i = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials,
            o = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress;
          let a = t.headers || this.headers,
            l = t.params || this.params;
          return (
            void 0 !== t.setHeaders && (a = Object.keys(t.setHeaders).reduce((e, n) => e.set(n, t.setHeaders[n]), a)),
            t.setParams && (l = Object.keys(t.setParams).reduce((e, n) => e.set(n, t.setParams[n]), l)),
            new Jt(e, n, s, { params: l, headers: a, reportProgress: o, responseType: r, withCredentials: i })
          );
        }
      }
      const Yt = (function () {
        var t = { Sent: 0, UploadProgress: 1, ResponseHeader: 2, DownloadProgress: 3, Response: 4, User: 5 };
        return (
          (t[t.Sent] = 'Sent'),
          (t[t.UploadProgress] = 'UploadProgress'),
          (t[t.ResponseHeader] = 'ResponseHeader'),
          (t[t.DownloadProgress] = 'DownloadProgress'),
          (t[t.Response] = 'Response'),
          (t[t.User] = 'User'),
          t
        );
      })();
      class Xt {
        constructor(t, e = 200, n = 'OK') {
          (this.headers = t.headers || new qt()),
            (this.status = void 0 !== t.status ? t.status : e),
            (this.statusText = t.statusText || n),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class te extends Xt {
        constructor(t = {}) {
          super(t), (this.type = Yt.ResponseHeader);
        }
        clone(t = {}) {
          return new te({
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class ee extends Xt {
        constructor(t = {}) {
          super(t), (this.type = Yt.Response), (this.body = void 0 !== t.body ? t.body : null);
        }
        clone(t = {}) {
          return new ee({
            body: void 0 !== t.body ? t.body : this.body,
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class ne extends Xt {
        constructor(t) {
          super(t, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? 'Http failure during parsing for ' + (t.url || '(unknown url)')
                : `Http failure response for ${t.url || '(unknown url)'}: ${t.status} ${t.statusText}`),
            (this.error = t.error || null);
        }
      }
      function re(t, e) {
        return {
          body: e,
          headers: t.headers,
          observe: t.observe,
          params: t.params,
          reportProgress: t.reportProgress,
          responseType: t.responseType,
          withCredentials: t.withCredentials,
        };
      }
      let se = (() => {
        class t {
          constructor(t) {
            this.handler = t;
          }
          request(t, e, n = {}) {
            let r;
            if (t instanceof Jt) r = t;
            else {
              let s = void 0;
              s = n.headers instanceof qt ? n.headers : new qt(n.headers);
              let i = void 0;
              n.params && (i = n.params instanceof Zt ? n.params : new Zt({ fromObject: n.params })),
                (r = new Jt(t, e, void 0 !== n.body ? n.body : null, {
                  headers: s,
                  params: i,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || 'json',
                  withCredentials: n.withCredentials,
                }));
            }
            const s = Pt(r).pipe(Lt((t) => this.handler.handle(t)));
            if (t instanceof Jt || 'events' === n.observe) return s;
            const i = s.pipe(Ft((t) => t instanceof ee));
            switch (n.observe || 'body') {
              case 'body':
                switch (r.responseType) {
                  case 'arraybuffer':
                    return i.pipe(
                      Object(l.a)((t) => {
                        if (null !== t.body && !(t.body instanceof ArrayBuffer))
                          throw new Error('Response is not an ArrayBuffer.');
                        return t.body;
                      })
                    );
                  case 'blob':
                    return i.pipe(
                      Object(l.a)((t) => {
                        if (null !== t.body && !(t.body instanceof Blob)) throw new Error('Response is not a Blob.');
                        return t.body;
                      })
                    );
                  case 'text':
                    return i.pipe(
                      Object(l.a)((t) => {
                        if (null !== t.body && 'string' != typeof t.body) throw new Error('Response is not a string.');
                        return t.body;
                      })
                    );
                  case 'json':
                  default:
                    return i.pipe(Object(l.a)((t) => t.body));
                }
              case 'response':
                return i;
              default:
                throw new Error(`Unreachable: unhandled observe type ${n.observe}}`);
            }
          }
          delete(t, e = {}) {
            return this.request('DELETE', t, e);
          }
          get(t, e = {}) {
            return this.request('GET', t, e);
          }
          head(t, e = {}) {
            return this.request('HEAD', t, e);
          }
          jsonp(t, e) {
            return this.request('JSONP', t, {
              params: new Zt().append(e, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json',
            });
          }
          options(t, e = {}) {
            return this.request('OPTIONS', t, e);
          }
          patch(t, e, n = {}) {
            return this.request('PATCH', t, re(n, e));
          }
          post(t, e, n = {}) {
            return this.request('POST', t, re(n, e));
          }
          put(t, e, n = {}) {
            return this.request('PUT', t, re(n, e));
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Zb(zt));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class ie {
        constructor(t, e) {
          (this.next = t), (this.interceptor = e);
        }
        handle(t) {
          return this.interceptor.intercept(t, this.next);
        }
      }
      const oe = new s.q('HTTP_INTERCEPTORS');
      let ae = (() => {
        class t {
          intercept(t, e) {
            return e.handle(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const le = /^\)\]\}',?\n/;
      class ce {}
      let ue = (() => {
          class t {
            constructor() {}
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        he = (() => {
          class t {
            constructor(t) {
              this.xhrFactory = t;
            }
            handle(t) {
              if ('JSONP' === t.method)
                throw new Error('Attempted to construct Jsonp request without JsonpClientModule installed.');
              return new o.a((e) => {
                const n = this.xhrFactory.build();
                if (
                  (n.open(t.method, t.urlWithParams),
                  t.withCredentials && (n.withCredentials = !0),
                  t.headers.forEach((t, e) => n.setRequestHeader(t, e.join(','))),
                  t.headers.has('Accept') || n.setRequestHeader('Accept', 'application/json, text/plain, */*'),
                  !t.headers.has('Content-Type'))
                ) {
                  const e = t.detectContentTypeHeader();
                  null !== e && n.setRequestHeader('Content-Type', e);
                }
                if (t.responseType) {
                  const e = t.responseType.toLowerCase();
                  n.responseType = 'json' !== e ? e : 'text';
                }
                const r = t.serializeBody();
                let s = null;
                const i = () => {
                    if (null !== s) return s;
                    const e = 1223 === n.status ? 204 : n.status,
                      r = n.statusText || 'OK',
                      i = new qt(n.getAllResponseHeaders()),
                      o =
                        (function (t) {
                          return 'responseURL' in t && t.responseURL
                            ? t.responseURL
                            : /^X-Request-URL:/m.test(t.getAllResponseHeaders())
                            ? t.getResponseHeader('X-Request-URL')
                            : null;
                        })(n) || t.url;
                    return (s = new te({ headers: i, status: e, statusText: r, url: o })), s;
                  },
                  o = () => {
                    let { headers: r, status: s, statusText: o, url: a } = i(),
                      l = null;
                    204 !== s && (l = void 0 === n.response ? n.responseText : n.response),
                      0 === s && (s = l ? 200 : 0);
                    let c = s >= 200 && s < 300;
                    if ('json' === t.responseType && 'string' == typeof l) {
                      const t = l;
                      l = l.replace(le, '');
                      try {
                        l = '' !== l ? JSON.parse(l) : null;
                      } catch (u) {
                        (l = t), c && ((c = !1), (l = { error: u, text: l }));
                      }
                    }
                    c
                      ? (e.next(new ee({ body: l, headers: r, status: s, statusText: o, url: a || void 0 })),
                        e.complete())
                      : e.error(new ne({ error: l, headers: r, status: s, statusText: o, url: a || void 0 }));
                  },
                  a = (t) => {
                    const { url: r } = i(),
                      s = new ne({
                        error: t,
                        status: n.status || 0,
                        statusText: n.statusText || 'Unknown Error',
                        url: r || void 0,
                      });
                    e.error(s);
                  };
                let l = !1;
                const c = (r) => {
                    l || (e.next(i()), (l = !0));
                    let s = { type: Yt.DownloadProgress, loaded: r.loaded };
                    r.lengthComputable && (s.total = r.total),
                      'text' === t.responseType && n.responseText && (s.partialText = n.responseText),
                      e.next(s);
                  },
                  u = (t) => {
                    let n = { type: Yt.UploadProgress, loaded: t.loaded };
                    t.lengthComputable && (n.total = t.total), e.next(n);
                  };
                return (
                  n.addEventListener('load', o),
                  n.addEventListener('error', a),
                  t.reportProgress &&
                    (n.addEventListener('progress', c),
                    null !== r && n.upload && n.upload.addEventListener('progress', u)),
                  n.send(r),
                  e.next({ type: Yt.Sent }),
                  () => {
                    n.removeEventListener('error', a),
                      n.removeEventListener('load', o),
                      t.reportProgress &&
                        (n.removeEventListener('progress', c),
                        null !== r && n.upload && n.upload.removeEventListener('progress', u)),
                      n.abort();
                  }
                );
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Zb(ce));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const de = new s.q('XSRF_COOKIE_NAME'),
        fe = new s.q('XSRF_HEADER_NAME');
      class pe {}
      let ge = (() => {
          class t {
            constructor(t, e, n) {
              (this.doc = t),
                (this.platform = e),
                (this.cookieName = n),
                (this.lastCookieString = ''),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ('server' === this.platform) return null;
              const t = this.doc.cookie || '';
              return (
                t !== this.lastCookieString &&
                  (this.parseCount++, (this.lastToken = Object(i.z)(t, this.cookieName)), (this.lastCookieString = t)),
                this.lastToken
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Zb(i.c), s.Zb(s.B), s.Zb(de));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        me = (() => {
          class t {
            constructor(t, e) {
              (this.tokenService = t), (this.headerName = e);
            }
            intercept(t, e) {
              const n = t.url.toLowerCase();
              if ('GET' === t.method || 'HEAD' === t.method || n.startsWith('http://') || n.startsWith('https://'))
                return e.handle(t);
              const r = this.tokenService.getToken();
              return (
                null === r ||
                  t.headers.has(this.headerName) ||
                  (t = t.clone({ headers: t.headers.set(this.headerName, r) })),
                e.handle(t)
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Zb(pe), s.Zb(fe));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        be = (() => {
          class t {
            constructor(t, e) {
              (this.backend = t), (this.injector = e), (this.chain = null);
            }
            handle(t) {
              if (null === this.chain) {
                const t = this.injector.get(oe, []);
                this.chain = t.reduceRight((t, e) => new ie(t, e), this.backend);
              }
              return this.chain.handle(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Zb($t), s.Zb(s.r));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        ye = (() => {
          class t {
            static disable() {
              return { ngModule: t, providers: [{ provide: me, useClass: ae }] };
            }
            static withOptions(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.cookieName ? { provide: de, useValue: e.cookieName } : [],
                  e.headerName ? { provide: fe, useValue: e.headerName } : [],
                ],
              };
            }
          }
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [
                me,
                { provide: oe, useExisting: me, multi: !0 },
                { provide: pe, useClass: ge },
                { provide: de, useValue: 'XSRF-TOKEN' },
                { provide: fe, useValue: 'X-XSRF-TOKEN' },
              ],
            })),
            t
          );
        })(),
        ve = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [
                se,
                { provide: zt, useClass: be },
                he,
                { provide: $t, useExisting: he },
                ue,
                { provide: ce, useExisting: ue },
              ],
              imports: [[ye.withOptions({ cookieName: 'XSRF-TOKEN', headerName: 'X-XSRF-TOKEN' })]],
            })),
            t
          );
        })();
      function _e(t) {
        return !!t && (t instanceof o.a || ('function' == typeof t.lift && 'function' == typeof t.subscribe));
      }
      var we = n('bHdf');
      function Ce() {
        return Object(we.a)(1);
      }
      function Se(...t) {
        return Ce()(Pt(...t));
      }
      const Ee = new o.a((t) => t.complete());
      function xe(t) {
        return t
          ? (function (t) {
              return new o.a((e) => t.schedule(() => e.complete()));
            })(t)
          : Ee;
      }
      function Oe(t) {
        return new o.a((e) => {
          let n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? Object(u.a)(n) : xe()).subscribe(e);
        });
      }
      const Ae = (() => {
        function t() {
          return (
            Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      function ke(t) {
        return (e) => (0 === t ? xe() : e.lift(new Te(t)));
      }
      class Te {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new Ae();
        }
        call(t, e) {
          return e.subscribe(new Ie(t, this.total));
        }
      }
      class Ie extends Vt.a {
        constructor(t, e) {
          super(t), (this.total = e), (this.count = 0);
        }
        _next(t) {
          const e = this.total,
            n = ++this.count;
          n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()));
        }
      }
      var Re = n('XNiG'),
        je = n('quSY');
      class De extends je.a {
        constructor(t, e) {
          super();
        }
        schedule(t, e = 0) {
          return this;
        }
      }
      class Ne extends De {
        constructor(t, e) {
          super(t, e), (this.scheduler = t), (this.work = e), (this.pending = !1);
        }
        schedule(t, e = 0) {
          if (this.closed) return this;
          this.state = t;
          const n = this.id,
            r = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(r, n, e)),
            (this.pending = !0),
            (this.delay = e),
            (this.id = this.id || this.requestAsyncId(r, this.id, e)),
            this
          );
        }
        requestAsyncId(t, e, n = 0) {
          return setInterval(t.flush.bind(t, this), n);
        }
        recycleAsyncId(t, e, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return e;
          clearInterval(e);
        }
        execute(t, e) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const n = this._execute(t, e);
          if (n) return n;
          !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(t, e) {
          let n = !1,
            r = void 0;
          try {
            this.work(t);
          } catch (s) {
            (n = !0), (r = (!!s && s) || new Error(s));
          }
          if (n) return this.unsubscribe(), r;
        }
        _unsubscribe() {
          const t = this.id,
            e = this.scheduler,
            n = e.actions,
            r = n.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== r && n.splice(r, 1),
            null != t && (this.id = this.recycleAsyncId(e, t, null)),
            (this.delay = null);
        }
      }
      class Pe extends Ne {
        constructor(t, e) {
          super(t, e), (this.scheduler = t), (this.work = e);
        }
        schedule(t, e = 0) {
          return e > 0 ? super.schedule(t, e) : ((this.delay = e), (this.state = t), this.scheduler.flush(this), this);
        }
        execute(t, e) {
          return e > 0 || this.closed ? super.execute(t, e) : this._execute(t, e);
        }
        requestAsyncId(t, e, n = 0) {
          return (null !== n && n > 0) || (null === n && this.delay > 0)
            ? super.requestAsyncId(t, e, n)
            : t.flush(this);
        }
      }
      let Me = (() => {
        class t {
          constructor(e, n = t.now) {
            (this.SchedulerAction = e), (this.now = n);
          }
          schedule(t, e = 0, n) {
            return new this.SchedulerAction(this, t).schedule(n, e);
          }
        }
        return (t.now = () => Date.now()), t;
      })();
      class Le extends Me {
        constructor(t, e = Me.now) {
          super(t, () => (Le.delegate && Le.delegate !== this ? Le.delegate.now() : e())),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(t, e = 0, n) {
          return Le.delegate && Le.delegate !== this ? Le.delegate.schedule(t, e, n) : super.schedule(t, e, n);
        }
        flush(t) {
          const { actions: e } = this;
          if (this.active) return void e.push(t);
          let n;
          this.active = !0;
          do {
            if ((n = t.execute(t.state, t.delay))) break;
          } while ((t = e.shift()));
          if (((this.active = !1), n)) {
            for (; (t = e.shift()); ) t.unsubscribe();
            throw n;
          }
        }
      }
      class Ve extends Le {}
      const Fe = new Ve(Pe);
      let He = (() => {
        class t {
          constructor(t, e, n) {
            (this.kind = t), (this.value = e), (this.error = n), (this.hasValue = 'N' === t);
          }
          observe(t) {
            switch (this.kind) {
              case 'N':
                return t.next && t.next(this.value);
              case 'E':
                return t.error && t.error(this.error);
              case 'C':
                return t.complete && t.complete();
            }
          }
          do(t, e, n) {
            switch (this.kind) {
              case 'N':
                return t && t(this.value);
              case 'E':
                return e && e(this.error);
              case 'C':
                return n && n();
            }
          }
          accept(t, e, n) {
            return t && 'function' == typeof t.next ? this.observe(t) : this.do(t, e, n);
          }
          toObservable() {
            switch (this.kind) {
              case 'N':
                return Pt(this.value);
              case 'E':
                return (t = this.error), new o.a((e) => e.error(t));
              case 'C':
                return xe();
            }
            var t;
            throw new Error('unexpected notification kind value');
          }
          static createNext(e) {
            return void 0 !== e ? new t('N', e) : t.undefinedValueNotification;
          }
          static createError(e) {
            return new t('E', void 0, e);
          }
          static createComplete() {
            return t.completeNotification;
          }
        }
        return (t.completeNotification = new t('C')), (t.undefinedValueNotification = new t('N', void 0)), t;
      })();
      class Ue extends Vt.a {
        constructor(t, e, n = 0) {
          super(t), (this.scheduler = e), (this.delay = n);
        }
        static dispatch(t) {
          const { notification: e, destination: n } = t;
          e.observe(n), this.unsubscribe();
        }
        scheduleMessage(t) {
          this.destination.add(this.scheduler.schedule(Ue.dispatch, this.delay, new ze(t, this.destination)));
        }
        _next(t) {
          this.scheduleMessage(He.createNext(t));
        }
        _error(t) {
          this.scheduleMessage(He.createError(t)), this.unsubscribe();
        }
        _complete() {
          this.scheduleMessage(He.createComplete()), this.unsubscribe();
        }
      }
      class ze {
        constructor(t, e) {
          (this.notification = t), (this.destination = e);
        }
      }
      var $e = n('9ppp'),
        qe = n('Ylt2');
      class Be extends Re.a {
        constructor(t = Number.POSITIVE_INFINITY, e = Number.POSITIVE_INFINITY, n) {
          super(),
            (this.scheduler = n),
            (this._events = []),
            (this._infiniteTimeWindow = !1),
            (this._bufferSize = t < 1 ? 1 : t),
            (this._windowTime = e < 1 ? 1 : e),
            e === Number.POSITIVE_INFINITY
              ? ((this._infiniteTimeWindow = !0), (this.next = this.nextInfiniteTimeWindow))
              : (this.next = this.nextTimeWindow);
        }
        nextInfiniteTimeWindow(t) {
          const e = this._events;
          e.push(t), e.length > this._bufferSize && e.shift(), super.next(t);
        }
        nextTimeWindow(t) {
          this._events.push(new Ge(this._getNow(), t)), this._trimBufferThenGetEvents(), super.next(t);
        }
        _subscribe(t) {
          const e = this._infiniteTimeWindow,
            n = e ? this._events : this._trimBufferThenGetEvents(),
            r = this.scheduler,
            s = n.length;
          let i;
          if (this.closed) throw new $e.a();
          if (
            (this.isStopped || this.hasError ? (i = je.a.EMPTY) : (this.observers.push(t), (i = new qe.a(this, t))),
            r && t.add((t = new Ue(t, r))),
            e)
          )
            for (let o = 0; o < s && !t.closed; o++) t.next(n[o]);
          else for (let o = 0; o < s && !t.closed; o++) t.next(n[o].value);
          return this.hasError ? t.error(this.thrownError) : this.isStopped && t.complete(), i;
        }
        _getNow() {
          return (this.scheduler || Fe).now();
        }
        _trimBufferThenGetEvents() {
          const t = this._getNow(),
            e = this._bufferSize,
            n = this._windowTime,
            r = this._events,
            s = r.length;
          let i = 0;
          for (; i < s && !(t - r[i].time < n); ) i++;
          return s > e && (i = Math.max(i, s - e)), i > 0 && r.splice(0, i), r;
        }
      }
      class Ge {
        constructor(t, e) {
          (this.time = t), (this.value = e);
        }
      }
      function Ze(t, e, n) {
        let r;
        return (
          (r = t && 'object' == typeof t ? t : { bufferSize: t, windowTime: e, refCount: !1, scheduler: n }),
          (t) =>
            t.lift(
              (function ({
                bufferSize: t = Number.POSITIVE_INFINITY,
                windowTime: e = Number.POSITIVE_INFINITY,
                refCount: n,
                scheduler: r,
              }) {
                let s,
                  i,
                  o = 0,
                  a = !1,
                  l = !1;
                return function (c) {
                  let u;
                  o++,
                    !s || a
                      ? ((a = !1),
                        (s = new Be(t, e, r)),
                        (u = s.subscribe(this)),
                        (i = c.subscribe({
                          next(t) {
                            s.next(t);
                          },
                          error(t) {
                            (a = !0), s.error(t);
                          },
                          complete() {
                            (l = !0), (i = void 0), s.complete();
                          },
                        })))
                      : (u = s.subscribe(this)),
                    this.add(() => {
                      o--, u.unsubscribe(), i && !l && n && 0 === o && (i.unsubscribe(), (i = void 0), (s = void 0));
                    });
                };
              })(r)
            )
        );
      }
      var We = n('l7GE'),
        Qe = n('51Dv'),
        Ke = n('ZUHj');
      function Je(t, e) {
        return 'function' == typeof e
          ? (n) => n.pipe(Je((n, r) => Object(u.a)(t(n, r)).pipe(Object(l.a)((t, s) => e(n, t, r, s)))))
          : (e) => e.lift(new Ye(t));
      }
      class Ye {
        constructor(t) {
          this.project = t;
        }
        call(t, e) {
          return e.subscribe(new Xe(t, this.project));
        }
      }
      class Xe extends We.a {
        constructor(t, e) {
          super(t), (this.project = e), (this.index = 0);
        }
        _next(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(e, t, n);
        }
        _innerSub(t, e, n) {
          const r = this.innerSubscription;
          r && r.unsubscribe();
          const s = new Qe.a(this, e, n),
            i = this.destination;
          i.add(s),
            (this.innerSubscription = Object(Ke.a)(this, t, void 0, void 0, s)),
            this.innerSubscription !== s && i.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: t } = this;
          (t && !t.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(t) {
          this.destination.remove(t), (this.innerSubscription = null), this.isStopped && super._complete();
        }
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
      }
      class tn {}
      let en = (() => {
        class t extends tn {
          getTranslation(t) {
            return Pt({});
          }
        }
        return (
          (t.ɵfac = function (e) {
            return nn(e || t);
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const nn = s.Tb(en);
      class rn {}
      let sn = (() => {
        class t {
          handle(t) {
            return t.key;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function on(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t != t && e != e) return !0;
        let n,
          r,
          s,
          i = typeof t;
        if (i == typeof e && 'object' == i) {
          if (!Array.isArray(t)) {
            if (Array.isArray(e)) return !1;
            for (r in ((s = Object.create(null)), t)) {
              if (!on(t[r], e[r])) return !1;
              s[r] = !0;
            }
            for (r in e) if (!(r in s) && void 0 !== e[r]) return !1;
            return !0;
          }
          if (!Array.isArray(e)) return !1;
          if ((n = t.length) == e.length) {
            for (r = 0; r < n; r++) if (!on(t[r], e[r])) return !1;
            return !0;
          }
        }
        return !1;
      }
      function an(t) {
        return null != t;
      }
      function ln(t) {
        return t && 'object' == typeof t && !Array.isArray(t);
      }
      class cn {}
      let un = (() => {
        class t extends cn {
          constructor() {
            super(...arguments), (this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g);
          }
          interpolate(t, e) {
            let n;
            return (
              (n =
                'string' == typeof t
                  ? this.interpolateString(t, e)
                  : 'function' == typeof t
                  ? this.interpolateFunction(t, e)
                  : t),
              n
            );
          }
          getValue(t, e) {
            let n = 'string' == typeof e ? e.split('.') : [e];
            e = '';
            do {
              (e += n.shift()),
                !an(t) || !an(t[e]) || ('object' != typeof t[e] && n.length)
                  ? n.length
                    ? (e += '.')
                    : (t = void 0)
                  : ((t = t[e]), (e = ''));
            } while (n.length);
            return t;
          }
          interpolateFunction(t, e) {
            return t(e);
          }
          interpolateString(t, e) {
            return e
              ? t.replace(this.templateMatcher, (t, n) => {
                  let r = this.getValue(e, n);
                  return an(r) ? r : t;
                })
              : t;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return hn(e || t);
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const hn = s.Tb(un);
      class dn {}
      let fn = (() => {
        class t extends dn {
          compile(t, e) {
            return t;
          }
          compileTranslations(t, e) {
            return t;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return pn(e || t);
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const pn = s.Tb(fn);
      class gn {
        constructor() {
          (this.currentLang = this.defaultLang),
            (this.translations = {}),
            (this.langs = []),
            (this.onTranslationChange = new s.n()),
            (this.onLangChange = new s.n()),
            (this.onDefaultLangChange = new s.n());
        }
      }
      const mn = new s.q('USE_STORE'),
        bn = new s.q('USE_DEFAULT_LANG'),
        yn = new s.q('DEFAULT_LANGUAGE'),
        vn = new s.q('USE_EXTEND');
      let _n = (() => {
          class t {
            constructor(t, e, n, r, i, o = !0, a = !1, l = !1, c) {
              (this.store = t),
                (this.currentLoader = e),
                (this.compiler = n),
                (this.parser = r),
                (this.missingTranslationHandler = i),
                (this.useDefaultLang = o),
                (this.isolate = a),
                (this.extend = l),
                (this.pending = !1),
                (this._onTranslationChange = new s.n()),
                (this._onLangChange = new s.n()),
                (this._onDefaultLangChange = new s.n()),
                (this._langs = []),
                (this._translations = {}),
                (this._translationRequests = {}),
                c && this.setDefaultLang(c);
            }
            get onTranslationChange() {
              return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
            }
            get onLangChange() {
              return this.isolate ? this._onLangChange : this.store.onLangChange;
            }
            get onDefaultLangChange() {
              return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
            }
            get defaultLang() {
              return this.isolate ? this._defaultLang : this.store.defaultLang;
            }
            set defaultLang(t) {
              this.isolate ? (this._defaultLang = t) : (this.store.defaultLang = t);
            }
            get currentLang() {
              return this.isolate ? this._currentLang : this.store.currentLang;
            }
            set currentLang(t) {
              this.isolate ? (this._currentLang = t) : (this.store.currentLang = t);
            }
            get langs() {
              return this.isolate ? this._langs : this.store.langs;
            }
            set langs(t) {
              this.isolate ? (this._langs = t) : (this.store.langs = t);
            }
            get translations() {
              return this.isolate ? this._translations : this.store.translations;
            }
            set translations(t) {
              this.isolate ? (this._translations = t) : (this.store.translations = t);
            }
            setDefaultLang(t) {
              if (t === this.defaultLang) return;
              let e = this.retrieveTranslations(t);
              void 0 !== e
                ? (null == this.defaultLang && (this.defaultLang = t),
                  e.pipe(ke(1)).subscribe((e) => {
                    this.changeDefaultLang(t);
                  }))
                : this.changeDefaultLang(t);
            }
            getDefaultLang() {
              return this.defaultLang;
            }
            use(t) {
              if (t === this.currentLang) return Pt(this.translations[t]);
              let e = this.retrieveTranslations(t);
              return void 0 !== e
                ? (this.currentLang || (this.currentLang = t),
                  e.pipe(ke(1)).subscribe((e) => {
                    this.changeLang(t);
                  }),
                  e)
                : (this.changeLang(t), Pt(this.translations[t]));
            }
            retrieveTranslations(t) {
              let e;
              return (
                (void 0 === this.translations[t] || this.extend) &&
                  ((this._translationRequests[t] = this._translationRequests[t] || this.getTranslation(t)),
                  (e = this._translationRequests[t])),
                e
              );
            }
            getTranslation(t) {
              this.pending = !0;
              const e = this.currentLoader.getTranslation(t).pipe(Ze(1), ke(1));
              return (
                (this.loadingTranslations = e.pipe(
                  Object(l.a)((e) => this.compiler.compileTranslations(e, t)),
                  Ze(1),
                  ke(1)
                )),
                this.loadingTranslations.subscribe({
                  next: (e) => {
                    (this.translations[t] =
                      this.extend && this.translations[t]
                        ? Object.assign(Object.assign({}, e), this.translations[t])
                        : e),
                      this.updateLangs(),
                      (this.pending = !1);
                  },
                  error: (t) => {
                    this.pending = !1;
                  },
                }),
                e
              );
            }
            setTranslation(t, e, n = !1) {
              (e = this.compiler.compileTranslations(e, t)),
                (this.translations[t] =
                  (n || this.extend) && this.translations[t]
                    ? (function t(e, n) {
                        let r = Object.assign({}, e);
                        return (
                          ln(e) &&
                            ln(n) &&
                            Object.keys(n).forEach((s) => {
                              ln(n[s])
                                ? s in e
                                  ? (r[s] = t(e[s], n[s]))
                                  : Object.assign(r, { [s]: n[s] })
                                : Object.assign(r, { [s]: n[s] });
                            }),
                          r
                        );
                      })(this.translations[t], e)
                    : e),
                this.updateLangs(),
                this.onTranslationChange.emit({ lang: t, translations: this.translations[t] });
            }
            getLangs() {
              return this.langs;
            }
            addLangs(t) {
              t.forEach((t) => {
                -1 === this.langs.indexOf(t) && this.langs.push(t);
              });
            }
            updateLangs() {
              this.addLangs(Object.keys(this.translations));
            }
            getParsedResult(t, e, n) {
              let r;
              if (e instanceof Array) {
                let r = {},
                  s = !1;
                for (let i of e) (r[i] = this.getParsedResult(t, i, n)), _e(r[i]) && (s = !0);
                return s
                  ? h(e.map((t) => (_e(r[t]) ? r[t] : Pt(r[t])))).pipe(
                      Object(l.a)((t) => {
                        let n = {};
                        return (
                          t.forEach((t, r) => {
                            n[e[r]] = t;
                          }),
                          n
                        );
                      })
                    )
                  : r;
              }
              if (
                (t && (r = this.parser.interpolate(this.parser.getValue(t, e), n)),
                void 0 === r &&
                  null != this.defaultLang &&
                  this.defaultLang !== this.currentLang &&
                  this.useDefaultLang &&
                  (r = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], e), n)),
                void 0 === r)
              ) {
                let t = { key: e, translateService: this };
                void 0 !== n && (t.interpolateParams = n), (r = this.missingTranslationHandler.handle(t));
              }
              return void 0 !== r ? r : e;
            }
            get(t, e) {
              if (!an(t) || !t.length) throw new Error('Parameter "key" required');
              if (this.pending)
                return this.loadingTranslations.pipe(Lt((n) => (_e((n = this.getParsedResult(n, t, e))) ? n : Pt(n))));
              {
                let n = this.getParsedResult(this.translations[this.currentLang], t, e);
                return _e(n) ? n : Pt(n);
              }
            }
            getStreamOnTranslationChange(t, e) {
              if (!an(t) || !t.length) throw new Error('Parameter "key" required');
              return Se(
                Oe(() => this.get(t, e)),
                this.onTranslationChange.pipe(
                  Je((n) => {
                    const r = this.getParsedResult(n.translations, t, e);
                    return 'function' == typeof r.subscribe ? r : Pt(r);
                  })
                )
              );
            }
            stream(t, e) {
              if (!an(t) || !t.length) throw new Error('Parameter "key" required');
              return Se(
                Oe(() => this.get(t, e)),
                this.onLangChange.pipe(
                  Je((n) => {
                    const r = this.getParsedResult(n.translations, t, e);
                    return _e(r) ? r : Pt(r);
                  })
                )
              );
            }
            instant(t, e) {
              if (!an(t) || !t.length) throw new Error('Parameter "key" required');
              let n = this.getParsedResult(this.translations[this.currentLang], t, e);
              if (_e(n)) {
                if (t instanceof Array) {
                  let e = {};
                  return (
                    t.forEach((n, r) => {
                      e[t[r]] = t[r];
                    }),
                    e
                  );
                }
                return t;
              }
              return n;
            }
            set(t, e, n = this.currentLang) {
              (this.translations[n][t] = this.compiler.compile(e, n)),
                this.updateLangs(),
                this.onTranslationChange.emit({ lang: n, translations: this.translations[n] });
            }
            changeLang(t) {
              (this.currentLang = t),
                this.onLangChange.emit({ lang: t, translations: this.translations[t] }),
                null == this.defaultLang && this.changeDefaultLang(t);
            }
            changeDefaultLang(t) {
              (this.defaultLang = t), this.onDefaultLangChange.emit({ lang: t, translations: this.translations[t] });
            }
            reloadLang(t) {
              return this.resetLang(t), this.getTranslation(t);
            }
            resetLang(t) {
              (this._translationRequests[t] = void 0), (this.translations[t] = void 0);
            }
            getBrowserLang() {
              if ('undefined' == typeof window || void 0 === window.navigator) return;
              let t = window.navigator.languages ? window.navigator.languages[0] : null;
              return (
                (t =
                  t || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage),
                void 0 !== t
                  ? (-1 !== t.indexOf('-') && (t = t.split('-')[0]), -1 !== t.indexOf('_') && (t = t.split('_')[0]), t)
                  : void 0
              );
            }
            getBrowserCultureLang() {
              if ('undefined' == typeof window || void 0 === window.navigator) return;
              let t = window.navigator.languages ? window.navigator.languages[0] : null;
              return (
                (t =
                  t || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage),
                t
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                s.Zb(gn),
                s.Zb(tn),
                s.Zb(dn),
                s.Zb(cn),
                s.Zb(rn),
                s.Zb(bn),
                s.Zb(mn),
                s.Zb(vn),
                s.Zb(yn)
              );
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        wn = (() => {
          class t {
            constructor(t, e, n) {
              (this.translateService = t),
                (this.element = e),
                (this._ref = n),
                this.onTranslationChangeSub ||
                  (this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe((t) => {
                    t.lang === this.translateService.currentLang && this.checkNodes(!0, t.translations);
                  })),
                this.onLangChangeSub ||
                  (this.onLangChangeSub = this.translateService.onLangChange.subscribe((t) => {
                    this.checkNodes(!0, t.translations);
                  })),
                this.onDefaultLangChangeSub ||
                  (this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe((t) => {
                    this.checkNodes(!0);
                  }));
            }
            set translate(t) {
              t && ((this.key = t), this.checkNodes());
            }
            set translateParams(t) {
              on(this.currentParams, t) || ((this.currentParams = t), this.checkNodes(!0));
            }
            ngAfterViewChecked() {
              this.checkNodes();
            }
            checkNodes(t = !1, e) {
              let n = this.element.nativeElement.childNodes;
              n.length ||
                (this.setContent(this.element.nativeElement, this.key), (n = this.element.nativeElement.childNodes));
              for (let r = 0; r < n.length; ++r) {
                let s = n[r];
                if (3 === s.nodeType) {
                  let n;
                  if ((t && (s.lastKey = null), an(s.lookupKey))) n = s.lookupKey;
                  else if (this.key) n = this.key;
                  else {
                    let t = this.getContent(s),
                      e = t.trim();
                    e.length &&
                      ((s.lookupKey = e),
                      t !== s.currentValue
                        ? ((n = e), (s.originalContent = t || s.originalContent))
                        : s.originalContent
                        ? (n = s.originalContent.trim())
                        : t !== s.currentValue && ((n = e), (s.originalContent = t || s.originalContent)));
                  }
                  this.updateValue(n, s, e);
                }
              }
            }
            updateValue(t, e, n) {
              if (t) {
                if (e.lastKey === t && this.lastParams === this.currentParams) return;
                this.lastParams = this.currentParams;
                let r = (n) => {
                  n !== t && (e.lastKey = t),
                    e.originalContent || (e.originalContent = this.getContent(e)),
                    (e.currentValue = an(n) ? n : e.originalContent || t),
                    this.setContent(e, this.key ? e.currentValue : e.originalContent.replace(t, e.currentValue)),
                    this._ref.markForCheck();
                };
                if (an(n)) {
                  let e = this.translateService.getParsedResult(n, t, this.currentParams);
                  _e(e) ? e.subscribe(r) : r(e);
                } else this.translateService.get(t, this.currentParams).subscribe(r);
              }
            }
            getContent(t) {
              return an(t.textContent) ? t.textContent : t.data;
            }
            setContent(t, e) {
              an(t.textContent) ? (t.textContent = e) : (t.data = e);
            }
            ngOnDestroy() {
              this.onLangChangeSub && this.onLangChangeSub.unsubscribe(),
                this.onDefaultLangChangeSub && this.onDefaultLangChangeSub.unsubscribe(),
                this.onTranslationChangeSub && this.onTranslationChangeSub.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(_n), s.Mb(s.l), s.Mb(s.h));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['', 'translate', ''],
                ['', 'ngx-translate', ''],
              ],
              inputs: { translate: 'translate', translateParams: 'translateParams' },
            })),
            t
          );
        })(),
        Cn = (() => {
          class t {
            constructor(t, e) {
              (this.translate = t), (this._ref = e), (this.value = '');
            }
            updateValue(t, e, n) {
              let r = (e) => {
                (this.value = void 0 !== e ? e : t), (this.lastKey = t), this._ref.markForCheck();
              };
              if (n) {
                let s = this.translate.getParsedResult(n, t, e);
                _e(s.subscribe) ? s.subscribe(r) : r(s);
              }
              this.translate.get(t, e).subscribe(r);
            }
            transform(t, ...e) {
              if (!t || !t.length) return t;
              if (on(t, this.lastKey) && on(e, this.lastParams)) return this.value;
              let n;
              if (an(e[0]) && e.length)
                if ('string' == typeof e[0] && e[0].length) {
                  let t = e[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                  try {
                    n = JSON.parse(t);
                  } catch (r) {
                    throw new SyntaxError(
                      'Wrong parameter in TranslatePipe. Expected a valid Object, received: ' + e[0]
                    );
                  }
                } else 'object' != typeof e[0] || Array.isArray(e[0]) || (n = e[0]);
              return (
                (this.lastKey = t),
                (this.lastParams = e),
                this.updateValue(t, n),
                this._dispose(),
                this.onTranslationChange ||
                  (this.onTranslationChange = this.translate.onTranslationChange.subscribe((e) => {
                    this.lastKey &&
                      e.lang === this.translate.currentLang &&
                      ((this.lastKey = null), this.updateValue(t, n, e.translations));
                  })),
                this.onLangChange ||
                  (this.onLangChange = this.translate.onLangChange.subscribe((e) => {
                    this.lastKey && ((this.lastKey = null), this.updateValue(t, n, e.translations));
                  })),
                this.onDefaultLangChange ||
                  (this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(() => {
                    this.lastKey && ((this.lastKey = null), this.updateValue(t, n));
                  })),
                this.value
              );
            }
            _dispose() {
              void 0 !== this.onTranslationChange &&
                (this.onTranslationChange.unsubscribe(), (this.onTranslationChange = void 0)),
                void 0 !== this.onLangChange && (this.onLangChange.unsubscribe(), (this.onLangChange = void 0)),
                void 0 !== this.onDefaultLangChange &&
                  (this.onDefaultLangChange.unsubscribe(), (this.onDefaultLangChange = void 0));
            }
            ngOnDestroy() {
              this._dispose();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(_n), s.bc());
            }),
            (t.ɵpipe = s.Lb({ name: 'translate', type: t, pure: !1 })),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Sn = (() => {
          class t {
            static forRoot(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.loader || { provide: tn, useClass: en },
                  e.compiler || { provide: dn, useClass: fn },
                  e.parser || { provide: cn, useClass: un },
                  e.missingTranslationHandler || { provide: rn, useClass: sn },
                  gn,
                  { provide: mn, useValue: e.isolate },
                  { provide: bn, useValue: e.useDefaultLang },
                  { provide: vn, useValue: e.extend },
                  { provide: yn, useValue: e.defaultLanguage },
                  _n,
                ],
              };
            }
            static forChild(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.loader || { provide: tn, useClass: en },
                  e.compiler || { provide: dn, useClass: fn },
                  e.parser || { provide: cn, useClass: un },
                  e.missingTranslationHandler || { provide: rn, useClass: sn },
                  { provide: mn, useValue: e.isolate },
                  { provide: bn, useValue: e.useDefaultLang },
                  { provide: vn, useValue: e.extend },
                  { provide: yn, useValue: e.defaultLanguage },
                  _n,
                ],
              };
            }
          }
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })();
      class En extends Re.a {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const e = super._subscribe(t);
          return e && !e.closed && t.next(this._value), e;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new $e.a();
          return this._value;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      const xn = {};
      class On {
        constructor(t) {
          this.resultSelector = t;
        }
        call(t, e) {
          return e.subscribe(new An(t, this.resultSelector));
        }
      }
      class An extends We.a {
        constructor(t, e) {
          super(t), (this.resultSelector = e), (this.active = 0), (this.values = []), (this.observables = []);
        }
        _next(t) {
          this.values.push(xn), this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (let n = 0; n < e; n++) {
              const e = t[n];
              this.add(Object(Ke.a)(this, e, e, n));
            }
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(t, e, n, r, s) {
          const i = this.values,
            o = this.toRespond ? (i[n] === xn ? --this.toRespond : this.toRespond) : 0;
          (i[n] = e), 0 === o && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice()));
        }
        _tryResultSelector(t) {
          let e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      const kn = new Le(Ne);
      function Tn() {}
      var In = n('n6bG');
      function Rn(t, e, n, r) {
        return (
          Object(In.a)(n) && ((r = n), (n = void 0)),
          r
            ? Rn(t, e, n).pipe(Object(l.a)((t) => (Object(a.a)(t) ? r(...t) : r(t))))
            : new o.a((r) => {
                !(function t(e, n, r, s, i) {
                  let o;
                  if (
                    (function (t) {
                      return t && 'function' == typeof t.addEventListener && 'function' == typeof t.removeEventListener;
                    })(e)
                  ) {
                    const t = e;
                    e.addEventListener(n, r, i), (o = () => t.removeEventListener(n, r, i));
                  } else if (
                    (function (t) {
                      return t && 'function' == typeof t.on && 'function' == typeof t.off;
                    })(e)
                  ) {
                    const t = e;
                    e.on(n, r), (o = () => t.off(n, r));
                  } else if (
                    (function (t) {
                      return t && 'function' == typeof t.addListener && 'function' == typeof t.removeListener;
                    })(e)
                  ) {
                    const t = e;
                    e.addListener(n, r), (o = () => t.removeListener(n, r));
                  } else {
                    if (!e || !e.length) throw new TypeError('Invalid event target');
                    for (let o = 0, a = e.length; o < a; o++) t(e[o], n, r, s, i);
                  }
                  s.add(o);
                })(
                  t,
                  e,
                  function (t) {
                    r.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : t);
                  },
                  r,
                  n
                );
              })
        );
      }
      var jn = n('VRyK');
      class Dn {
        call(t, e) {
          return e.subscribe(new Nn(t));
        }
      }
      class Nn extends We.a {
        constructor(t) {
          super(t), (this.hasFirst = !1), (this.observables = []), (this.subscriptions = []);
        }
        _next(t) {
          this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            for (let n = 0; n < e && !this.hasFirst; n++) {
              let e = t[n],
                r = Object(Ke.a)(this, e, e, n);
              this.subscriptions && this.subscriptions.push(r), this.add(r);
            }
            this.observables = null;
          }
        }
        notifyNext(t, e, n, r, s) {
          if (!this.hasFirst) {
            this.hasFirst = !0;
            for (let t = 0; t < this.subscriptions.length; t++)
              if (t !== n) {
                let e = this.subscriptions[t];
                e.unsubscribe(), this.remove(e);
              }
            this.subscriptions = null;
          }
          this.destination.next(e);
        }
      }
      function Pn(t) {
        return (e) => e.lift(new Mn(t));
      }
      class Mn {
        constructor(t) {
          this.notifier = t;
        }
        call(t, e) {
          const n = new Ln(t),
            r = Object(Ke.a)(n, this.notifier);
          return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n;
        }
      }
      class Ln extends We.a {
        constructor(t) {
          super(t), (this.seenValue = !1);
        }
        notifyNext(t, e, n, r, s) {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
      function Vn(t, e, n) {
        return function (r) {
          return r.lift(new Fn(t, e, n));
        };
      }
      class Fn {
        constructor(t, e, n) {
          (this.nextOrObserver = t), (this.error = e), (this.complete = n);
        }
        call(t, e) {
          return e.subscribe(new Hn(t, this.nextOrObserver, this.error, this.complete));
        }
      }
      class Hn extends Vt.a {
        constructor(t, e, n, r) {
          super(t),
            (this._tapNext = Tn),
            (this._tapError = Tn),
            (this._tapComplete = Tn),
            (this._tapError = n || Tn),
            (this._tapComplete = r || Tn),
            Object(In.a)(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || Tn),
                (this._tapError = e.error || Tn),
                (this._tapComplete = e.complete || Tn));
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }
      }
      function Un(...t) {
        return (e) => {
          let n;
          return 'function' == typeof t[t.length - 1] && (n = t.pop()), e.lift(new zn(t, n));
        };
      }
      class zn {
        constructor(t, e) {
          (this.observables = t), (this.project = e);
        }
        call(t, e) {
          return e.subscribe(new $n(t, this.observables, this.project));
        }
      }
      class $n extends We.a {
        constructor(t, e, n) {
          super(t), (this.observables = e), (this.project = n), (this.toRespond = []);
          const r = e.length;
          this.values = new Array(r);
          for (let s = 0; s < r; s++) this.toRespond.push(s);
          for (let s = 0; s < r; s++) {
            let t = e[s];
            this.add(Object(Ke.a)(this, t, t, s));
          }
        }
        notifyNext(t, e, n, r, s) {
          this.values[n] = e;
          const i = this.toRespond;
          if (i.length > 0) {
            const t = i.indexOf(n);
            -1 !== t && i.splice(t, 1);
          }
        }
        notifyComplete() {}
        _next(t) {
          if (0 === this.toRespond.length) {
            const e = [t, ...this.values];
            this.project ? this._tryProject(e) : this.destination.next(e);
          }
        }
        _tryProject(t) {
          let e;
          try {
            e = this.project.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      class qn {
        constructor(t, e) {
          (this.delay = t), (this.scheduler = e);
        }
        call(t, e) {
          return e.subscribe(new Bn(t, this.delay, this.scheduler));
        }
      }
      class Bn extends Vt.a {
        constructor(t, e, n) {
          super(t), (this.delay = e), (this.scheduler = n), (this.queue = []), (this.active = !1), (this.errored = !1);
        }
        static dispatch(t) {
          const e = t.source,
            n = e.queue,
            r = t.scheduler,
            s = t.destination;
          for (; n.length > 0 && n[0].time - r.now() <= 0; ) n.shift().notification.observe(s);
          if (n.length > 0) {
            const e = Math.max(0, n[0].time - r.now());
            this.schedule(t, e);
          } else this.unsubscribe(), (e.active = !1);
        }
        _schedule(t) {
          (this.active = !0),
            this.destination.add(
              t.schedule(Bn.dispatch, this.delay, { source: this, destination: this.destination, scheduler: t })
            );
        }
        scheduleNotification(t) {
          if (!0 === this.errored) return;
          const e = this.scheduler,
            n = new Gn(e.now() + this.delay, t);
          this.queue.push(n), !1 === this.active && this._schedule(e);
        }
        _next(t) {
          this.scheduleNotification(He.createNext(t));
        }
        _error(t) {
          (this.errored = !0), (this.queue = []), this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.scheduleNotification(He.createComplete()), this.unsubscribe();
        }
      }
      class Gn {
        constructor(t, e) {
          (this.time = t), (this.notification = e);
        }
      }
      n('w1tV'), $localize`:@@ngb.alert.close␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`;
      const Zn = ['*'];
      $localize`:@@ngb.carousel.previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`,
        $localize`:@@ngb.carousel.next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`,
        $localize`:@@ngb.datepicker.previous-month␟c3b08b07b5ab98e7cdcf18df39355690ab7d3884␟8586908745456864217:Previous month`,
        $localize`:@@ngb.datepicker.previous-month␟c3b08b07b5ab98e7cdcf18df39355690ab7d3884␟8586908745456864217:Previous month`,
        $localize`:@@ngb.datepicker.next-month␟4bd046985cfe13040d5ef0cd881edce0968a111a␟3628374603023447227:Next month`,
        $localize`:@@ngb.datepicker.next-month␟4bd046985cfe13040d5ef0cd881edce0968a111a␟3628374603023447227:Next month`,
        $localize`:@@ngb.datepicker.select-month␟1dbc84807f35518112f62e5775d1daebd3d8462b␟2253869508135064750:Select month`,
        $localize`:@@ngb.datepicker.select-month␟1dbc84807f35518112f62e5775d1daebd3d8462b␟2253869508135064750:Select month`,
        $localize`:@@ngb.datepicker.select-year␟8ceb09d002bf0c5d1cac171dfbffe1805d2b3962␟8852264961585484321:Select year`,
        $localize`:@@ngb.datepicker.select-year␟8ceb09d002bf0c5d1cac171dfbffe1805d2b3962␟8852264961585484321:Select year`;
      const Wn = ['dialog'];
      function Qn(t) {
        return null != t;
      }
      $localize`:@@ngb.pagination.first␟656506dfd46380956a655f919f1498d018f75ca0␟6867721956102594380:««`,
        $localize`:@@ngb.pagination.previous␟6e52b6ee77a4848d899dd21b591c6fd499e3aef3␟6479320895410098858:«`,
        $localize`:@@ngb.pagination.next␟ba9cbb4ff311464308a3627e4f1c3345d9fe6d7d␟5458177150283468089:»`,
        $localize`:@@ngb.pagination.last␟49f27a460bc97e7e00be5b37098bfa79884fc7d9␟5277020320267646988:»»`,
        $localize`:@@ngb.pagination.first-aria␟f2f852318759c6396b5d3d17031d53817d7b38cc␟2241508602425256033:First`,
        $localize`:@@ngb.pagination.previous-aria␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`,
        $localize`:@@ngb.pagination.next-aria␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`,
        $localize`:@@ngb.pagination.last-aria␟5c729788ba138508aca1bec050b610f7bf81db3e␟4882268002141858767:Last`,
        $localize`:@@ngb.progressbar.value␟f8e9a947b9db4252c0e9905765338712f2fd032f␟3720830768741091151:${'\ufffd0\ufffd'}:INTERPOLATION:`,
        $localize`:@@ngb.timepicker.HH␟ce676ab1d6d98f85c836381cf100a4a91ef95a1f␟4043638465245303811:HH`,
        $localize`:@@ngb.timepicker.hours␟3bbce5fef7e1151da052a4e529453edb340e3912␟8070396816726827304:Hours`,
        $localize`:@@ngb.timepicker.MM␟72c8edf6a50068a05bde70991e36b1e881f4ca54␟1647282246509919852:MM`,
        $localize`:@@ngb.timepicker.minutes␟41e62daa962947c0d23ded0981975d1bddf0bf38␟5531237363767747080:Minutes`,
        $localize`:@@ngb.timepicker.increment-hours␟cb74bc1d625a6c1742f0d7d47306cf495780c218␟5939278348542933629:Increment hours`,
        $localize`:@@ngb.timepicker.decrement-hours␟147c7a19429da7d999e247d22e33fee370b1691b␟3651829882940481818:Decrement hours`,
        $localize`:@@ngb.timepicker.increment-minutes␟f5a4a3bc05e053f6732475d0e74875ec01c3a348␟180147720391025024:Increment minutes`,
        $localize`:@@ngb.timepicker.decrement-minutes␟c1a6899e529c096da5b660385d4e77fe1f7ad271␟7447789825403243588:Decrement minutes`,
        $localize`:@@ngb.timepicker.SS␟ebe38d36a40a2383c5fefa9b4608ffbda08bd4a3␟3628127143071124194:SS`,
        $localize`:@@ngb.timepicker.seconds␟4f2ed9e71a7c981db3e50ae2fedb28aff2ec4e6c␟8874012390997067175:Seconds`,
        $localize`:@@ngb.timepicker.increment-seconds␟912322ecee7d659d04dcf494a70e22e49d334b26␟5364772110539092174:Increment seconds`,
        $localize`:@@ngb.timepicker.decrement-seconds␟5db47ac104294243a70eb9124fbea9d0004ddf69␟753633511487974857:Decrement seconds`,
        $localize`:@@ngb.timepicker.PM␟8d6e691e10306c1b34c6b26805151aaea320ef7f␟3564199131264287502:${'\ufffd0\ufffd'}:INTERPOLATION:`,
        $localize`:@@ngb.timepicker.AM␟69a1f176a93998876952adac57c3bc3863b6105e␟4592818992509942761:${'\ufffd0\ufffd'}:INTERPOLATION:`,
        $localize`:@@ngb.toast.close-aria␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`,
        'undefined' == typeof Element ||
          Element.prototype.closest ||
          (Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
          (Element.prototype.closest = function (t) {
            let e = this;
            if (!document.documentElement.contains(e)) return null;
            do {
              if (e.matches(t)) return e;
              e = e.parentElement || e.parentNode;
            } while (null !== e && 1 === e.nodeType);
            return null;
          }));
      let Kn = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b]],
            })),
            t
          );
        })(),
        Jn = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b]],
            })),
            t
          );
        })(),
        Yn = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })(),
        Xn = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b]],
            })),
            t
          );
        })(),
        tr = (() => {
          let t = class {
            constructor() {
              this.collapsed = !1;
            }
          };
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'ngbCollapse', '']],
              hostVars: 4,
              hostBindings: function (t, e) {
                2 & t && s.Eb('collapse', !0)('show', !e.collapsed);
              },
              inputs: { collapsed: ['ngbCollapse', 'collapsed'] },
              exportAs: ['ngbCollapse'],
            })),
            t
          );
        })(),
        er = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })();
      var nr = (function (t) {
        return (
          (t[(t.Tab = 9)] = 'Tab'),
          (t[(t.Enter = 13)] = 'Enter'),
          (t[(t.Escape = 27)] = 'Escape'),
          (t[(t.Space = 32)] = 'Space'),
          (t[(t.PageUp = 33)] = 'PageUp'),
          (t[(t.PageDown = 34)] = 'PageDown'),
          (t[(t.End = 35)] = 'End'),
          (t[(t.Home = 36)] = 'Home'),
          (t[(t.ArrowLeft = 37)] = 'ArrowLeft'),
          (t[(t.ArrowUp = 38)] = 'ArrowUp'),
          (t[(t.ArrowRight = 39)] = 'ArrowRight'),
          (t[(t.ArrowDown = 40)] = 'ArrowDown'),
          t
        );
      })({});
      const rr = (t, e) => !!e && e.some((e) => e.contains(t)),
        sr = (t, e) =>
          !e ||
          null !=
            (function (t, e) {
              return e ? (void 0 === t.closest ? null : t.closest(e)) : null;
            })(t, e),
        ir = (() =>
          'undefined' != typeof navigator &&
          !!navigator.userAgent &&
          (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
            (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
            /Android/.test(navigator.userAgent)))();
      const or = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled]):not([type="hidden"])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[contenteditable]',
        '[tabindex]:not([tabindex="-1"])',
      ].join(', ');
      function ar(t) {
        const e = Array.from(t.querySelectorAll(or)).filter((t) => -1 !== t.tabIndex);
        return [e[0], e[e.length - 1]];
      }
      class lr {
        getAllStyles(t) {
          return window.getComputedStyle(t);
        }
        getStyle(t, e) {
          return this.getAllStyles(t)[e];
        }
        isStaticPositioned(t) {
          return 'static' === (this.getStyle(t, 'position') || 'static');
        }
        offsetParent(t) {
          let e = t.offsetParent || document.documentElement;
          for (; e && e !== document.documentElement && this.isStaticPositioned(e); ) e = e.offsetParent;
          return e || document.documentElement;
        }
        position(t, e = !0) {
          let n,
            r = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
          if ('fixed' === this.getStyle(t, 'position'))
            (n = t.getBoundingClientRect()),
              (n = { top: n.top, bottom: n.bottom, left: n.left, right: n.right, height: n.height, width: n.width });
          else {
            const e = this.offsetParent(t);
            (n = this.offset(t, !1)),
              e !== document.documentElement && (r = this.offset(e, !1)),
              (r.top += e.clientTop),
              (r.left += e.clientLeft);
          }
          return (
            (n.top -= r.top),
            (n.bottom -= r.top),
            (n.left -= r.left),
            (n.right -= r.left),
            e &&
              ((n.top = Math.round(n.top)),
              (n.bottom = Math.round(n.bottom)),
              (n.left = Math.round(n.left)),
              (n.right = Math.round(n.right))),
            n
          );
        }
        offset(t, e = !0) {
          const n = t.getBoundingClientRect(),
            r = window.pageYOffset - document.documentElement.clientTop,
            s = window.pageXOffset - document.documentElement.clientLeft;
          let i = {
            height: n.height || t.offsetHeight,
            width: n.width || t.offsetWidth,
            top: n.top + r,
            bottom: n.bottom + r,
            left: n.left + s,
            right: n.right + s,
          };
          return (
            e &&
              ((i.height = Math.round(i.height)),
              (i.width = Math.round(i.width)),
              (i.top = Math.round(i.top)),
              (i.bottom = Math.round(i.bottom)),
              (i.left = Math.round(i.left)),
              (i.right = Math.round(i.right))),
            i
          );
        }
        positionElements(t, e, n, r) {
          const [s = 'top', i = 'center'] = n.split('-'),
            o = r ? this.offset(t, !1) : this.position(t, !1),
            a = this.getAllStyles(e),
            l = parseFloat(a.marginTop),
            c = parseFloat(a.marginBottom),
            u = parseFloat(a.marginLeft),
            h = parseFloat(a.marginRight);
          let d = 0,
            f = 0;
          switch (s) {
            case 'top':
              d = o.top - (e.offsetHeight + l + c);
              break;
            case 'bottom':
              d = o.top + o.height;
              break;
            case 'left':
              f = o.left - (e.offsetWidth + u + h);
              break;
            case 'right':
              f = o.left + o.width;
          }
          switch (i) {
            case 'top':
              d = o.top;
              break;
            case 'bottom':
              d = o.top + o.height - e.offsetHeight;
              break;
            case 'left':
              f = o.left;
              break;
            case 'right':
              f = o.left + o.width - e.offsetWidth;
              break;
            case 'center':
              'top' === s || 'bottom' === s
                ? (f = o.left + o.width / 2 - e.offsetWidth / 2)
                : (d = o.top + o.height / 2 - e.offsetHeight / 2);
          }
          e.style.transform = `translate(${Math.round(f)}px, ${Math.round(d)}px)`;
          const p = e.getBoundingClientRect(),
            g = document.documentElement,
            m = window.innerHeight || g.clientHeight,
            b = window.innerWidth || g.clientWidth;
          return p.left >= 0 && p.top >= 0 && p.right <= b && p.bottom <= m;
        }
      }
      const cr = /\s+/,
        ur = new lr();
      let hr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b, It]],
            })),
            t
          );
        })(),
        dr = (() => {
          let t = class {
            constructor() {
              (this.autoClose = !0), (this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right']);
            }
          };
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = Object(s.Ib)({
              factory: function () {
                return new t();
              },
              token: t,
              providedIn: 'root',
            })),
            t
          );
        })();
      var fr;
      let pr = (() => {
          let t = class {};
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = s.Hb({ type: t, selectors: [['', 8, 'navbar']] })),
            t
          );
        })(),
        gr = (() => {
          let t = class {
            constructor(t) {
              (this.elementRef = t), (this._disabled = !1);
            }
            set disabled(t) {
              this._disabled = '' === t || !0 === t;
            }
            get disabled() {
              return this._disabled;
            }
          };
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(s.l));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'ngbDropdownItem', '']],
              hostAttrs: [1, 'dropdown-item'],
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t && s.Eb('disabled', e.disabled);
              },
              inputs: { disabled: 'disabled' },
            })),
            t
          );
        })(),
        mr = (() => {
          let t = class {
            constructor(t, e) {
              (this.dropdown = t),
                (this.placement = 'bottom'),
                (this.isOpen = !1),
                (this.nativeElement = e.nativeElement);
            }
          };
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(Object(s.S)(() => vr)), s.Mb(s.l));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'ngbDropdownMenu', '']],
              contentQueries: function (t, e, n) {
                var r;
                1 & t && s.Fb(n, gr, !1), 2 & t && s.qc((r = s.ec())) && (e.menuItems = r);
              },
              hostVars: 5,
              hostBindings: function (t, e) {
                1 & t &&
                  s.dc('keydown.ArrowUp', function (t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.ArrowDown', function (t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.Home', function (t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.End', function (t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.Enter', function (t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.Space', function (t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.Tab', function (t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.Shift.Tab', function (t) {
                    return e.dropdown.onKeyDown(t);
                  }),
                  2 & t && (s.Ab('x-placement', e.placement), s.Eb('dropdown-menu', !0)('show', e.dropdown.isOpen()));
              },
            })),
            t
          );
        })(),
        br = (() => {
          let t = class {
            constructor(t, e) {
              (this.dropdown = t), (this.nativeElement = e.nativeElement);
            }
          };
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(Object(s.S)(() => vr)), s.Mb(s.l));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'ngbDropdownAnchor', '']],
              hostAttrs: ['aria-haspopup', 'true', 1, 'dropdown-toggle'],
              hostVars: 1,
              hostBindings: function (t, e) {
                2 & t && s.Ab('aria-expanded', e.dropdown.isOpen());
              },
            })),
            t
          );
        })(),
        yr = (() => {
          let t = (fr = class extends br {
            constructor(t, e) {
              super(t, e);
            }
          });
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(Object(s.S)(() => vr)), s.Mb(s.l));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'ngbDropdownToggle', '']],
              hostAttrs: ['aria-haspopup', 'true', 1, 'dropdown-toggle'],
              hostVars: 1,
              hostBindings: function (t, e) {
                1 & t &&
                  s.dc('click', function () {
                    return e.dropdown.toggle();
                  })('keydown.ArrowUp', function (t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.ArrowDown', function (t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.Home', function (t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.End', function (t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.Tab', function (t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.Shift.Tab', function (t) {
                    return e.dropdown.onKeyDown(t);
                  }),
                  2 & t && s.Ab('aria-expanded', e.dropdown.isOpen());
              },
              features: [s.yb([{ provide: br, useExisting: Object(s.S)(() => fr) }]), s.wb],
            })),
            t
          );
        })(),
        vr = (() => {
          let t = class {
            constructor(t, e, n, r, i, o, a) {
              (this._changeDetector = t),
                (this._document = n),
                (this._ngZone = r),
                (this._elementRef = i),
                (this._renderer = o),
                (this._closed$ = new Re.a()),
                (this._bodyContainer = null),
                (this._open = !1),
                (this.openChange = new s.n()),
                (this.placement = e.placement),
                (this.container = e.container),
                (this.autoClose = e.autoClose),
                (this.display = a ? 'static' : 'dynamic'),
                (this._zoneSubscription = r.onStable.subscribe(() => {
                  this._positionMenu();
                }));
            }
            ngAfterContentInit() {
              this._ngZone.onStable.pipe(ke(1)).subscribe(() => {
                this._applyPlacementClasses(), this._open && this._setCloseHandlers();
              });
            }
            ngOnChanges(t) {
              t.container && this._open && this._applyContainer(this.container),
                t.placement && !t.placement.isFirstChange && this._applyPlacementClasses();
            }
            isOpen() {
              return this._open;
            }
            open() {
              this._open ||
                ((this._open = !0),
                this._applyContainer(this.container),
                this.openChange.emit(!0),
                this._setCloseHandlers(),
                this._anchor && this._anchor.nativeElement.focus());
            }
            _setCloseHandlers() {
              !(function (t, e, n, r, s, i, o, c) {
                var u;
                n &&
                  t.runOutsideAngular(
                    ((u = () => {
                      const u = Rn(e, 'keydown').pipe(
                          Pn(s),
                          Ft((t) => t.which === nr.Escape),
                          Vn((t) => t.preventDefault())
                        ),
                        h = Rn(e, 'mousedown').pipe(
                          Object(l.a)((t) => {
                            const e = t.target;
                            return (
                              2 !== t.button &&
                              !rr(e, o) &&
                              ('inside' === n
                                ? rr(e, i) && sr(e, c)
                                : 'outside' === n
                                ? !rr(e, i)
                                : sr(e, c) || !rr(e, i))
                            );
                          }),
                          Pn(s)
                        ),
                        d = Rn(e, 'mouseup').pipe(
                          Un(h),
                          Ft(([t, e]) => e),
                          (function (t, e = kn) {
                            var n;
                            const r = (n = t) instanceof Date && !isNaN(+n) ? +t - e.now() : Math.abs(t);
                            return (t) => t.lift(new qn(r, e));
                          })(0),
                          Pn(s)
                        );
                      (function (...t) {
                        if (1 === t.length) {
                          if (!Object(a.a)(t[0])) return t[0];
                          t = t[0];
                        }
                        return Object(Dt.a)(t, void 0).lift(new Dn());
                      })([u.pipe(Object(l.a)((t) => 0)), d.pipe(Object(l.a)((t) => 1))]).subscribe((e) =>
                        t.run(() => r(e))
                      );
                    }),
                    ir ? () => setTimeout(() => u(), 100) : u)
                  );
              })(
                this._ngZone,
                this._document,
                this.autoClose,
                (t) => {
                  this.close(), 0 === t && this._anchor.nativeElement.focus();
                },
                this._closed$,
                this._menu ? [this._menu.nativeElement] : [],
                this._anchor ? [this._anchor.nativeElement] : [],
                '.dropdown-item,.dropdown-divider'
              );
            }
            close() {
              this._open &&
                ((this._open = !1),
                this._resetContainer(),
                this._closed$.next(),
                this.openChange.emit(!1),
                this._changeDetector.markForCheck());
            }
            toggle() {
              this.isOpen() ? this.close() : this.open();
            }
            ngOnDestroy() {
              this._resetContainer(), this._closed$.next(), this._zoneSubscription.unsubscribe();
            }
            onKeyDown(t) {
              const e = t.which,
                n = this._getMenuElements();
              let r = -1,
                s = null;
              const i = this._isEventFromToggle(t);
              if (
                (!i &&
                  n.length &&
                  n.forEach((e, n) => {
                    e.contains(t.target) && (s = e), e === this._document.activeElement && (r = n);
                  }),
                e !== nr.Space && e !== nr.Enter)
              ) {
                if (e !== nr.Tab) {
                  if (i || s) {
                    if ((this.open(), n.length)) {
                      switch (e) {
                        case nr.ArrowDown:
                          r = Math.min(r + 1, n.length - 1);
                          break;
                        case nr.ArrowUp:
                          if (this._isDropup() && -1 === r) {
                            r = n.length - 1;
                            break;
                          }
                          r = Math.max(r - 1, 0);
                          break;
                        case nr.Home:
                          r = 0;
                          break;
                        case nr.End:
                          r = n.length - 1;
                      }
                      n[r].focus();
                    }
                    t.preventDefault();
                  }
                } else if (t.target && this.isOpen() && this.autoClose) {
                  if (this._anchor.nativeElement === t.target)
                    return void ('body' !== this.container || t.shiftKey
                      ? t.shiftKey && this.close()
                      : (this._renderer.setAttribute(this._menu.nativeElement, 'tabindex', '0'),
                        this._menu.nativeElement.focus(),
                        this._renderer.removeAttribute(this._menu.nativeElement, 'tabindex')));
                  if ('body' === this.container) {
                    const e = this._menu.nativeElement.querySelectorAll(or);
                    t.shiftKey && t.target === e[0]
                      ? (this._anchor.nativeElement.focus(), t.preventDefault())
                      : t.shiftKey ||
                        t.target !== e[e.length - 1] ||
                        (this._anchor.nativeElement.focus(), this.close());
                  } else
                    Rn(t.target, 'focusout')
                      .pipe(ke(1))
                      .subscribe(({ relatedTarget: t }) => {
                        this._elementRef.nativeElement.contains(t) || this.close();
                      });
                }
              } else
                !s ||
                  (!0 !== this.autoClose && 'inside' !== this.autoClose) ||
                  Rn(s, 'click')
                    .pipe(ke(1))
                    .subscribe(() => this.close());
            }
            _isDropup() {
              return this._elementRef.nativeElement.classList.contains('dropup');
            }
            _isEventFromToggle(t) {
              return this._anchor.nativeElement.contains(t.target);
            }
            _getMenuElements() {
              const t = this._menu;
              return null == t ? [] : t.menuItems.filter((t) => !t.disabled).map((t) => t.elementRef.nativeElement);
            }
            _positionMenu() {
              const t = this._menu;
              this.isOpen() &&
                t &&
                this._applyPlacementClasses(
                  'dynamic' === this.display
                    ? (function (t, e, n, r, s) {
                        let i = Array.isArray(n) ? n : n.split(cr);
                        const o = [
                            'top',
                            'bottom',
                            'left',
                            'right',
                            'top-left',
                            'top-right',
                            'bottom-left',
                            'bottom-right',
                            'left-top',
                            'left-bottom',
                            'right-top',
                            'right-bottom',
                          ],
                          a = (t) => {
                            const [e, n] = t.split('-'),
                              r = [];
                            return r;
                          };
                        let l = i.findIndex((t) => 'auto' === t);
                        l >= 0 &&
                          o.forEach(function (t) {
                            null == i.find((e) => -1 !== e.search('^' + t)) && i.splice(l++, 1, t);
                          });
                        const c = e.style;
                        (c.position = 'absolute'), (c.top = '0'), (c.left = '0'), (c['will-change'] = 'transform');
                        let u = null,
                          h = !1;
                        for (u of i) {
                          a(u);
                          if (ur.positionElements(t, e, u, r)) {
                            h = !0;
                            break;
                          }
                        }
                        return h || ((u = i[0]), a(u), ur.positionElements(t, e, u, r)), u;
                      })(
                        this._anchor.nativeElement,
                        this._bodyContainer || this._menu.nativeElement,
                        this.placement,
                        'body' === this.container
                      )
                    : this._getFirstPlacement(this.placement)
                );
            }
            _getFirstPlacement(t) {
              return Array.isArray(t) ? t[0] : t.split(' ')[0];
            }
            _resetContainer() {
              const t = this._renderer;
              if (this._menu) {
                const e = this._menu.nativeElement;
                t.appendChild(this._elementRef.nativeElement, e),
                  t.removeStyle(e, 'position'),
                  t.removeStyle(e, 'transform');
              }
              this._bodyContainer &&
                (t.removeChild(this._document.body, this._bodyContainer), (this._bodyContainer = null));
            }
            _applyContainer(t = null) {
              if ((this._resetContainer(), 'body' === t)) {
                const t = this._renderer,
                  e = this._menu.nativeElement,
                  n = (this._bodyContainer = this._bodyContainer || t.createElement('div'));
                t.setStyle(n, 'position', 'absolute'),
                  t.setStyle(e, 'position', 'static'),
                  t.setStyle(n, 'z-index', '1050'),
                  t.appendChild(n, e),
                  t.appendChild(this._document.body, n);
              }
            }
            _applyPlacementClasses(t) {
              const e = this._menu;
              if (e) {
                t || (t = this._getFirstPlacement(this.placement));
                const n = this._renderer,
                  r = this._elementRef.nativeElement;
                n.removeClass(r, 'dropup'),
                  n.removeClass(r, 'dropdown'),
                  (e.placement = 'static' === this.display ? null : t);
                const s = -1 !== t.search('^top') ? 'dropup' : 'dropdown';
                n.addClass(r, s);
                const i = this._bodyContainer;
                i && (n.removeClass(i, 'dropup'), n.removeClass(i, 'dropdown'), n.addClass(i, s));
              }
            }
          };
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(s.h), s.Mb(dr), s.Mb(i.c), s.Mb(s.z), s.Mb(s.l), s.Mb(s.D), s.Mb(pr, 8));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'ngbDropdown', '']],
              contentQueries: function (t, e, n) {
                var r;
                1 & t && (s.Fb(n, mr, !0), s.Fb(n, br, !0)),
                  2 & t && (s.qc((r = s.ec())) && (e._menu = r.first), s.qc((r = s.ec())) && (e._anchor = r.first));
              },
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t && s.Eb('show', e.isOpen());
              },
              inputs: {
                _open: ['open', '_open'],
                placement: 'placement',
                container: 'container',
                autoClose: 'autoClose',
                display: 'display',
              },
              outputs: { openChange: 'openChange' },
              exportAs: ['ngbDropdown'],
              features: [s.xb],
            })),
            t
          );
        })(),
        _r = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })(),
        wr = (() => {
          let t = class {
            constructor() {
              (this.backdrop = !0), (this.keyboard = !0);
            }
          };
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = Object(s.Ib)({
              factory: function () {
                return new t();
              },
              token: t,
              providedIn: 'root',
            })),
            t
          );
        })();
      class Cr {
        constructor(t, e, n) {
          (this.nodes = t), (this.viewRef = e), (this.componentRef = n);
        }
      }
      const Sr = () => {};
      let Er = (() => {
          let t = class {
            constructor(t) {
              this._document = t;
            }
            compensate() {
              const t = this._getWidth();
              return this._isPresent(t) ? this._adjustBody(t) : Sr;
            }
            _adjustBody(t) {
              const e = this._document.body,
                n = e.style.paddingRight,
                r = parseFloat(window.getComputedStyle(e)['padding-right']);
              return (e.style['padding-right'] = r + t + 'px'), () => (e.style['padding-right'] = n);
            }
            _isPresent(t) {
              const e = this._document.body.getBoundingClientRect();
              return window.innerWidth - (e.left + e.right) >= t - 0.1 * t;
            }
            _getWidth() {
              const t = this._document.createElement('div');
              t.className = 'modal-scrollbar-measure';
              const e = this._document.body;
              e.appendChild(t);
              const n = t.getBoundingClientRect().width - t.clientWidth;
              return e.removeChild(t), n;
            }
          };
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Zb(i.c));
            }),
            (t.ɵprov = Object(s.Ib)({
              factory: function () {
                return new t(Object(s.Zb)(i.c));
              },
              token: t,
              providedIn: 'root',
            })),
            t
          );
        })(),
        xr = (() => {
          let t = class {};
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['ngb-modal-backdrop']],
              hostAttrs: [2, 'z-index', '1050'],
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t && s.Bb('modal-backdrop fade show' + (e.backdropClass ? ' ' + e.backdropClass : ''));
              },
              inputs: { backdropClass: 'backdropClass' },
              decls: 0,
              vars: 0,
              template: function (t, e) {},
              encapsulation: 2,
            })),
            t
          );
        })();
      class Or {
        close(t) {}
        dismiss(t) {}
      }
      class Ar {
        constructor(t, e, n, r) {
          (this._windowCmptRef = t),
            (this._contentRef = e),
            (this._backdropCmptRef = n),
            (this._beforeDismiss = r),
            t.instance.dismissEvent.subscribe((t) => {
              this.dismiss(t);
            }),
            (this.result = new Promise((t, e) => {
              (this._resolve = t), (this._reject = e);
            })),
            this.result.then(null, () => {});
        }
        get componentInstance() {
          if (this._contentRef && this._contentRef.componentRef) return this._contentRef.componentRef.instance;
        }
        close(t) {
          this._windowCmptRef && (this._resolve(t), this._removeModalElements());
        }
        _dismiss(t) {
          this._reject(t), this._removeModalElements();
        }
        dismiss(t) {
          if (this._windowCmptRef)
            if (this._beforeDismiss) {
              const e = this._beforeDismiss();
              e && e.then
                ? e.then(
                    (e) => {
                      !1 !== e && this._dismiss(t);
                    },
                    () => {}
                  )
                : !1 !== e && this._dismiss(t);
            } else this._dismiss(t);
        }
        _removeModalElements() {
          const t = this._windowCmptRef.location.nativeElement;
          if ((t.parentNode.removeChild(t), this._windowCmptRef.destroy(), this._backdropCmptRef)) {
            const t = this._backdropCmptRef.location.nativeElement;
            t.parentNode.removeChild(t), this._backdropCmptRef.destroy();
          }
          this._contentRef && this._contentRef.viewRef && this._contentRef.viewRef.destroy(),
            (this._windowCmptRef = null),
            (this._backdropCmptRef = null),
            (this._contentRef = null);
        }
      }
      var kr = (function (t) {
        return (t[(t.BACKDROP_CLICK = 0)] = 'BACKDROP_CLICK'), (t[(t.ESC = 1)] = 'ESC'), t;
      })({});
      let Tr = (() => {
          let t = class {
            constructor(t, e, n) {
              (this._document = t),
                (this._elRef = e),
                (this._zone = n),
                (this._closed$ = new Re.a()),
                (this._elWithFocus = null),
                (this.backdrop = !0),
                (this.keyboard = !0),
                (this.dismissEvent = new s.n());
            }
            dismiss(t) {
              this.dismissEvent.emit(t);
            }
            ngOnInit() {
              this._elWithFocus = this._document.activeElement;
            }
            ngAfterViewInit() {
              const { nativeElement: t } = this._elRef;
              if (
                (this._zone.runOutsideAngular(() => {
                  Rn(t, 'keydown')
                    .pipe(
                      Pn(this._closed$),
                      Ft((t) => t.which === nr.Escape && this.keyboard)
                    )
                    .subscribe((t) =>
                      requestAnimationFrame(() => {
                        t.defaultPrevented || this._zone.run(() => this.dismiss(kr.ESC));
                      })
                    );
                  let e = !1;
                  Rn(this._dialogEl.nativeElement, 'mousedown')
                    .pipe(
                      Pn(this._closed$),
                      Vn(() => (e = !1)),
                      Je(() => Rn(t, 'mouseup').pipe(Pn(this._closed$), ke(1))),
                      Ft(({ target: e }) => t === e)
                    )
                    .subscribe(() => {
                      e = !0;
                    }),
                    Rn(t, 'click')
                      .pipe(Pn(this._closed$))
                      .subscribe(({ target: n }) => {
                        !0 !== this.backdrop || t !== n || e || this._zone.run(() => this.dismiss(kr.BACKDROP_CLICK)),
                          (e = !1);
                      });
                }),
                !t.contains(document.activeElement))
              ) {
                const e = t.querySelector('[ngbAutofocus]'),
                  n = ar(t)[0];
                (e || n || t).focus();
              }
            }
            ngOnDestroy() {
              const t = this._document.body,
                e = this._elWithFocus;
              let n;
              (n = e && e.focus && t.contains(e) ? e : t),
                this._zone.runOutsideAngular(() => {
                  setTimeout(() => n.focus()), (this._elWithFocus = null);
                }),
                this._closed$.next();
            }
          };
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(i.c), s.Mb(s.l), s.Mb(s.z));
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['ngb-modal-window']],
              viewQuery: function (t, e) {
                var n;
                1 & t && s.wc(Wn, !0), 2 & t && s.qc((n = s.ec())) && (e._dialogEl = n.first);
              },
              hostAttrs: ['role', 'dialog', 'tabindex', '-1'],
              hostVars: 5,
              hostBindings: function (t, e) {
                2 & t &&
                  (s.Ab('aria-modal', !0)('aria-labelledby', e.ariaLabelledBy)('aria-describedby', e.ariaDescribedBy),
                  s.Bb('modal fade show d-block' + (e.windowClass ? ' ' + e.windowClass : '')));
              },
              inputs: {
                backdrop: 'backdrop',
                keyboard: 'keyboard',
                ariaLabelledBy: 'ariaLabelledBy',
                ariaDescribedBy: 'ariaDescribedBy',
                centered: 'centered',
                scrollable: 'scrollable',
                size: 'size',
                windowClass: 'windowClass',
              },
              outputs: { dismissEvent: 'dismiss' },
              ngContentSelectors: Zn,
              decls: 8,
              vars: 2,
              consts: [
                ['role', 'document'],
                ['dialog', ''],
                [1, 'modal-content'],
              ],
              template: function (t, e) {
                1 & t &&
                  (s.jc(),
                  s.Ac(0, '\n    '),
                  s.Rb(1, 'div', 0, 1),
                  s.Ac(3, '\n        '),
                  s.Rb(4, 'div', 2),
                  s.ic(5),
                  s.Qb(),
                  s.Ac(6, '\n    '),
                  s.Qb(),
                  s.Ac(7, '\n    ')),
                  2 & t &&
                    (s.zb(1),
                    s.Bb(
                      'modal-dialog' +
                        (e.size ? ' modal-' + e.size : '') +
                        (e.centered ? ' modal-dialog-centered' : '') +
                        (e.scrollable ? ' modal-dialog-scrollable' : '')
                    ));
              },
              styles: [
                'ngb-modal-window .component-host-scrollable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}',
              ],
              encapsulation: 2,
            })),
            t
          );
        })(),
        Ir = (() => {
          let t = class {
            constructor(t, e, n, r, i, o) {
              (this._applicationRef = t),
                (this._injector = e),
                (this._document = n),
                (this._scrollBar = r),
                (this._rendererFactory = i),
                (this._ngZone = o),
                (this._activeWindowCmptHasChanged = new Re.a()),
                (this._ariaHiddenValues = new Map()),
                (this._backdropAttributes = ['backdropClass']),
                (this._modalRefs = []),
                (this._windowAttributes = [
                  'ariaLabelledBy',
                  'ariaDescribedBy',
                  'backdrop',
                  'centered',
                  'keyboard',
                  'scrollable',
                  'size',
                  'windowClass',
                ]),
                (this._windowCmpts = []),
                (this._activeInstances = new s.n()),
                this._activeWindowCmptHasChanged.subscribe(() => {
                  if (this._windowCmpts.length) {
                    const t = this._windowCmpts[this._windowCmpts.length - 1];
                    ((t, e, n, r = !1) => {
                      this._ngZone.runOutsideAngular(() => {
                        const t = Rn(e, 'focusin').pipe(
                          Pn(n),
                          Object(l.a)((t) => t.target)
                        );
                        Rn(e, 'keydown')
                          .pipe(
                            Pn(n),
                            Ft((t) => t.which === nr.Tab),
                            Un(t)
                          )
                          .subscribe(([t, n]) => {
                            const [r, s] = ar(e);
                            (n !== r && n !== e) || !t.shiftKey || (s.focus(), t.preventDefault()),
                              n !== s || t.shiftKey || (r.focus(), t.preventDefault());
                          }),
                          r &&
                            Rn(e, 'click')
                              .pipe(
                                Pn(n),
                                Un(t),
                                Object(l.a)((t) => t[1])
                              )
                              .subscribe((t) => t.focus());
                      });
                    })(0, t.location.nativeElement, this._activeWindowCmptHasChanged),
                      this._revertAriaHidden(),
                      this._setAriaHidden(t.location.nativeElement);
                  }
                });
            }
            open(t, e, n, r) {
              const s =
                  r.container instanceof HTMLElement
                    ? r.container
                    : Qn(r.container)
                    ? this._document.querySelector(r.container)
                    : this._document.body,
                i = this._rendererFactory.createRenderer(null, null),
                o = this._scrollBar.compensate(),
                a = () => {
                  this._modalRefs.length ||
                    (i.removeClass(this._document.body, 'modal-open'), this._revertAriaHidden());
                };
              if (!s)
                throw new Error(`The specified modal container "${r.container || 'body'}" was not found in the DOM.`);
              const l = new Or(),
                c = this._getContentRef(t, r.injector || e, n, l, r);
              let u = !1 !== r.backdrop ? this._attachBackdrop(t, s) : void 0,
                h = this._attachWindowComponent(t, s, c),
                d = new Ar(h, c, u, r.beforeDismiss);
              return (
                this._registerModalRef(d),
                this._registerWindowCmpt(h),
                d.result.then(o, o),
                d.result.then(a, a),
                (l.close = (t) => {
                  d.close(t);
                }),
                (l.dismiss = (t) => {
                  d.dismiss(t);
                }),
                this._applyWindowOptions(h.instance, r),
                1 === this._modalRefs.length && i.addClass(this._document.body, 'modal-open'),
                u && u.instance && this._applyBackdropOptions(u.instance, r),
                d
              );
            }
            get activeInstances() {
              return this._activeInstances;
            }
            dismissAll(t) {
              this._modalRefs.forEach((e) => e.dismiss(t));
            }
            hasOpenModals() {
              return this._modalRefs.length > 0;
            }
            _attachBackdrop(t, e) {
              let n = t.resolveComponentFactory(xr).create(this._injector);
              return this._applicationRef.attachView(n.hostView), e.appendChild(n.location.nativeElement), n;
            }
            _attachWindowComponent(t, e, n) {
              let r = t.resolveComponentFactory(Tr).create(this._injector, n.nodes);
              return this._applicationRef.attachView(r.hostView), e.appendChild(r.location.nativeElement), r;
            }
            _applyWindowOptions(t, e) {
              this._windowAttributes.forEach((n) => {
                Qn(e[n]) && (t[n] = e[n]);
              });
            }
            _applyBackdropOptions(t, e) {
              this._backdropAttributes.forEach((n) => {
                Qn(e[n]) && (t[n] = e[n]);
              });
            }
            _getContentRef(t, e, n, r, i) {
              return n
                ? n instanceof s.K
                  ? this._createFromTemplateRef(n, r)
                  : 'string' == typeof n
                  ? this._createFromString(n)
                  : this._createFromComponent(t, e, n, r, i)
                : new Cr([]);
            }
            _createFromTemplateRef(t, e) {
              const n = t.createEmbeddedView({
                $implicit: e,
                close(t) {
                  e.close(t);
                },
                dismiss(t) {
                  e.dismiss(t);
                },
              });
              return this._applicationRef.attachView(n), new Cr([n.rootNodes], n);
            }
            _createFromString(t) {
              const e = this._document.createTextNode('' + t);
              return new Cr([[e]]);
            }
            _createFromComponent(t, e, n, r, i) {
              const o = t.resolveComponentFactory(n),
                a = s.r.create({ providers: [{ provide: Or, useValue: r }], parent: e }),
                l = o.create(a),
                c = l.location.nativeElement;
              return (
                i.scrollable && c.classList.add('component-host-scrollable'),
                this._applicationRef.attachView(l.hostView),
                new Cr([[c]], l.hostView, l)
              );
            }
            _setAriaHidden(t) {
              const e = t.parentElement;
              e &&
                t !== this._document.body &&
                (Array.from(e.children).forEach((e) => {
                  e !== t &&
                    'SCRIPT' !== e.nodeName &&
                    (this._ariaHiddenValues.set(e, e.getAttribute('aria-hidden')),
                    e.setAttribute('aria-hidden', 'true'));
                }),
                this._setAriaHidden(e));
            }
            _revertAriaHidden() {
              this._ariaHiddenValues.forEach((t, e) => {
                t ? e.setAttribute('aria-hidden', t) : e.removeAttribute('aria-hidden');
              }),
                this._ariaHiddenValues.clear();
            }
            _registerModalRef(t) {
              const e = () => {
                const e = this._modalRefs.indexOf(t);
                e > -1 && (this._modalRefs.splice(e, 1), this._activeInstances.emit(this._modalRefs));
              };
              this._modalRefs.push(t), this._activeInstances.emit(this._modalRefs), t.result.then(e, e);
            }
            _registerWindowCmpt(t) {
              this._windowCmpts.push(t),
                this._activeWindowCmptHasChanged.next(),
                t.onDestroy(() => {
                  const e = this._windowCmpts.indexOf(t);
                  e > -1 && (this._windowCmpts.splice(e, 1), this._activeWindowCmptHasChanged.next());
                });
            }
          };
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Zb(s.g), s.Zb(s.r), s.Zb(i.c), s.Zb(Er), s.Zb(s.E), s.Zb(s.z));
            }),
            (t.ɵprov = Object(s.Ib)({
              factory: function () {
                return new t(
                  Object(s.Zb)(s.g),
                  Object(s.Zb)(s.o),
                  Object(s.Zb)(i.c),
                  Object(s.Zb)(Er),
                  Object(s.Zb)(s.E),
                  Object(s.Zb)(s.z)
                );
              },
              token: t,
              providedIn: 'root',
            })),
            t
          );
        })(),
        Rr = (() => {
          let t = class {
            constructor(t, e, n, r) {
              (this._moduleCFR = t), (this._injector = e), (this._modalStack = n), (this._config = r);
            }
            open(t, e = {}) {
              const n = Object.assign({}, this._config, e);
              return this._modalStack.open(this._moduleCFR, this._injector, t, n);
            }
            get activeInstances() {
              return this._modalStack.activeInstances;
            }
            dismissAll(t) {
              this._modalStack.dismissAll(t);
            }
            hasOpenModals() {
              return this._modalStack.hasOpenModals();
            }
          };
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Zb(s.j), s.Zb(s.r), s.Zb(Ir), s.Zb(wr));
            }),
            (t.ɵprov = Object(s.Ib)({
              factory: function () {
                return new t(Object(s.Zb)(s.j), Object(s.Zb)(s.o), Object(s.Zb)(Ir), Object(s.Zb)(wr));
              },
              token: t,
              providedIn: 'root',
            })),
            t
          );
        })(),
        jr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [Rr],
            })),
            t
          );
        })(),
        Dr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b]],
            })),
            t
          );
        })(),
        Nr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b]],
            })),
            t
          );
        })(),
        Pr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b]],
            })),
            t
          );
        })(),
        Mr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b]],
            })),
            t
          );
        })(),
        Lr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b]],
            })),
            t
          );
        })(),
        Vr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b]],
            })),
            t
          );
        })(),
        Fr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b]],
            })),
            t
          );
        })(),
        Hr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b]],
            })),
            t
          );
        })(),
        Ur = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })(),
        zr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b]],
            })),
            t
          );
        })();
      const $r = [Kn, Jn, Yn, Xn, er, hr, _r, jr, Dr, Nr, Pr, Mr, Lr, Fr, Hr, Ur, zr, Vr];
      let qr = (() => {
        let t = class {};
        return (
          (t.ɵmod = s.Kb({ type: t })),
          (t.ɵinj = s.Jb({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [$r, Kn, Jn, Yn, Xn, er, hr, _r, jr, Dr, Nr, Pr, Mr, Lr, Fr, Hr, Ur, zr, Vr],
          })),
          t
        );
      })();
      const Br = (() => {
        function t() {
          return Error.call(this), (this.message = 'no elements in sequence'), (this.name = 'EmptyError'), this;
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      function Gr(t) {
        return function (e) {
          return 0 === t ? xe() : e.lift(new Zr(t));
        };
      }
      class Zr {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new Ae();
        }
        call(t, e) {
          return e.subscribe(new Wr(t, this.total));
        }
      }
      class Wr extends Vt.a {
        constructor(t, e) {
          super(t), (this.total = e), (this.ring = new Array()), (this.count = 0);
        }
        _next(t) {
          const e = this.ring,
            n = this.total,
            r = this.count++;
          e.length < n ? e.push(t) : (e[r % n] = t);
        }
        _complete() {
          const t = this.destination;
          let e = this.count;
          if (e > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = e++ % n;
              t.next(r[s]);
            }
          }
          t.complete();
        }
      }
      function Qr(t = Yr) {
        return (e) => e.lift(new Kr(t));
      }
      class Kr {
        constructor(t) {
          this.errorFactory = t;
        }
        call(t, e) {
          return e.subscribe(new Jr(t, this.errorFactory));
        }
      }
      class Jr extends Vt.a {
        constructor(t, e) {
          super(t), (this.errorFactory = e), (this.hasValue = !1);
        }
        _next(t) {
          (this.hasValue = !0), this.destination.next(t);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let e;
            try {
              e = this.errorFactory();
            } catch (t) {
              e = t;
            }
            this.destination.error(e);
          }
        }
      }
      function Yr() {
        return new Br();
      }
      function Xr(t = null) {
        return (e) => e.lift(new ts(t));
      }
      class ts {
        constructor(t) {
          this.defaultValue = t;
        }
        call(t, e) {
          return e.subscribe(new es(t, this.defaultValue));
        }
      }
      class es extends Vt.a {
        constructor(t, e) {
          super(t), (this.defaultValue = e), (this.isEmpty = !0);
        }
        _next(t) {
          (this.isEmpty = !1), this.destination.next(t);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
        }
      }
      var ns = n('SpAZ');
      function rs(t, e) {
        const n = arguments.length >= 2;
        return (r) => r.pipe(t ? Ft((e, n) => t(e, n, r)) : ns.a, Gr(1), n ? Xr(e) : Qr(() => new Br()));
      }
      function ss(t) {
        return function (e) {
          const n = new is(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      class is {
        constructor(t) {
          this.selector = t;
        }
        call(t, e) {
          return e.subscribe(new os(t, this.selector, this.caught));
        }
      }
      class os extends We.a {
        constructor(t, e, n) {
          super(t), (this.selector = e), (this.caught = n);
        }
        error(t) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(t, this.caught);
            } catch (e) {
              return void super.error(e);
            }
            this._unsubscribeAndRecycle();
            const r = new Qe.a(this, void 0, void 0);
            this.add(r);
            const s = Object(Ke.a)(this, n, void 0, void 0, r);
            s !== r && this.add(s);
          }
        }
      }
      function as(t, e) {
        const n = arguments.length >= 2;
        return (r) => r.pipe(t ? Ft((e, n) => t(e, n, r)) : ns.a, ke(1), n ? Xr(e) : Qr(() => new Br()));
      }
      class ls {
        constructor(t, e, n) {
          (this.predicate = t), (this.thisArg = e), (this.source = n);
        }
        call(t, e) {
          return e.subscribe(new cs(t, this.predicate, this.thisArg, this.source));
        }
      }
      class cs extends Vt.a {
        constructor(t, e, n, r) {
          super(t),
            (this.predicate = e),
            (this.thisArg = n),
            (this.source = r),
            (this.index = 0),
            (this.thisArg = n || this);
        }
        notifyComplete(t) {
          this.destination.next(t), this.destination.complete();
        }
        _next(t) {
          let e = !1;
          try {
            e = this.predicate.call(this.thisArg, t, this.index++, this.source);
          } catch (n) {
            return void this.destination.error(n);
          }
          e || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      function us(t, e) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new hs(t, e, n));
          }
        );
      }
      class hs {
        constructor(t, e, n = !1) {
          (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
        }
        call(t, e) {
          return e.subscribe(new ds(t, this.accumulator, this.seed, this.hasSeed));
        }
      }
      class ds extends Vt.a {
        constructor(t, e, n, r) {
          super(t), (this.accumulator = e), (this._seed = n), (this.hasSeed = r), (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(t) {
          (this.hasSeed = !0), (this._seed = t);
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t);
          (this.seed = t), this.destination.next(t);
        }
        _tryNext(t) {
          const e = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, t, e);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      var fs = n('mCNh');
      function ps(t) {
        return (e) => e.lift(new gs(t));
      }
      class gs {
        constructor(t) {
          this.callback = t;
        }
        call(t, e) {
          return e.subscribe(new ms(t, this.callback));
        }
      }
      class ms extends Vt.a {
        constructor(t, e) {
          super(t), this.add(new je.a(e));
        }
      }
      class bs {
        constructor(t, e) {
          (this.id = t), (this.url = e);
        }
      }
      class ys extends bs {
        constructor(t, e, n = 'imperative', r = null) {
          super(t, e), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class vs extends bs {
        constructor(t, e, n) {
          super(t, e), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class _s extends bs {
        constructor(t, e, n) {
          super(t, e), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class ws extends bs {
        constructor(t, e, n) {
          super(t, e), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Cs extends bs {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Ss extends bs {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Es extends bs {
        constructor(t, e, n, r, s) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r), (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class xs extends bs {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Os extends bs {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class As {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class ks {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Ts {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Is {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Rs {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class js {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Ds {
        constructor(t, e, n) {
          (this.routerEvent = t), (this.position = e), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      let Ns = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = s.Gb({
            type: t,
            selectors: [['ng-component']],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && s.Nb(0, 'router-outlet');
            },
            directives: function () {
              return [Uo];
            },
            encapsulation: 2,
          })),
          t
        );
      })();
      class Ps {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return this.params.hasOwnProperty(t);
        }
        get(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e[0] : e;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e : [e];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Ms(t) {
        return new Ps(t);
      }
      function Ls(t) {
        const e = Error('NavigationCancelingError: ' + t);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function Vs(t, e, n) {
        const r = n.path.split('/');
        if (r.length > t.length) return null;
        if ('full' === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const e = r[i],
            n = t[i];
          if (e.startsWith(':')) s[e.substring(1)] = n;
          else if (e !== n.path) return null;
        }
        return { consumed: t.slice(0, r.length), posParams: s };
      }
      class Fs {
        constructor(t, e) {
          (this.routes = t), (this.module = e);
        }
      }
      function Hs(t, e = '') {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          Us(r, zs(e, r));
        }
      }
      function Us(t, e) {
        if (!t)
          throw new Error(
            `\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(t)) throw new Error(`Invalid configuration of route '${e}': Array cannot be specified`);
        if (!t.component && !t.children && !t.loadChildren && t.outlet && 'primary' !== t.outlet)
          throw new Error(
            `Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (t.redirectTo && t.children)
          throw new Error(`Invalid configuration of route '${e}': redirectTo and children cannot be used together`);
        if (t.redirectTo && t.loadChildren)
          throw new Error(`Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`);
        if (t.children && t.loadChildren)
          throw new Error(`Invalid configuration of route '${e}': children and loadChildren cannot be used together`);
        if (t.redirectTo && t.component)
          throw new Error(`Invalid configuration of route '${e}': redirectTo and component cannot be used together`);
        if (t.path && t.matcher)
          throw new Error(`Invalid configuration of route '${e}': path and matcher cannot be used together`);
        if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren)
          throw new Error(
            `Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === t.path && void 0 === t.matcher)
          throw new Error(
            `Invalid configuration of route '${e}': routes must have either a path or a matcher specified`
          );
        if ('string' == typeof t.path && '/' === t.path.charAt(0))
          throw new Error(`Invalid configuration of route '${e}': path cannot start with a slash`);
        if ('' === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (void 0 !== t.pathMatch && 'full' !== t.pathMatch && 'prefix' !== t.pathMatch)
          throw new Error(`Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`);
        t.children && Hs(t.children, e);
      }
      function zs(t, e) {
        return e ? (t || e.path ? (t && !e.path ? t + '/' : !t && e.path ? e.path : `${t}/${e.path}`) : '') : t;
      }
      function $s(t) {
        const e = t.children && t.children.map($s),
          n = e ? Object.assign(Object.assign({}, t), { children: e }) : Object.assign({}, t);
        return !n.component && (e || n.loadChildren) && n.outlet && 'primary' !== n.outlet && (n.component = Ns), n;
      }
      function qs(t, e) {
        const n = Object.keys(t),
          r = Object.keys(e);
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let i = 0; i < n.length; i++) if (((s = n[i]), !Bs(t[s], e[s]))) return !1;
        return !0;
      }
      function Bs(t, e) {
        return Array.isArray(t) && Array.isArray(e)
          ? t.length == e.length && t.every((t) => e.indexOf(t) > -1)
          : t === e;
      }
      function Gs(t) {
        return Array.prototype.concat.apply([], t);
      }
      function Zs(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function Ws(t, e) {
        for (const n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function Qs(t) {
        return Object(s.pb)(t) ? t : Object(s.qb)(t) ? Object(u.a)(Promise.resolve(t)) : Pt(t);
      }
      function Ks(t, e, n) {
        return n
          ? (function (t, e) {
              return qs(t, e);
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                if (!ti(e.segments, n.segments)) return !1;
                if (e.numberOfChildren !== n.numberOfChildren) return !1;
                for (const r in n.children) {
                  if (!e.children[r]) return !1;
                  if (!t(e.children[r], n.children[r])) return !1;
                }
                return !0;
              })(t.root, e.root)
          : (function (t, e) {
              return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every((n) => Bs(t[n], e[n]));
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                return (function e(n, r, s) {
                  if (n.segments.length > s.length) return !!ti(n.segments.slice(0, s.length), s) && !r.hasChildren();
                  if (n.segments.length === s.length) {
                    if (!ti(n.segments, s)) return !1;
                    for (const e in r.children) {
                      if (!n.children[e]) return !1;
                      if (!t(n.children[e], r.children[e])) return !1;
                    }
                    return !0;
                  }
                  {
                    const t = s.slice(0, n.segments.length),
                      i = s.slice(n.segments.length);
                    return !!ti(n.segments, t) && !!n.children.primary && e(n.children.primary, r, i);
                  }
                })(e, n, n.segments);
              })(t.root, e.root);
      }
      class Js {
        constructor(t, e, n) {
          (this.root = t), (this.queryParams = e), (this.fragment = n);
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = Ms(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return si.serialize(this);
        }
      }
      class Ys {
        constructor(t, e) {
          (this.segments = t), (this.children = e), (this.parent = null), Ws(e, (t, e) => (t.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return ii(this);
        }
      }
      class Xs {
        constructor(t, e) {
          (this.path = t), (this.parameters = e);
        }
        get parameterMap() {
          return this._parameterMap || (this._parameterMap = Ms(this.parameters)), this._parameterMap;
        }
        toString() {
          return hi(this);
        }
      }
      function ti(t, e) {
        return t.length === e.length && t.every((t, n) => t.path === e[n].path);
      }
      function ei(t, e) {
        let n = [];
        return (
          Ws(t.children, (t, r) => {
            'primary' === r && (n = n.concat(e(t, r)));
          }),
          Ws(t.children, (t, r) => {
            'primary' !== r && (n = n.concat(e(t, r)));
          }),
          n
        );
      }
      class ni {}
      class ri {
        parse(t) {
          const e = new mi(t);
          return new Js(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment());
        }
        serialize(t) {
          return `${
            '/' +
            (function t(e, n) {
              if (!e.hasChildren()) return ii(e);
              if (n) {
                const n = e.children.primary ? t(e.children.primary, !1) : '',
                  r = [];
                return (
                  Ws(e.children, (e, n) => {
                    'primary' !== n && r.push(`${n}:${t(e, !1)}`);
                  }),
                  r.length > 0 ? `${n}(${r.join('//')})` : n
                );
              }
              {
                const n = ei(e, (n, r) => ('primary' === r ? [t(e.children.primary, !1)] : [`${r}:${t(n, !1)}`]));
                return `${ii(e)}/(${n.join('//')})`;
              }
            })(t.root, !0)
          }${(function (t) {
            const e = Object.keys(t).map((e) => {
              const n = t[e];
              return Array.isArray(n) ? n.map((t) => `${ai(e)}=${ai(t)}`).join('&') : `${ai(e)}=${ai(n)}`;
            });
            return e.length ? '?' + e.join('&') : '';
          })(t.queryParams)}${'string' == typeof t.fragment ? '#' + encodeURI(t.fragment) : ''}`;
        }
      }
      const si = new ri();
      function ii(t) {
        return t.segments.map((t) => hi(t)).join('/');
      }
      function oi(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function ai(t) {
        return oi(t).replace(/%3B/gi, ';');
      }
      function li(t) {
        return oi(t).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
      }
      function ci(t) {
        return decodeURIComponent(t);
      }
      function ui(t) {
        return ci(t.replace(/\+/g, '%20'));
      }
      function hi(t) {
        return `${li(t.path)}${
          ((e = t.parameters),
          Object.keys(e)
            .map((t) => `;${li(t)}=${li(e[t])}`)
            .join(''))
        }`;
        var e;
      }
      const di = /^[^\/()?;=#]+/;
      function fi(t) {
        const e = t.match(di);
        return e ? e[0] : '';
      }
      const pi = /^[^=?&#]+/,
        gi = /^[^?&#]+/;
      class mi {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new Ys([], {})
              : new Ys([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional('&'));
          return t;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const t = [];
          for (
            this.peekStartsWith('(') || t.push(this.parseSegment());
            this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

          )
            this.capture('/'), t.push(this.parseSegment());
          let e = {};
          this.peekStartsWith('/(') && (this.capture('/'), (e = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith('(') && (n = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) && (n.primary = new Ys(t, e)),
            n
          );
        }
        parseSegment() {
          const t = fi(this.remaining);
          if ('' === t && this.peekStartsWith(';'))
            throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
          return this.capture(t), new Xs(ci(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(';'); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const e = fi(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = '';
          if (this.consumeOptional('=')) {
            const t = fi(this.remaining);
            t && ((n = t), this.capture(n));
          }
          t[ci(e)] = ci(n);
        }
        parseQueryParam(t) {
          const e = (function (t) {
            const e = t.match(pi);
            return e ? e[0] : '';
          })(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = '';
          if (this.consumeOptional('=')) {
            const t = (function (t) {
              const e = t.match(gi);
              return e ? e[0] : '';
            })(this.remaining);
            t && ((n = t), this.capture(n));
          }
          const r = ui(e),
            s = ui(n);
          if (t.hasOwnProperty(r)) {
            let e = t[r];
            Array.isArray(e) || ((e = [e]), (t[r] = e)), e.push(s);
          } else t[r] = s;
        }
        parseParens(t) {
          const e = {};
          for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
            const n = fi(this.remaining),
              r = this.remaining[n.length];
            if ('/' !== r && ')' !== r && ';' !== r) throw new Error(`Cannot parse url '${this.url}'`);
            let s = void 0;
            n.indexOf(':') > -1
              ? ((s = n.substr(0, n.indexOf(':'))), this.capture(s), this.capture(':'))
              : t && (s = 'primary');
            const i = this.parseChildren();
            (e[s] = 1 === Object.keys(i).length ? i.primary : new Ys([], i)), this.consumeOptional('//');
          }
          return e;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return !!this.peekStartsWith(t) && ((this.remaining = this.remaining.substring(t.length)), !0);
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class bi {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null;
        }
        children(t) {
          const e = yi(t, this._root);
          return e ? e.children.map((t) => t.value) : [];
        }
        firstChild(t) {
          const e = yi(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(t) {
          const e = vi(t, this._root);
          return e.length < 2 ? [] : e[e.length - 2].children.map((t) => t.value).filter((e) => e !== t);
        }
        pathFromRoot(t) {
          return vi(t, this._root).map((t) => t.value);
        }
      }
      function yi(t, e) {
        if (t === e.value) return e;
        for (const n of e.children) {
          const e = yi(t, n);
          if (e) return e;
        }
        return null;
      }
      function vi(t, e) {
        if (t === e.value) return [e];
        for (const n of e.children) {
          const r = vi(t, n);
          if (r.length) return r.unshift(e), r;
        }
        return [];
      }
      class _i {
        constructor(t, e) {
          (this.value = t), (this.children = e);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function wi(t) {
        const e = {};
        return t && t.children.forEach((t) => (e[t.value.outlet] = t)), e;
      }
      class Ci extends bi {
        constructor(t, e) {
          super(t), (this.snapshot = e), ki(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function Si(t, e) {
        const n = (function (t, e) {
            const n = new Oi([], {}, {}, '', {}, 'primary', e, null, t.root, -1, {});
            return new Ai('', new _i(n, []));
          })(t, e),
          r = new En([new Xs('', {})]),
          s = new En({}),
          i = new En({}),
          o = new En({}),
          a = new En(''),
          l = new Ei(r, s, o, a, i, 'primary', e, n.root);
        return (l.snapshot = n.root), new Ci(new _i(l, []), n);
      }
      class Ei {
        constructor(t, e, n, r, s, i, o, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = this.params.pipe(Object(l.a)((t) => Ms(t)))), this._paramMap;
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(Object(l.a)((t) => Ms(t)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
        }
      }
      function xi(t, e = 'emptyOnly') {
        const n = t.pathFromRoot;
        let r = 0;
        if ('always' !== e)
          for (r = n.length - 1; r >= 1; ) {
            const t = n[r],
              e = n[r - 1];
            if (t.routeConfig && '' === t.routeConfig.path) r--;
            else {
              if (e.component) break;
              r--;
            }
          }
        return (function (t) {
          return t.reduce(
            (t, e) => ({
              params: Object.assign(Object.assign({}, t.params), e.params),
              data: Object.assign(Object.assign({}, t.data), e.data),
              resolve: Object.assign(Object.assign({}, t.resolve), e._resolvedData),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class Oi {
        constructor(t, e, n, r, s, i, o, a, l, c, u) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = l),
            (this._lastPathIndex = c),
            (this._resolve = u);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = Ms(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = Ms(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return `Route(url:'${this.url.map((t) => t.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class Ai extends bi {
        constructor(t, e) {
          super(e), (this.url = t), ki(this, e);
        }
        toString() {
          return Ti(this._root);
        }
      }
      function ki(t, e) {
        (e.value._routerState = t), e.children.forEach((e) => ki(t, e));
      }
      function Ti(t) {
        const e = t.children.length > 0 ? ` { ${t.children.map(Ti).join(', ')} } ` : '';
        return `${t.value}${e}`;
      }
      function Ii(t) {
        if (t.snapshot) {
          const e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            qs(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            qs(e.params, n.params) || t.params.next(n.params),
            (function (t, e) {
              if (t.length !== e.length) return !1;
              for (let n = 0; n < t.length; ++n) if (!qs(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            qs(e.data, n.data) || t.data.next(n.data);
        } else (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function Ri(t, e) {
        var n, r;
        return (
          qs(t.params, e.params) &&
          ti((n = t.url), (r = e.url)) &&
          n.every((t, e) => qs(t.parameters, r[e].parameters)) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || Ri(t.parent, e.parent))
        );
      }
      function ji(t) {
        return 'object' == typeof t && null != t && !t.outlets && !t.segmentPath;
      }
      function Di(t, e, n, r, s) {
        let i = {};
        return (
          r &&
            Ws(r, (t, e) => {
              i[e] = Array.isArray(t) ? t.map((t) => '' + t) : '' + t;
            }),
          new Js(
            n.root === t
              ? e
              : (function t(e, n, r) {
                  const s = {};
                  return (
                    Ws(e.children, (e, i) => {
                      s[i] = e === n ? r : t(e, n, r);
                    }),
                    new Ys(e.segments, s)
                  );
                })(n.root, t, e),
            i,
            s
          )
        );
      }
      class Ni {
        constructor(t, e, n) {
          if (
            ((this.isAbsolute = t), (this.numberOfDoubleDots = e), (this.commands = n), t && n.length > 0 && ji(n[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const r = n.find((t) => 'object' == typeof t && null != t && t.outlets);
          if (r && r !== Zs(n)) throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class Pi {
        constructor(t, e, n) {
          (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
        }
      }
      function Mi(t) {
        return 'object' == typeof t && null != t && t.outlets ? t.outlets.primary : '' + t;
      }
      function Li(t, e, n) {
        if ((t || (t = new Ys([], {})), 0 === t.segments.length && t.hasChildren())) return Vi(t, e, n);
        const r = (function (t, e, n) {
            let r = 0,
              s = e;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < t.segments.length; ) {
              if (r >= n.length) return i;
              const e = t.segments[s],
                o = Mi(n[r]),
                a = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === o) break;
              if (o && a && 'object' == typeof a && void 0 === a.outlets) {
                if (!zi(o, a, e)) return i;
                r += 2;
              } else {
                if (!zi(o, {}, e)) return i;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(t, e, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          const e = new Ys(t.segments.slice(0, r.pathIndex), {});
          return (e.children.primary = new Ys(t.segments.slice(r.pathIndex), t.children)), Vi(e, 0, s);
        }
        return r.match && 0 === s.length
          ? new Ys(t.segments, {})
          : r.match && !t.hasChildren()
          ? Fi(t, e, n)
          : r.match
          ? Vi(t, 0, s)
          : Fi(t, e, n);
      }
      function Vi(t, e, n) {
        if (0 === n.length) return new Ys(t.segments, {});
        {
          const r = (function (t) {
              return 'object' != typeof t[0] || void 0 === t[0].outlets ? { primary: t } : t[0].outlets;
            })(n),
            s = {};
          return (
            Ws(r, (n, r) => {
              null !== n && (s[r] = Li(t.children[r], e, n));
            }),
            Ws(t.children, (t, e) => {
              void 0 === r[e] && (s[e] = t);
            }),
            new Ys(t.segments, s)
          );
        }
      }
      function Fi(t, e, n) {
        const r = t.segments.slice(0, e);
        let s = 0;
        for (; s < n.length; ) {
          if ('object' == typeof n[s] && void 0 !== n[s].outlets) {
            const t = Hi(n[s].outlets);
            return new Ys(r, t);
          }
          if (0 === s && ji(n[0])) {
            r.push(new Xs(t.segments[e].path, n[0])), s++;
            continue;
          }
          const i = Mi(n[s]),
            o = s < n.length - 1 ? n[s + 1] : null;
          i && o && ji(o) ? (r.push(new Xs(i, Ui(o))), (s += 2)) : (r.push(new Xs(i, {})), s++);
        }
        return new Ys(r, {});
      }
      function Hi(t) {
        const e = {};
        return (
          Ws(t, (t, n) => {
            null !== t && (e[n] = Fi(new Ys([], {}), 0, t));
          }),
          e
        );
      }
      function Ui(t) {
        const e = {};
        return Ws(t, (t, n) => (e[n] = '' + t)), e;
      }
      function zi(t, e, n) {
        return t == n.path && qs(e, n.parameters);
      }
      class $i {
        constructor(t, e, n, r) {
          (this.routeReuseStrategy = t), (this.futureState = e), (this.currState = n), (this.forwardEvent = r);
        }
        activate(t) {
          const e = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t), Ii(this.futureState.root), this.activateChildRoutes(e, n, t);
        }
        deactivateChildRoutes(t, e, n) {
          const r = wi(e);
          t.children.forEach((t) => {
            const e = t.value.outlet;
            this.deactivateRoutes(t, r[e], n), delete r[e];
          }),
            Ws(r, (t, e) => {
              this.deactivateRouteAndItsChildren(t, n);
            });
        }
        deactivateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(t, e, s.children);
            } else this.deactivateChildRoutes(t, e, n);
          else s && this.deactivateRouteAndItsChildren(e, n);
        }
        deactivateRouteAndItsChildren(t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, e)
            : this.deactivateRouteAndOutlet(t, e);
        }
        detachAndStoreRouteSubtree(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            const e = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, { componentRef: e, route: t, contexts: r });
          }
        }
        deactivateRouteAndOutlet(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n) {
            const r = wi(t),
              s = t.value.component ? n.children : e;
            Ws(r, (t, e) => this.deactivateRouteAndItsChildren(t, s)),
              n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(t, e, n) {
          const r = wi(e);
          t.children.forEach((t) => {
            this.activateRoutes(t, r[t.value.outlet], n), this.forwardEvent(new js(t.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new Is(t.value.snapshot));
        }
        activateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if ((Ii(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(t, e, s.children);
            } else this.activateChildRoutes(t, e, n);
          else if (r.component) {
            const e = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                e.children.onOutletReAttached(t.contexts),
                (e.attachRef = t.componentRef),
                (e.route = t.route.value),
                e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                qi(t.route);
            } else {
              const n = (function (t) {
                  for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig;
                    if (t && t.component) return null;
                  }
                  return null;
                })(r.snapshot),
                s = n ? n.module.componentFactoryResolver : null;
              (e.attachRef = null),
                (e.route = r),
                (e.resolver = s),
                e.outlet && e.outlet.activateWith(r, s),
                this.activateChildRoutes(t, null, e.children);
            }
          } else this.activateChildRoutes(t, null, n);
        }
      }
      function qi(t) {
        Ii(t.value), t.children.forEach(qi);
      }
      function Bi(t) {
        return 'function' == typeof t;
      }
      function Gi(t) {
        return t instanceof Js;
      }
      class Zi {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class Wi {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function Qi(t) {
        return new o.a((e) => e.error(new Zi(t)));
      }
      function Ki(t) {
        return new o.a((e) => e.error(new Wi(t)));
      }
      function Ji(t) {
        return new o.a((e) => e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)));
      }
      class Yi {
        constructor(t, e, n, r, i) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = i),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(s.x));
        }
        apply() {
          return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, 'primary')
            .pipe(Object(l.a)((t) => this.createUrlTree(t, this.urlTree.queryParams, this.urlTree.fragment)))
            .pipe(
              ss((t) => {
                if (t instanceof Wi) return (this.allowRedirects = !1), this.match(t.urlTree);
                if (t instanceof Zi) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        match(t) {
          return this.expandSegmentGroup(this.ngModule, this.config, t.root, 'primary')
            .pipe(Object(l.a)((e) => this.createUrlTree(e, t.queryParams, t.fragment)))
            .pipe(
              ss((t) => {
                if (t instanceof Zi) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        noMatchError(t) {
          return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`);
        }
        createUrlTree(t, e, n) {
          const r = t.segments.length > 0 ? new Ys([], { primary: t }) : t;
          return new Js(r, e, n);
        }
        expandSegmentGroup(t, e, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(t, e, n).pipe(Object(l.a)((t) => new Ys([], t)))
            : this.expandSegment(t, n, e, n.segments, r, !0);
        }
        expandChildren(t, e, n) {
          return (function (t, e) {
            if (0 === Object.keys(t).length) return Pt({});
            const n = [],
              r = [],
              s = {};
            return (
              Ws(t, (t, i) => {
                const o = e(i, t).pipe(Object(l.a)((t) => (s[i] = t)));
                'primary' === i ? n.push(o) : r.push(o);
              }),
              Pt.apply(null, n.concat(r)).pipe(
                Ce(),
                rs(),
                Object(l.a)(() => s)
              )
            );
          })(n.children, (n, r) => this.expandSegmentGroup(t, e, r, n));
        }
        expandSegment(t, e, n, r, s, i) {
          return Pt(...n).pipe(
            Object(l.a)((o) =>
              this.expandSegmentAgainstRoute(t, e, n, o, r, s, i).pipe(
                ss((t) => {
                  if (t instanceof Zi) return Pt(null);
                  throw t;
                })
              )
            ),
            Ce(),
            as((t) => !!t),
            ss((t, n) => {
              if (t instanceof Br || 'EmptyError' === t.name) {
                if (this.noLeftoversInUrl(e, r, s)) return Pt(new Ys([], {}));
                throw new Zi(e);
              }
              throw t;
            })
          );
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        expandSegmentAgainstRoute(t, e, n, r, s, i, o) {
          return no(r) !== i
            ? Qi(e)
            : void 0 === r.redirectTo
            ? this.matchSegmentAgainstRoute(t, e, r, s)
            : o && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i)
            : Qi(e);
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          return '**' === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i);
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith('/')
            ? Ki(s)
            : this.lineralizeSegments(n, s).pipe(
                Object(Mt.a)((n) => {
                  const s = new Ys(n, {});
                  return this.expandSegment(t, s, e, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          const { matched: o, consumedSegments: a, lastChild: l, positionalParamSegments: c } = Xi(e, r, s);
          if (!o) return Qi(e);
          const u = this.applyRedirectCommands(a, r.redirectTo, c);
          return r.redirectTo.startsWith('/')
            ? Ki(u)
            : this.lineralizeSegments(r, u).pipe(
                Object(Mt.a)((r) => this.expandSegment(t, e, n, r.concat(s.slice(l)), i, !1))
              );
        }
        matchSegmentAgainstRoute(t, e, n, r) {
          if ('**' === n.path)
            return n.loadChildren
              ? this.configLoader.load(t.injector, n).pipe(Object(l.a)((t) => ((n._loadedConfig = t), new Ys(r, {}))))
              : Pt(new Ys(r, {}));
          const { matched: s, consumedSegments: i, lastChild: o } = Xi(e, n, r);
          if (!s) return Qi(e);
          const a = r.slice(o);
          return this.getChildConfig(t, n, r).pipe(
            Object(Mt.a)((t) => {
              const n = t.module,
                r = t.routes,
                { segmentGroup: s, slicedSegments: o } = (function (t, e, n, r) {
                  return n.length > 0 &&
                    (function (t, e, n) {
                      return n.some((n) => eo(t, e, n) && 'primary' !== no(n));
                    })(t, n, r)
                    ? {
                        segmentGroup: to(
                          new Ys(
                            e,
                            (function (t, e) {
                              const n = {};
                              n.primary = e;
                              for (const r of t) '' === r.path && 'primary' !== no(r) && (n[no(r)] = new Ys([], {}));
                              return n;
                            })(r, new Ys(n, t.children))
                          )
                        ),
                        slicedSegments: [],
                      }
                    : 0 === n.length &&
                      (function (t, e, n) {
                        return n.some((n) => eo(t, e, n));
                      })(t, n, r)
                    ? {
                        segmentGroup: to(
                          new Ys(
                            t.segments,
                            (function (t, e, n, r) {
                              const s = {};
                              for (const i of n) eo(t, e, i) && !r[no(i)] && (s[no(i)] = new Ys([], {}));
                              return Object.assign(Object.assign({}, r), s);
                            })(t, n, r, t.children)
                          )
                        ),
                        slicedSegments: n,
                      }
                    : { segmentGroup: t, slicedSegments: n };
                })(e, i, a, r);
              return 0 === o.length && s.hasChildren()
                ? this.expandChildren(n, r, s).pipe(Object(l.a)((t) => new Ys(i, t)))
                : 0 === r.length && 0 === o.length
                ? Pt(new Ys(i, {}))
                : this.expandSegment(n, s, r, o, 'primary', !0).pipe(
                    Object(l.a)((t) => new Ys(i.concat(t.segments), t.children))
                  );
            })
          );
        }
        getChildConfig(t, e, n) {
          return e.children
            ? Pt(new Fs(e.children, t))
            : e.loadChildren
            ? void 0 !== e._loadedConfig
              ? Pt(e._loadedConfig)
              : (function (t, e, n) {
                  const r = e.canLoad;
                  return r && 0 !== r.length
                    ? Object(u.a)(r)
                        .pipe(
                          Object(l.a)((r) => {
                            const s = t.get(r);
                            let i;
                            if (
                              (function (t) {
                                return t && Bi(t.canLoad);
                              })(s)
                            )
                              i = s.canLoad(e, n);
                            else {
                              if (!Bi(s)) throw new Error('Invalid CanLoad guard');
                              i = s(e, n);
                            }
                            return Qs(i);
                          })
                        )
                        .pipe(Ce(), ((s = (t) => !0 === t), (t) => t.lift(new ls(s, void 0, t))))
                    : Pt(!0);
                  var s;
                })(t.injector, e, n).pipe(
                  Object(Mt.a)((n) =>
                    n
                      ? this.configLoader.load(t.injector, e).pipe(Object(l.a)((t) => ((e._loadedConfig = t), t)))
                      : (function (t) {
                          return new o.a((e) =>
                            e.error(
                              Ls(
                                `Cannot load children because the guard of the route "path: '${t.path}'" returned false`
                              )
                            )
                          );
                        })(e)
                  )
                )
            : Pt(new Fs([], t));
        }
        lineralizeSegments(t, e) {
          let n = [],
            r = e.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren)) return Pt(n);
            if (r.numberOfChildren > 1 || !r.children.primary) return Ji(t.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(t, e, n) {
          return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n);
        }
        applyRedirectCreatreUrlTree(t, e, n, r) {
          const s = this.createSegmentGroup(t, e.root, n, r);
          return new Js(s, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment);
        }
        createQueryParams(t, e) {
          const n = {};
          return (
            Ws(t, (t, r) => {
              if ('string' == typeof t && t.startsWith(':')) {
                const s = t.substring(1);
                n[r] = e[s];
              } else n[r] = t;
            }),
            n
          );
        }
        createSegmentGroup(t, e, n, r) {
          const s = this.createSegments(t, e.segments, n, r);
          let i = {};
          return (
            Ws(e.children, (e, s) => {
              i[s] = this.createSegmentGroup(t, e, n, r);
            }),
            new Ys(s, i)
          );
        }
        createSegments(t, e, n, r) {
          return e.map((e) => (e.path.startsWith(':') ? this.findPosParam(t, e, r) : this.findOrReturn(e, n)));
        }
        findPosParam(t, e, n) {
          const r = n[e.path.substring(1)];
          if (!r) throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);
          return r;
        }
        findOrReturn(t, e) {
          let n = 0;
          for (const r of e) {
            if (r.path === t.path) return e.splice(n), r;
            n++;
          }
          return t;
        }
      }
      function Xi(t, e, n) {
        if ('' === e.path)
          return 'full' === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
            : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        const r = (e.matcher || Vs)(n, t, e);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams,
            }
          : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
      }
      function to(t) {
        if (1 === t.numberOfChildren && t.children.primary) {
          const e = t.children.primary;
          return new Ys(t.segments.concat(e.segments), e.children);
        }
        return t;
      }
      function eo(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 !== n.redirectTo
        );
      }
      function no(t) {
        return t.outlet || 'primary';
      }
      class ro {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class so {
        constructor(t, e) {
          (this.component = t), (this.route = e);
        }
      }
      function io(t, e, n) {
        const r = t._root;
        return (function t(e, n, r, s, i = { canDeactivateChecks: [], canActivateChecks: [] }) {
          const o = wi(n);
          return (
            e.children.forEach((e) => {
              !(function (e, n, r, s, i = { canDeactivateChecks: [], canActivateChecks: [] }) {
                const o = e.value,
                  a = n ? n.value : null,
                  l = r ? r.getContext(e.value.outlet) : null;
                if (a && o.routeConfig === a.routeConfig) {
                  const c = (function (t, e, n) {
                    if ('function' == typeof n) return n(t, e);
                    switch (n) {
                      case 'pathParamsChange':
                        return !ti(t.url, e.url);
                      case 'pathParamsOrQueryParamsChange':
                        return !ti(t.url, e.url) || !qs(t.queryParams, e.queryParams);
                      case 'always':
                        return !0;
                      case 'paramsOrQueryParamsChange':
                        return !Ri(t, e) || !qs(t.queryParams, e.queryParams);
                      case 'paramsChange':
                      default:
                        return !Ri(t, e);
                    }
                  })(a, o, o.routeConfig.runGuardsAndResolvers);
                  c ? i.canActivateChecks.push(new ro(s)) : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
                    t(e, n, o.component ? (l ? l.children : null) : r, s, i),
                    c && i.canDeactivateChecks.push(new so((l && l.outlet && l.outlet.component) || null, a));
                } else
                  a && ao(n, l, i),
                    i.canActivateChecks.push(new ro(s)),
                    t(e, null, o.component ? (l ? l.children : null) : r, s, i);
              })(e, o[e.value.outlet], r, s.concat([e.value]), i),
                delete o[e.value.outlet];
            }),
            Ws(o, (t, e) => ao(t, r.getContext(e), i)),
            i
          );
        })(r, e ? e._root : null, n, [r.value]);
      }
      function oo(t, e, n) {
        const r = (function (t) {
          if (!t) return null;
          for (let e = t.parent; e; e = e.parent) {
            const t = e.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function ao(t, e, n) {
        const r = wi(t),
          s = t.value;
        Ws(r, (t, r) => {
          ao(t, s.component ? (e ? e.children.getContext(r) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new so(s.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, s)
          );
      }
      const lo = Symbol('INITIAL_VALUE');
      function co() {
        return Je((t) =>
          (function (...t) {
            let e = null,
              n = null;
            return (
              Object(jt.a)(t[t.length - 1]) && (n = t.pop()),
              'function' == typeof t[t.length - 1] && (e = t.pop()),
              1 === t.length && Object(a.a)(t[0]) && (t = t[0]),
              Object(Dt.a)(t, n).lift(new On(e))
            );
          })(
            ...t.map((t) =>
              t.pipe(
                ke(1),
                (function (...t) {
                  const e = t[t.length - 1];
                  return Object(jt.a)(e) ? (t.pop(), (n) => Se(t, n, e)) : (e) => Se(t, e);
                })(lo)
              )
            )
          ).pipe(
            us((t, e) => {
              let n = !1;
              return e.reduce((t, r, s) => {
                if (t !== lo) return t;
                if ((r === lo && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === e.length - 1 || Gi(r)) return r;
                }
                return t;
              }, t);
            }, lo),
            Ft((t) => t !== lo),
            Object(l.a)((t) => (Gi(t) ? t : !0 === t)),
            ke(1)
          )
        );
      }
      function uo(t, e) {
        return null !== t && e && e(new Rs(t)), Pt(!0);
      }
      function ho(t, e) {
        return null !== t && e && e(new Ts(t)), Pt(!0);
      }
      function fo(t, e, n) {
        const r = e.routeConfig ? e.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? Pt(
              r.map((r) =>
                Oe(() => {
                  const s = oo(r, e, n);
                  let i;
                  if (
                    (function (t) {
                      return t && Bi(t.canActivate);
                    })(s)
                  )
                    i = Qs(s.canActivate(e, t));
                  else {
                    if (!Bi(s)) throw new Error('Invalid CanActivate guard');
                    i = Qs(s(e, t));
                  }
                  return i.pipe(as());
                })
              )
            ).pipe(co())
          : Pt(!0);
      }
      function po(t, e, n) {
        const r = e[e.length - 1],
          s = e
            .slice(0, e.length - 1)
            .reverse()
            .map((t) =>
              (function (t) {
                const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                return e && 0 !== e.length ? { node: t, guards: e } : null;
              })(t)
            )
            .filter((t) => null !== t)
            .map((e) =>
              Oe(() =>
                Pt(
                  e.guards.map((s) => {
                    const i = oo(s, e.node, n);
                    let o;
                    if (
                      (function (t) {
                        return t && Bi(t.canActivateChild);
                      })(i)
                    )
                      o = Qs(i.canActivateChild(r, t));
                    else {
                      if (!Bi(i)) throw new Error('Invalid CanActivateChild guard');
                      o = Qs(i(r, t));
                    }
                    return o.pipe(as());
                  })
                ).pipe(co())
              )
            );
        return Pt(s).pipe(co());
      }
      class go {}
      class mo {
        constructor(t, e, n, r, s, i) {
          (this.rootComponentType = t),
            (this.config = e),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          try {
            const t = vo(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
              e = this.processSegmentGroup(this.config, t, 'primary'),
              n = new Oi(
                [],
                Object.freeze({}),
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                'primary',
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              r = new _i(n, e),
              s = new Ai(this.url, r);
            return this.inheritParamsAndData(s._root), Pt(s);
          } catch (t) {
            return new o.a((e) => e.error(t));
          }
        }
        inheritParamsAndData(t) {
          const e = t.value,
            n = xi(e, this.paramsInheritanceStrategy);
          (e.params = Object.freeze(n.params)),
            (e.data = Object.freeze(n.data)),
            t.children.forEach((t) => this.inheritParamsAndData(t));
        }
        processSegmentGroup(t, e, n) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(t, e)
            : this.processSegment(t, e, e.segments, n);
        }
        processChildren(t, e) {
          const n = ei(e, (e, n) => this.processSegmentGroup(t, e, n));
          return (
            (function (t) {
              const e = {};
              t.forEach((t) => {
                const n = e[t.value.outlet];
                if (n) {
                  const e = n.url.map((t) => t.toString()).join('/'),
                    r = t.value.url.map((t) => t.toString()).join('/');
                  throw new Error(`Two segments cannot have the same outlet name: '${e}' and '${r}'.`);
                }
                e[t.value.outlet] = t.value;
              });
            })(n),
            n.sort((t, e) =>
              'primary' === t.value.outlet
                ? -1
                : 'primary' === e.value.outlet
                ? 1
                : t.value.outlet.localeCompare(e.value.outlet)
            ),
            n
          );
        }
        processSegment(t, e, n, r) {
          for (const i of t)
            try {
              return this.processSegmentAgainstRoute(i, e, n, r);
            } catch (s) {
              if (!(s instanceof go)) throw s;
            }
          if (this.noLeftoversInUrl(e, n, r)) return [];
          throw new go();
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        processSegmentAgainstRoute(t, e, n, r) {
          if (t.redirectTo) throw new go();
          if ((t.outlet || 'primary') !== r) throw new go();
          let s,
            i = [],
            o = [];
          if ('**' === t.path) {
            const i = n.length > 0 ? Zs(n).parameters : {};
            s = new Oi(
              n,
              i,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Co(t),
              r,
              t.component,
              t,
              bo(e),
              yo(e) + n.length,
              So(t)
            );
          } else {
            const a = (function (t, e, n) {
              if ('' === e.path) {
                if ('full' === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new go();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const r = (e.matcher || Vs)(n, t, e);
              if (!r) throw new go();
              const s = {};
              Ws(r.posParams, (t, e) => {
                s[e] = t.path;
              });
              const i =
                r.consumed.length > 0
                  ? Object.assign(Object.assign({}, s), r.consumed[r.consumed.length - 1].parameters)
                  : s;
              return { consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: i };
            })(e, t, n);
            (i = a.consumedSegments),
              (o = n.slice(a.lastChild)),
              (s = new Oi(
                i,
                a.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                Co(t),
                r,
                t.component,
                t,
                bo(e),
                yo(e) + i.length,
                So(t)
              ));
          }
          const a = (function (t) {
              return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : [];
            })(t),
            { segmentGroup: l, slicedSegments: c } = vo(e, i, o, a, this.relativeLinkResolution);
          if (0 === c.length && l.hasChildren()) {
            const t = this.processChildren(a, l);
            return [new _i(s, t)];
          }
          if (0 === a.length && 0 === c.length) return [new _i(s, [])];
          const u = this.processSegment(a, l, c, 'primary');
          return [new _i(s, u)];
        }
      }
      function bo(t) {
        let e = t;
        for (; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function yo(t) {
        let e = t,
          n = e._segmentIndexShift ? e._segmentIndexShift : 0;
        for (; e._sourceSegment; ) (e = e._sourceSegment), (n += e._segmentIndexShift ? e._segmentIndexShift : 0);
        return n - 1;
      }
      function vo(t, e, n, r, s) {
        if (
          n.length > 0 &&
          (function (t, e, n) {
            return n.some((n) => _o(t, e, n) && 'primary' !== wo(n));
          })(t, n, r)
        ) {
          const s = new Ys(
            e,
            (function (t, e, n, r) {
              const s = {};
              (s.primary = r), (r._sourceSegment = t), (r._segmentIndexShift = e.length);
              for (const i of n)
                if ('' === i.path && 'primary' !== wo(i)) {
                  const n = new Ys([], {});
                  (n._sourceSegment = t), (n._segmentIndexShift = e.length), (s[wo(i)] = n);
                }
              return s;
            })(t, e, r, new Ys(n, t.children))
          );
          return (s._sourceSegment = t), (s._segmentIndexShift = e.length), { segmentGroup: s, slicedSegments: [] };
        }
        if (
          0 === n.length &&
          (function (t, e, n) {
            return n.some((n) => _o(t, e, n));
          })(t, n, r)
        ) {
          const i = new Ys(
            t.segments,
            (function (t, e, n, r, s, i) {
              const o = {};
              for (const a of r)
                if (_o(t, n, a) && !s[wo(a)]) {
                  const n = new Ys([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift = 'legacy' === i ? t.segments.length : e.length),
                    (o[wo(a)] = n);
                }
              return Object.assign(Object.assign({}, s), o);
            })(t, e, n, r, t.children, s)
          );
          return (i._sourceSegment = t), (i._segmentIndexShift = e.length), { segmentGroup: i, slicedSegments: n };
        }
        const i = new Ys(t.segments, t.children);
        return (i._sourceSegment = t), (i._segmentIndexShift = e.length), { segmentGroup: i, slicedSegments: n };
      }
      function _o(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 === n.redirectTo
        );
      }
      function wo(t) {
        return t.outlet || 'primary';
      }
      function Co(t) {
        return t.data || {};
      }
      function So(t) {
        return t.resolve || {};
      }
      function Eo(t, e, n, r) {
        const s = oo(t, e, r);
        return Qs(s.resolve ? s.resolve(e, n) : s(e, n));
      }
      function xo(t) {
        return function (e) {
          return e.pipe(
            Je((e) => {
              const n = t(e);
              return n ? Object(u.a)(n).pipe(Object(l.a)(() => e)) : Object(u.a)([e]);
            })
          );
        };
      }
      class Oo {}
      class Ao {
        shouldDetach(t) {
          return !1;
        }
        store(t, e) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, e) {
          return t.routeConfig === e.routeConfig;
        }
      }
      const ko = new s.q('ROUTES');
      class To {
        constructor(t, e, n, r) {
          (this.loader = t), (this.compiler = e), (this.onLoadStartListener = n), (this.onLoadEndListener = r);
        }
        load(t, e) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(e),
            this.loadModuleFactory(e.loadChildren).pipe(
              Object(l.a)((n) => {
                this.onLoadEndListener && this.onLoadEndListener(e);
                const r = n.create(t);
                return new Fs(Gs(r.injector.get(ko)).map($s), r);
              })
            )
          );
        }
        loadModuleFactory(t) {
          return 'string' == typeof t
            ? Object(u.a)(this.loader.load(t))
            : Qs(t()).pipe(
                Object(Mt.a)((t) => (t instanceof s.v ? Pt(t) : Object(u.a)(this.compiler.compileModuleAsync(t))))
              );
        }
      }
      class Io {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, e) {
          return t;
        }
      }
      function Ro(t) {
        throw t;
      }
      function jo(t, e, n) {
        return e.parse('/');
      }
      function Do(t, e) {
        return Pt(null);
      }
      let No = (() => {
          class t {
            constructor(t, e, n, r, i, o, a, l) {
              (this.rootComponentType = t),
                (this.urlSerializer = e),
                (this.rootContexts = n),
                (this.location = r),
                (this.config = l),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.navigationId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new Re.a()),
                (this.errorHandler = Ro),
                (this.malformedUriErrorHandler = jo),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = { beforePreactivation: Do, afterPreactivation: Do }),
                (this.urlHandlingStrategy = new Io()),
                (this.routeReuseStrategy = new Ao()),
                (this.onSameUrlNavigation = 'ignore'),
                (this.paramsInheritanceStrategy = 'emptyOnly'),
                (this.urlUpdateStrategy = 'deferred'),
                (this.relativeLinkResolution = 'legacy'),
                (this.ngModule = i.get(s.x)),
                (this.console = i.get(s.W));
              const c = i.get(s.z);
              (this.isNgZoneEnabled = c instanceof s.z),
                this.resetConfig(l),
                (this.currentUrlTree = new Js(new Ys([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new To(
                  o,
                  a,
                  (t) => this.triggerEvent(new As(t)),
                  (t) => this.triggerEvent(new ks(t))
                )),
                (this.routerState = Si(this.currentUrlTree, this.rootComponentType)),
                (this.transitions = new En({
                  id: 0,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                  urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                  rawUrl: this.currentUrlTree,
                  extras: {},
                  resolve: null,
                  reject: null,
                  promise: Promise.resolve(!0),
                  source: 'imperative',
                  restoredState: null,
                  currentSnapshot: this.routerState.snapshot,
                  targetSnapshot: null,
                  currentRouterState: this.routerState,
                  targetRouterState: null,
                  guards: { canActivateChecks: [], canDeactivateChecks: [] },
                  guardsResult: null,
                })),
                (this.navigations = this.setupNavigations(this.transitions)),
                this.processNavigations();
            }
            setupNavigations(t) {
              const e = this.events;
              return t.pipe(
                Ft((t) => 0 !== t.id),
                Object(l.a)((t) =>
                  Object.assign(Object.assign({}, t), { extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl) })
                ),
                Je((t) => {
                  let n = !1,
                    r = !1;
                  return Pt(t).pipe(
                    Vn((t) => {
                      this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), {
                              previousNavigation: null,
                            })
                          : null,
                      };
                    }),
                    Je((t) => {
                      const n = !this.navigated || t.extractedUrl.toString() !== this.browserUrlTree.toString();
                      if (
                        ('reload' === this.onSameUrlNavigation || n) &&
                        this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return Pt(t).pipe(
                          Je((t) => {
                            const n = this.transitions.getValue();
                            return (
                              e.next(new ys(t.id, this.serializeUrl(t.extractedUrl), t.source, t.restoredState)),
                              n !== this.transitions.getValue() ? Ee : [t]
                            );
                          }),
                          Je((t) => Promise.resolve(t)),
                          ((r = this.ngModule.injector),
                          (s = this.configLoader),
                          (i = this.urlSerializer),
                          (o = this.config),
                          function (t) {
                            return t.pipe(
                              Je((t) =>
                                (function (t, e, n, r, s) {
                                  return new Yi(t, e, n, r, s).apply();
                                })(r, s, i, t.extractedUrl, o).pipe(
                                  Object(l.a)((e) => Object.assign(Object.assign({}, t), { urlAfterRedirects: e }))
                                )
                              )
                            );
                          }),
                          Vn((t) => {
                            this.currentNavigation = Object.assign(Object.assign({}, this.currentNavigation), {
                              finalUrl: t.urlAfterRedirects,
                            });
                          }),
                          (function (t, e, n, r, s) {
                            return function (i) {
                              return i.pipe(
                                Object(Mt.a)((i) =>
                                  (function (t, e, n, r, s = 'emptyOnly', i = 'legacy') {
                                    return new mo(t, e, n, r, s, i).recognize();
                                  })(t, e, i.urlAfterRedirects, n(i.urlAfterRedirects), r, s).pipe(
                                    Object(l.a)((t) => Object.assign(Object.assign({}, i), { targetSnapshot: t }))
                                  )
                                )
                              );
                            };
                          })(
                            this.rootComponentType,
                            this.config,
                            (t) => this.serializeUrl(t),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          Vn((t) => {
                            'eager' === this.urlUpdateStrategy &&
                              (t.extras.skipLocationChange ||
                                this.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state),
                              (this.browserUrlTree = t.urlAfterRedirects));
                          }),
                          Vn((t) => {
                            const n = new Cs(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            e.next(n);
                          })
                        );
                      var r, s, i, o;
                      if (n && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                        const { id: n, extractedUrl: r, source: s, restoredState: i, extras: o } = t,
                          a = new ys(n, this.serializeUrl(r), s, i);
                        e.next(a);
                        const l = Si(r, this.rootComponentType).snapshot;
                        return Pt(
                          Object.assign(Object.assign({}, t), {
                            targetSnapshot: l,
                            urlAfterRedirects: r,
                            extras: Object.assign(Object.assign({}, o), { skipLocationChange: !1, replaceUrl: !1 }),
                          })
                        );
                      }
                      return (
                        (this.rawUrlTree = t.rawUrl), (this.browserUrlTree = t.urlAfterRedirects), t.resolve(null), Ee
                      );
                    }),
                    xo((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.beforePreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    Vn((t) => {
                      const e = new Ss(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot
                      );
                      this.triggerEvent(e);
                    }),
                    Object(l.a)((t) =>
                      Object.assign(Object.assign({}, t), {
                        guards: io(t.targetSnapshot, t.currentSnapshot, this.rootContexts),
                      })
                    ),
                    (function (t, e) {
                      return function (n) {
                        return n.pipe(
                          Object(Mt.a)((n) => {
                            const {
                              targetSnapshot: r,
                              currentSnapshot: s,
                              guards: { canActivateChecks: i, canDeactivateChecks: o },
                            } = n;
                            return 0 === o.length && 0 === i.length
                              ? Pt(Object.assign(Object.assign({}, n), { guardsResult: !0 }))
                              : (function (t, e, n, r) {
                                  return Object(u.a)(t).pipe(
                                    Object(Mt.a)((t) =>
                                      (function (t, e, n, r, s) {
                                        const i = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                                        return i && 0 !== i.length
                                          ? Pt(
                                              i.map((i) => {
                                                const o = oo(i, e, s);
                                                let a;
                                                if (
                                                  (function (t) {
                                                    return t && Bi(t.canDeactivate);
                                                  })(o)
                                                )
                                                  a = Qs(o.canDeactivate(t, e, n, r));
                                                else {
                                                  if (!Bi(o)) throw new Error('Invalid CanDeactivate guard');
                                                  a = Qs(o(t, e, n, r));
                                                }
                                                return a.pipe(as());
                                              })
                                            ).pipe(co())
                                          : Pt(!0);
                                      })(t.component, t.route, n, e, r)
                                    ),
                                    as((t) => !0 !== t, !0)
                                  );
                                })(o, r, s, t).pipe(
                                  Object(Mt.a)((n) =>
                                    n && 'boolean' == typeof n
                                      ? (function (t, e, n, r) {
                                          return Object(u.a)(e).pipe(
                                            Lt((e) =>
                                              Object(u.a)([
                                                ho(e.route.parent, r),
                                                uo(e.route, r),
                                                po(t, e.path, n),
                                                fo(t, e.route, n),
                                              ]).pipe(
                                                Ce(),
                                                as((t) => !0 !== t, !0)
                                              )
                                            ),
                                            as((t) => !0 !== t, !0)
                                          );
                                        })(r, i, t, e)
                                      : Pt(n)
                                  ),
                                  Object(l.a)((t) => Object.assign(Object.assign({}, n), { guardsResult: t }))
                                );
                          })
                        );
                      };
                    })(this.ngModule.injector, (t) => this.triggerEvent(t)),
                    Vn((t) => {
                      if (Gi(t.guardsResult)) {
                        const e = Ls(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);
                        throw ((e.url = t.guardsResult), e);
                      }
                    }),
                    Vn((t) => {
                      const e = new Es(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult
                      );
                      this.triggerEvent(e);
                    }),
                    Ft((t) => {
                      if (!t.guardsResult) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new _s(t.id, this.serializeUrl(t.extractedUrl), '');
                        return e.next(n), t.resolve(!1), !1;
                      }
                      return !0;
                    }),
                    xo((t) => {
                      if (t.guards.canActivateChecks.length)
                        return Pt(t).pipe(
                          Vn((t) => {
                            const e = new xs(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          }),
                          ((e = this.paramsInheritanceStrategy),
                          (n = this.ngModule.injector),
                          function (t) {
                            return t.pipe(
                              Object(Mt.a)((t) => {
                                const {
                                  targetSnapshot: r,
                                  guards: { canActivateChecks: s },
                                } = t;
                                return s.length
                                  ? Object(u.a)(s).pipe(
                                      Lt((t) =>
                                        (function (t, e, n, r) {
                                          return (function (t, e, n, r) {
                                            const s = Object.keys(t);
                                            if (0 === s.length) return Pt({});
                                            if (1 === s.length) {
                                              const i = s[0];
                                              return Eo(t[i], e, n, r).pipe(Object(l.a)((t) => ({ [i]: t })));
                                            }
                                            const i = {};
                                            return Object(u.a)(s)
                                              .pipe(
                                                Object(Mt.a)((s) =>
                                                  Eo(t[s], e, n, r).pipe(Object(l.a)((t) => ((i[s] = t), t)))
                                                )
                                              )
                                              .pipe(
                                                rs(),
                                                Object(l.a)(() => i)
                                              );
                                          })(t._resolve, t, e, r).pipe(
                                            Object(l.a)(
                                              (e) => (
                                                (t._resolvedData = e),
                                                (t.data = Object.assign(Object.assign({}, t.data), xi(t, n).resolve)),
                                                null
                                              )
                                            )
                                          );
                                        })(t.route, r, e, n)
                                      ),
                                      (function (t, e) {
                                        return arguments.length >= 2
                                          ? function (n) {
                                              return Object(fs.a)(us(t, e), Gr(1), Xr(e))(n);
                                            }
                                          : function (e) {
                                              return Object(fs.a)(
                                                us((e, n, r) => t(e, n, r + 1)),
                                                Gr(1)
                                              )(e);
                                            };
                                      })((t, e) => t),
                                      Object(l.a)((e) => t)
                                    )
                                  : Pt(t);
                              })
                            );
                          }),
                          Vn((t) => {
                            const e = new Os(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          })
                        );
                      var e, n;
                    }),
                    xo((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.afterPreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    Object(l.a)((t) => {
                      const e = (function (t, e, n) {
                        const r = (function t(e, n, r) {
                          if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
                            const s = r.value;
                            s._futureSnapshot = n.value;
                            const i = (function (e, n, r) {
                              return n.children.map((n) => {
                                for (const s of r.children)
                                  if (e.shouldReuseRoute(s.value.snapshot, n.value)) return t(e, n, s);
                                return t(e, n);
                              });
                            })(e, n, r);
                            return new _i(s, i);
                          }
                          {
                            const r = e.retrieve(n.value);
                            if (r) {
                              const t = r.route;
                              return (
                                (function t(e, n) {
                                  if (e.value.routeConfig !== n.value.routeConfig)
                                    throw new Error(
                                      'Cannot reattach ActivatedRouteSnapshot created from a different route'
                                    );
                                  if (e.children.length !== n.children.length)
                                    throw new Error(
                                      'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                                    );
                                  n.value._futureSnapshot = e.value;
                                  for (let r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r]);
                                })(n, t),
                                t
                              );
                            }
                            {
                              const r = new Ei(
                                  new En((s = n.value).url),
                                  new En(s.params),
                                  new En(s.queryParams),
                                  new En(s.fragment),
                                  new En(s.data),
                                  s.outlet,
                                  s.component,
                                  s
                                ),
                                i = n.children.map((n) => t(e, n));
                              return new _i(r, i);
                            }
                          }
                          var s;
                        })(t, e._root, n ? n._root : void 0);
                        return new Ci(r, e);
                      })(this.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
                      return Object.assign(Object.assign({}, t), { targetRouterState: e });
                    }),
                    Vn((t) => {
                      (this.currentUrlTree = t.urlAfterRedirects),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t.rawUrl)),
                        (this.routerState = t.targetRouterState),
                        'deferred' === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(this.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state),
                          (this.browserUrlTree = t.urlAfterRedirects));
                    }),
                    ((s = this.rootContexts),
                    (i = this.routeReuseStrategy),
                    (o = (t) => this.triggerEvent(t)),
                    Object(l.a)((t) => (new $i(i, t.targetRouterState, t.currentRouterState, o).activate(s), t))),
                    Vn({
                      next() {
                        n = !0;
                      },
                      complete() {
                        n = !0;
                      },
                    }),
                    ps(() => {
                      if (!n && !r) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new _s(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`
                        );
                        e.next(n), t.resolve(!1);
                      }
                      this.currentNavigation = null;
                    }),
                    ss((n) => {
                      if (((r = !0), (s = n) && s.ngNavigationCancelingError)) {
                        const r = Gi(n.url);
                        r ||
                          ((this.navigated = !0),
                          this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
                        const s = new _s(t.id, this.serializeUrl(t.extractedUrl), n.message);
                        e.next(s),
                          r
                            ? setTimeout(() => {
                                const e = this.urlHandlingStrategy.merge(n.url, this.rawUrlTree);
                                return this.scheduleNavigation(
                                  e,
                                  'imperative',
                                  null,
                                  {
                                    skipLocationChange: t.extras.skipLocationChange,
                                    replaceUrl: 'eager' === this.urlUpdateStrategy,
                                  },
                                  { resolve: t.resolve, reject: t.reject, promise: t.promise }
                                );
                              }, 0)
                            : t.resolve(!1);
                      } else {
                        this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                        const r = new ws(t.id, this.serializeUrl(t.extractedUrl), n);
                        e.next(r);
                        try {
                          t.resolve(this.errorHandler(n));
                        } catch (i) {
                          t.reject(i);
                        }
                      }
                      var s;
                      return Ee;
                    })
                  );
                  var s, i, o;
                })
              );
            }
            resetRootComponentType(t) {
              (this.rootComponentType = t), (this.routerState.root.component = this.rootComponentType);
            }
            getTransition() {
              const t = this.transitions.value;
              return (t.urlAfterRedirects = this.browserUrlTree), t;
            }
            setTransition(t) {
              this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), t));
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((t) => {
                  let e = this.parseUrl(t.url);
                  const n = 'popstate' === t.type ? 'popstate' : 'hashchange',
                    r = t.state && t.state.navigationId ? t.state : null;
                  setTimeout(() => {
                    this.scheduleNavigation(e, n, r, { replaceUrl: !0 });
                  }, 0);
                }));
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.currentNavigation;
            }
            triggerEvent(t) {
              this.events.next(t);
            }
            resetConfig(t) {
              Hs(t), (this.config = t.map($s)), (this.navigated = !1), (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
            }
            createUrlTree(t, e = {}) {
              const {
                relativeTo: n,
                queryParams: r,
                fragment: i,
                preserveQueryParams: o,
                queryParamsHandling: a,
                preserveFragment: l,
              } = e;
              Object(s.T)() &&
                o &&
                console &&
                console.warn &&
                console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
              const c = n || this.routerState.root,
                u = l ? this.currentUrlTree.fragment : i;
              let h = null;
              if (a)
                switch (a) {
                  case 'merge':
                    h = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), r);
                    break;
                  case 'preserve':
                    h = this.currentUrlTree.queryParams;
                    break;
                  default:
                    h = r || null;
                }
              else h = o ? this.currentUrlTree.queryParams : r || null;
              return (
                null !== h && (h = this.removeEmptyProps(h)),
                (function (t, e, n, r, s) {
                  if (0 === n.length) return Di(e.root, e.root, e, r, s);
                  const i = (function (t) {
                    if ('string' == typeof t[0] && 1 === t.length && '/' === t[0]) return new Ni(!0, 0, t);
                    let e = 0,
                      n = !1;
                    const r = t.reduce((t, r, s) => {
                      if ('object' == typeof r && null != r) {
                        if (r.outlets) {
                          const e = {};
                          return (
                            Ws(r.outlets, (t, n) => {
                              e[n] = 'string' == typeof t ? t.split('/') : t;
                            }),
                            [...t, { outlets: e }]
                          );
                        }
                        if (r.segmentPath) return [...t, r.segmentPath];
                      }
                      return 'string' != typeof r
                        ? [...t, r]
                        : 0 === s
                        ? (r.split('/').forEach((r, s) => {
                            (0 == s && '.' === r) ||
                              (0 == s && '' === r ? (n = !0) : '..' === r ? e++ : '' != r && t.push(r));
                          }),
                          t)
                        : [...t, r];
                    }, []);
                    return new Ni(n, e, r);
                  })(n);
                  if (i.toRoot()) return Di(e.root, new Ys([], {}), e, r, s);
                  const o = (function (t, e, n) {
                      if (t.isAbsolute) return new Pi(e.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex) return new Pi(n.snapshot._urlSegment, !0, 0);
                      const r = ji(t.commands[0]) ? 0 : 1;
                      return (function (t, e, n) {
                        let r = t,
                          s = e,
                          i = n;
                        for (; i > s; ) {
                          if (((i -= s), (r = r.parent), !r)) throw new Error("Invalid number of '../'");
                          s = r.segments.length;
                        }
                        return new Pi(r, !1, s - i);
                      })(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, t.numberOfDoubleDots);
                    })(i, e, t),
                    a = o.processChildren
                      ? Vi(o.segmentGroup, o.index, i.commands)
                      : Li(o.segmentGroup, o.index, i.commands);
                  return Di(o.segmentGroup, a, e, r, s);
                })(c, this.currentUrlTree, t, h, u)
              );
            }
            navigateByUrl(t, e = { skipLocationChange: !1 }) {
              Object(s.T)() &&
                this.isNgZoneEnabled &&
                !s.z.isInAngularZone() &&
                this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
              const n = Gi(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(r, 'imperative', null, e);
            }
            navigate(t, e = { skipLocationChange: !1 }) {
              return (
                (function (t) {
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    if (null == n) throw new Error(`The requested path contains ${n} segment at index ${e}`);
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              );
            }
            serializeUrl(t) {
              return this.urlSerializer.serialize(t);
            }
            parseUrl(t) {
              let e;
              try {
                e = this.urlSerializer.parse(t);
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
              }
              return e;
            }
            isActive(t, e) {
              if (Gi(t)) return Ks(this.currentUrlTree, t, e);
              const n = this.parseUrl(t);
              return Ks(this.currentUrlTree, n, e);
            }
            removeEmptyProps(t) {
              return Object.keys(t).reduce((e, n) => {
                const r = t[n];
                return null != r && (e[n] = r), e;
              }, {});
            }
            processNavigations() {
              this.navigations.subscribe(
                (t) => {
                  (this.navigated = !0),
                    (this.lastSuccessfulId = t.id),
                    this.events.next(
                      new vs(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(this.currentUrlTree))
                    ),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    (this.currentNavigation = null),
                    t.resolve(!0);
                },
                (t) => {
                  this.console.warn('Unhandled Navigation Error: ');
                }
              );
            }
            scheduleNavigation(t, e, n, r, s) {
              const i = this.getTransition();
              if (i && 'imperative' !== e && 'imperative' === i.source && i.rawUrl.toString() === t.toString())
                return Promise.resolve(!0);
              if (i && 'hashchange' == e && 'popstate' === i.source && i.rawUrl.toString() === t.toString())
                return Promise.resolve(!0);
              if (i && 'popstate' == e && 'hashchange' === i.source && i.rawUrl.toString() === t.toString())
                return Promise.resolve(!0);
              let o, a, l;
              s
                ? ((o = s.resolve), (a = s.reject), (l = s.promise))
                : (l = new Promise((t, e) => {
                    (o = t), (a = e);
                  }));
              const c = ++this.navigationId;
              return (
                this.setTransition({
                  id: c,
                  source: e,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: o,
                  reject: a,
                  promise: l,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                l.catch((t) => Promise.reject(t))
              );
            }
            setBrowserUrl(t, e, n, r) {
              const s = this.urlSerializer.serialize(t);
              (r = r || {}),
                this.location.isCurrentPathEqualTo(s) || e
                  ? this.location.replaceState(s, '', Object.assign(Object.assign({}, r), { navigationId: n }))
                  : this.location.go(s, '', Object.assign(Object.assign({}, r), { navigationId: n }));
            }
            resetStateAndUrl(t, e, n) {
              (this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n)),
                this.resetUrlToCurrentUrlTree();
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', {
                navigationId: this.lastSuccessfulId,
              });
            }
          }
          return (
            (t.ɵfac = function (t) {
              s.cc();
            }),
            (t.ɵdir = s.Hb({ type: t })),
            t
          );
        })(),
        Po = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.route = e),
                (this.commands = []),
                null == n && r.setAttribute(s.nativeElement, 'tabindex', '0');
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            set preserveQueryParams(t) {
              Object(s.T)() &&
                console &&
                console.warn &&
                console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.'),
                (this.preserve = t);
            }
            onClick() {
              const t = {
                skipLocationChange: Lo(this.skipLocationChange),
                replaceUrl: Lo(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, t), !0;
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: Lo(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Lo(this.preserveFragment),
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(No), s.Mb(Ei), s.ac('tabindex'), s.Mb(s.D), s.Mb(s.l));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'routerLink', '', 5, 'a', 5, 'area']],
              hostBindings: function (t, e) {
                1 & t &&
                  s.dc('click', function () {
                    return e.onClick();
                  });
              },
              inputs: {
                routerLink: 'routerLink',
                preserveQueryParams: 'preserveQueryParams',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                preserveFragment: 'preserveFragment',
                skipLocationChange: 'skipLocationChange',
                replaceUrl: 'replaceUrl',
                state: 'state',
              },
            })),
            t
          );
        })(),
        Mo = (() => {
          class t {
            constructor(t, e, n) {
              (this.router = t),
                (this.route = e),
                (this.locationStrategy = n),
                (this.commands = []),
                (this.subscription = t.events.subscribe((t) => {
                  t instanceof vs && this.updateTargetUrlAndHref();
                }));
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            set preserveQueryParams(t) {
              Object(s.T)() &&
                console &&
                console.warn &&
                console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.'),
                (this.preserve = t);
            }
            ngOnChanges(t) {
              this.updateTargetUrlAndHref();
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(t, e, n, r) {
              if (0 !== t || e || n || r) return !0;
              if ('string' == typeof this.target && '_self' != this.target) return !0;
              const s = {
                skipLocationChange: Lo(this.skipLocationChange),
                replaceUrl: Lo(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, s), !1;
            }
            updateTargetUrlAndHref() {
              this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: Lo(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Lo(this.preserveFragment),
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(No), s.Mb(Ei), s.Mb(i.h));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['a', 'routerLink', ''],
                ['area', 'routerLink', ''],
              ],
              hostVars: 2,
              hostBindings: function (t, e) {
                1 & t &&
                  s.dc('click', function (t) {
                    return e.onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey);
                  }),
                  2 & t && (s.Ub('href', e.href, s.tc), s.Ab('target', e.target));
              },
              inputs: {
                routerLink: 'routerLink',
                preserveQueryParams: 'preserveQueryParams',
                target: 'target',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                preserveFragment: 'preserveFragment',
                skipLocationChange: 'skipLocationChange',
                replaceUrl: 'replaceUrl',
                state: 'state',
              },
              features: [s.xb],
            })),
            t
          );
        })();
      function Lo(t) {
        return '' === t || !!t;
      }
      let Vo = (() => {
        class t {
          constructor(t, e, n, r, s) {
            (this.router = t),
              (this.element = e),
              (this.renderer = n),
              (this.link = r),
              (this.linkWithHref = s),
              (this.classes = []),
              (this.isActive = !1),
              (this.routerLinkActiveOptions = { exact: !1 }),
              (this.subscription = t.events.subscribe((t) => {
                t instanceof vs && this.update();
              }));
          }
          ngAfterContentInit() {
            this.links.changes.subscribe((t) => this.update()),
              this.linksWithHrefs.changes.subscribe((t) => this.update()),
              this.update();
          }
          set routerLinkActive(t) {
            const e = Array.isArray(t) ? t : t.split(' ');
            this.classes = e.filter((t) => !!t);
          }
          ngOnChanges(t) {
            this.update();
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          update() {
            this.links &&
              this.linksWithHrefs &&
              this.router.navigated &&
              Promise.resolve().then(() => {
                const t = this.hasActiveLinks();
                this.isActive !== t &&
                  ((this.isActive = t),
                  this.classes.forEach((e) => {
                    t
                      ? this.renderer.addClass(this.element.nativeElement, e)
                      : this.renderer.removeClass(this.element.nativeElement, e);
                  }));
              });
          }
          isLinkActive(t) {
            return (e) => t.isActive(e.urlTree, this.routerLinkActiveOptions.exact);
          }
          hasActiveLinks() {
            const t = this.isLinkActive(this.router);
            return (
              (this.link && t(this.link)) ||
              (this.linkWithHref && t(this.linkWithHref)) ||
              this.links.some(t) ||
              this.linksWithHrefs.some(t)
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(No), s.Mb(s.l), s.Mb(s.D), s.Mb(Po, 8), s.Mb(Mo, 8));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['', 'routerLinkActive', '']],
            contentQueries: function (t, e, n) {
              var r;
              1 & t && (s.Fb(n, Po, !0), s.Fb(n, Mo, !0)),
                2 & t && (s.qc((r = s.ec())) && (e.links = r), s.qc((r = s.ec())) && (e.linksWithHrefs = r));
            },
            inputs: { routerLinkActiveOptions: 'routerLinkActiveOptions', routerLinkActive: 'routerLinkActive' },
            exportAs: ['routerLinkActive'],
            features: [s.xb],
          })),
          t
        );
      })();
      class Fo {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new Ho()),
            (this.attachRef = null);
        }
      }
      class Ho {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, e) {
          const n = this.getOrCreateContext(t);
          (n.outlet = e), this.contexts.set(t, n);
        }
        onChildOutletDestroyed(t) {
          const e = this.getContext(t);
          e && (e.outlet = null);
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let e = this.getContext(t);
          return e || ((e = new Fo()), this.contexts.set(t, e)), e;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      let Uo = (() => {
        class t {
          constructor(t, e, n, r, i) {
            (this.parentContexts = t),
              (this.location = e),
              (this.resolver = n),
              (this.changeDetector = i),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new s.n()),
              (this.deactivateEvents = new s.n()),
              (this.name = r || 'primary'),
              t.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const t = this.parentContexts.getContext(this.name);
              t &&
                t.route &&
                (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
          }
          detach() {
            if (!this.activated) throw new Error('Outlet is not activated');
            this.location.detach();
            const t = this.activated;
            return (this.activated = null), (this._activatedRoute = null), t;
          }
          attach(t, e) {
            (this.activated = t), (this._activatedRoute = e), this.location.insert(t.hostView);
          }
          deactivate() {
            if (this.activated) {
              const t = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(t);
            }
          }
          activateWith(t, e) {
            if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
            this._activatedRoute = t;
            const n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
              r = this.parentContexts.getOrCreateContext(this.name).children,
              s = new zo(t, r, this.location.injector);
            (this.activated = this.location.createComponent(n, this.location.length, s)),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(Ho), s.Mb(s.N), s.Mb(s.j), s.ac('name'), s.Mb(s.h));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['router-outlet']],
            outputs: { activateEvents: 'activate', deactivateEvents: 'deactivate' },
            exportAs: ['outlet'],
          })),
          t
        );
      })();
      class zo {
        constructor(t, e, n) {
          (this.route = t), (this.childContexts = e), (this.parent = n);
        }
        get(t, e) {
          return t === Ei ? this.route : t === Ho ? this.childContexts : this.parent.get(t, e);
        }
      }
      class $o {}
      class qo {
        preload(t, e) {
          return Pt(null);
        }
      }
      let Bo = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.injector = r),
                (this.preloadingStrategy = s),
                (this.loader = new To(
                  e,
                  n,
                  (e) => t.triggerEvent(new As(e)),
                  (e) => t.triggerEvent(new ks(e))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  Ft((t) => t instanceof vs),
                  Lt(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const t = this.injector.get(s.x);
              return this.processRoutes(t, this.router.config);
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            processRoutes(t, e) {
              const n = [];
              for (const r of e)
                if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                  const t = r._loadedConfig;
                  n.push(this.processRoutes(t.module, t.routes));
                } else
                  r.loadChildren && !r.canLoad
                    ? n.push(this.preloadConfig(t, r))
                    : r.children && n.push(this.processRoutes(t, r.children));
              return Object(u.a)(n).pipe(
                Object(we.a)(),
                Object(l.a)((t) => {})
              );
            }
            preloadConfig(t, e) {
              return this.preloadingStrategy.preload(e, () =>
                this.loader
                  .load(t.injector, e)
                  .pipe(Object(Mt.a)((t) => ((e._loadedConfig = t), this.processRoutes(t.module, t.routes))))
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Zb(No), s.Zb(s.w), s.Zb(s.i), s.Zb(s.r), s.Zb($o));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Go = (() => {
          class t {
            constructor(t, e, n = {}) {
              (this.router = t),
                (this.viewportScroller = e),
                (this.options = n),
                (this.lastId = 0),
                (this.lastSource = 'imperative'),
                (this.restoredId = 0),
                (this.store = {}),
                (n.scrollPositionRestoration = n.scrollPositionRestoration || 'disabled'),
                (n.anchorScrolling = n.anchorScrolling || 'disabled');
            }
            init() {
              'disabled' !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration('manual'),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof ys
                  ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                    (this.lastSource = t.navigationTrigger),
                    (this.restoredId = t.restoredState ? t.restoredState.navigationId : 0))
                  : t instanceof vs &&
                    ((this.lastId = t.id),
                    this.scheduleScrollEvent(t, this.router.parseUrl(t.urlAfterRedirects).fragment));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof Ds &&
                  (t.position
                    ? 'top' === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : 'enabled' === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(t.position)
                    : t.anchor && 'enabled' === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(t.anchor)
                    : 'disabled' !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(t, e) {
              this.router.triggerEvent(
                new Ds(t, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, e)
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function (t) {
              s.cc();
            }),
            (t.ɵdir = s.Hb({ type: t })),
            t
          );
        })();
      const Zo = new s.q('ROUTER_CONFIGURATION'),
        Wo = new s.q('ROUTER_FORROOT_GUARD'),
        Qo = [
          i.g,
          { provide: ni, useClass: ri },
          {
            provide: No,
            useFactory: function (t, e, n, r, s, o, a, l = {}, c, u) {
              const h = new No(null, t, e, n, r, s, o, Gs(a));
              if (
                (c && (h.urlHandlingStrategy = c),
                u && (h.routeReuseStrategy = u),
                l.errorHandler && (h.errorHandler = l.errorHandler),
                l.malformedUriErrorHandler && (h.malformedUriErrorHandler = l.malformedUriErrorHandler),
                l.enableTracing)
              ) {
                const t = Object(i.y)();
                h.events.subscribe((e) => {
                  t.logGroup('Router Event: ' + e.constructor.name), t.log(e.toString()), t.log(e), t.logGroupEnd();
                });
              }
              return (
                l.onSameUrlNavigation && (h.onSameUrlNavigation = l.onSameUrlNavigation),
                l.paramsInheritanceStrategy && (h.paramsInheritanceStrategy = l.paramsInheritanceStrategy),
                l.urlUpdateStrategy && (h.urlUpdateStrategy = l.urlUpdateStrategy),
                l.relativeLinkResolution && (h.relativeLinkResolution = l.relativeLinkResolution),
                h
              );
            },
            deps: [ni, Ho, i.g, s.r, s.w, s.i, ko, Zo, [class {}, new s.A()], [Oo, new s.A()]],
          },
          Ho,
          {
            provide: Ei,
            useFactory: function (t) {
              return t.routerState.root;
            },
            deps: [No],
          },
          { provide: s.w, useClass: s.J },
          Bo,
          qo,
          class {
            preload(t, e) {
              return e().pipe(ss(() => Pt(null)));
            }
          },
          { provide: Zo, useValue: { enableTracing: !1 } },
        ];
      function Ko() {
        return new s.y('Router', No);
      }
      let Jo = (() => {
        class t {
          constructor(t, e) {}
          static forRoot(e, n) {
            return {
              ngModule: t,
              providers: [
                Qo,
                ea(e),
                { provide: Wo, useFactory: ta, deps: [[No, new s.A(), new s.I()]] },
                { provide: Zo, useValue: n || {} },
                { provide: i.h, useFactory: Xo, deps: [i.o, [new s.p(i.a), new s.A()], Zo] },
                { provide: Go, useFactory: Yo, deps: [No, i.q, Zo] },
                { provide: $o, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : qo },
                { provide: s.y, multi: !0, useFactory: Ko },
                [
                  na,
                  { provide: s.d, multi: !0, useFactory: ra, deps: [na] },
                  { provide: ia, useFactory: sa, deps: [na] },
                  { provide: s.b, multi: !0, useExisting: ia },
                ],
              ],
            };
          }
          static forChild(e) {
            return { ngModule: t, providers: [ea(e)] };
          }
        }
        return (
          (t.ɵmod = s.Kb({ type: t })),
          (t.ɵinj = s.Jb({
            factory: function (e) {
              return new (e || t)(s.Zb(Wo, 8), s.Zb(No, 8));
            },
          })),
          t
        );
      })();
      function Yo(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new Go(t, e, n);
      }
      function Xo(t, e, n = {}) {
        return n.useHash ? new i.e(t, e) : new i.m(t, e);
      }
      function ta(t) {
        if (t)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        return 'guarded';
      }
      function ea(t) {
        return [
          { provide: s.a, multi: !0, useValue: t },
          { provide: ko, multi: !0, useValue: t },
        ];
      }
      let na = (() => {
        class t {
          constructor(t) {
            (this.injector = t), (this.initNavigation = !1), (this.resultOfPreactivationDone = new Re.a());
          }
          appInitializer() {
            return this.injector.get(i.f, Promise.resolve(null)).then(() => {
              let t = null;
              const e = new Promise((e) => (t = e)),
                n = this.injector.get(No),
                r = this.injector.get(Zo);
              if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) t(!0);
              else if ('disabled' === r.initialNavigation) n.setUpLocationChangeListener(), t(!0);
              else {
                if ('enabled' !== r.initialNavigation)
                  throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);
                (n.hooks.afterPreactivation = () =>
                  this.initNavigation ? Pt(null) : ((this.initNavigation = !0), t(!0), this.resultOfPreactivationDone)),
                  n.initialNavigation();
              }
              return e;
            });
          }
          bootstrapListener(t) {
            const e = this.injector.get(Zo),
              n = this.injector.get(Bo),
              r = this.injector.get(Go),
              i = this.injector.get(No),
              o = this.injector.get(s.g);
            t === o.components[0] &&
              (this.isLegacyEnabled(e)
                ? i.initialNavigation()
                : this.isLegacyDisabled(e) && i.setUpLocationChangeListener(),
              n.setUpPreloading(),
              r.init(),
              i.resetRootComponentType(o.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
          isLegacyEnabled(t) {
            return (
              'legacy_enabled' === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
            );
          }
          isLegacyDisabled(t) {
            return 'legacy_disabled' === t.initialNavigation || !1 === t.initialNavigation;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Zb(s.r));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function ra(t) {
        return t.appInitializer.bind(t);
      }
      function sa(t) {
        return t.bootstrapListener.bind(t);
      }
      const ia = new s.q('Router Initializer');
      let oa = (() => {
        class t extends Oo {
          shouldDetach(t) {
            return !1;
          }
          store(t, e) {}
          shouldAttach(t) {
            return !1;
          }
          retrieve(t) {
            return null;
          }
          shouldReuseRoute(t, e) {
            return t.routeConfig === e.routeConfig || t.data.reuse;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return aa(e || t);
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const aa = s.Tb(oa);
      var la = n('AytR');
      let ca = (() => {
        class t {
          intercept(t, e) {
            return /^(http|https):/i.test(t.url) || (t = t.clone({ url: la.a.serverUrl + t.url })), e.handle(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
          t
        );
      })();
      var ua = (function (t) {
        return (
          (t[(t.Off = 0)] = 'Off'),
          (t[(t.Error = 1)] = 'Error'),
          (t[(t.Warning = 2)] = 'Warning'),
          (t[(t.Info = 3)] = 'Info'),
          (t[(t.Debug = 4)] = 'Debug'),
          t
        );
      })({});
      let ha = (() => {
        class t {
          constructor(t) {
            this.source = t;
          }
          static enableProductionMode() {
            t.level = ua.Warning;
          }
          debug(...t) {
            this.log(console.log, ua.Debug, t);
          }
          info(...t) {
            this.log(console.info, ua.Info, t);
          }
          warn(...t) {
            this.log(console.warn, ua.Warning, t);
          }
          error(...t) {
            this.log(console.error, ua.Error, t);
          }
          log(e, n, r) {
            if (n <= t.level) {
              const s = this.source ? ['[' + this.source + ']'].concat(r) : r;
              e.apply(console, s), t.outputs.forEach((t) => t.apply(t, [this.source, n, ...r]));
            }
          }
        }
        return (t.level = ua.Debug), (t.outputs = []), t;
      })();
      const da = new ha('ErrorHandlerInterceptor');
      let fa = (() => {
          class t {
            intercept(t, e) {
              return e.handle(t).pipe(ss((t) => this.errorHandler(t)));
            }
            errorHandler(t) {
              throw (la.a.production || da.error('Request error', t), t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          );
        })(),
        pa = (() => {
          class t {
            constructor(t) {
              if (t) throw new Error(t + ' has already been loaded. Import Core module in the AppModule only.');
            }
          }
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)(s.Zb(t, 12));
              },
              providers: [
                { provide: oe, useClass: ca, multi: !0 },
                { provide: oe, useClass: fa, multi: !0 },
                { provide: Oo, useClass: oa },
              ],
              imports: [[i.b, ve, Sn, Jo]],
            })),
            t
          );
        })();
      const ga = Symbol('untilDestroyed');
      let ma = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b]],
            })),
            t
          );
        })(),
        ba = (() => {
          class t {
            constructor() {
              this.isLoading = !1;
            }
            ngOnInit() {}
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['app-loader']],
              inputs: { isLoading: 'isLoading', message: 'message' },
              decls: 8,
              vars: 2,
              consts: [
                [1, 'text-xs-center', 3, 'hidden'],
                [1, 'fas', 'fa-cog', 'fa-spin', 'fa-3x'],
              ],
              template: function (t, e) {
                1 & t &&
                  (s.Rb(0, 'div', 0),
                  s.Ac(1, '\n  '),
                  s.Nb(2, 'i', 1),
                  s.Ac(3, ' '),
                  s.Rb(4, 'span'),
                  s.Ac(5),
                  s.Qb(),
                  s.Ac(6, '\n'),
                  s.Qb(),
                  s.Ac(7, '\n')),
                  2 & t && (s.kc('hidden', !e.isLoading), s.zb(5), s.Bc(e.message));
              },
              styles: ['.fa[_ngcontent-%COMP%]{vertical-align:middle}'],
            })),
            t
          );
        })(),
        ya = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b, Sn, qr]],
            })),
            t
          );
        })();
      var va = n('A/Ql'),
        _a = n('E4Qo');
      const wa = new ha('I18nService');
      let Ca = (() => {
        class t {
          constructor(t) {
            (this.translateService = t), t.setTranslation('en-US', va), t.setTranslation('es-ES', _a);
          }
          init(t, e) {
            (this.defaultLanguage = t),
              (this.supportedLanguages = e),
              (this.language = ''),
              (this.langChangeSubscription = this.translateService.onLangChange.subscribe((t) => {
                localStorage.setItem('language', t.lang);
              }));
          }
          destroy() {
            this.langChangeSubscription && this.langChangeSubscription.unsubscribe();
          }
          set language(t) {
            t = t || localStorage.getItem('language') || this.translateService.getBrowserCultureLang();
            let e = this.supportedLanguages.includes(t);
            t &&
              !e &&
              ((t = t.split('-')[0]),
              (t = this.supportedLanguages.find((e) => e.startsWith(t)) || ''),
              (e = Boolean(t))),
              e || (t = this.defaultLanguage),
              wa.debug('Language set to ' + t),
              this.translateService.use(t);
          }
          get language() {
            return this.translateService.currentLang;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Zb(_n));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
          t
        );
      })();
      function Sa(t, e) {
        if ((1 & t && (s.Rb(0, 'a', 5), s.Ac(1), s.gc(2, 'translate'), s.Qb()), 2 & t)) {
          const t = s.fc();
          s.zb(1), s.Cc('\n    ', s.hc(2, 1, t.currentLanguage), '\n  ');
        }
      }
      function Ea(t, e) {
        if ((1 & t && (s.Ac(0, '\n    '), s.Rb(1, 'button', 6), s.Ac(2), s.Qb(), s.Ac(3, '\n  ')), 2 & t)) {
          const t = s.fc();
          s.zb(2), s.Cc('\n      ', t.currentLanguage, '\n    ');
        }
      }
      function xa(t, e) {
        if (1 & t) {
          const t = s.Sb();
          s.Rb(0, 'button', 7),
            s.dc('click', function () {
              s.sc(t);
              const n = e.$implicit;
              return s.fc().setLanguage(n);
            }),
            s.Ac(1),
            s.gc(2, 'translate'),
            s.Qb();
        }
        if (2 & t) {
          const t = e.$implicit;
          s.zb(1), s.Cc('\n      ', s.hc(2, 1, t), '\n    ');
        }
      }
      const Oa = function (t) {
        return { 'nav-item': t };
      };
      let Aa = (() => {
          class t {
            constructor(t) {
              (this.i18nService = t), (this.inNavbar = !1), (this.menuClass = '');
            }
            ngOnInit() {}
            setLanguage(t) {
              this.i18nService.language = t;
            }
            get currentLanguage() {
              return this.i18nService.language;
            }
            get languages() {
              return this.i18nService.supportedLanguages;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(Ca));
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['app-language-selector']],
              inputs: { inNavbar: 'inNavbar', menuClass: 'menuClass' },
              decls: 13,
              vars: 7,
              consts: [
                ['ngbDropdown', '', 3, 'ngClass'],
                ['id', 'language-dropdown', 'class', 'nav-link', 'ngbDropdownToggle', '', 4, 'ngIf', 'ngIfElse'],
                ['button', ''],
                ['ngbDropdownMenu', '', 'aria-labelledby', 'language-dropdown', 3, 'ngClass'],
                ['class', 'dropdown-item', 3, 'click', 4, 'ngFor', 'ngForOf'],
                ['id', 'language-dropdown', 'ngbDropdownToggle', '', 1, 'nav-link'],
                ['id', 'language-dropdown', 'ngbDropdownToggle', '', 1, 'btn', 'btn-sm', 'btn-secondary'],
                [1, 'dropdown-item', 3, 'click'],
              ],
              template: function (t, e) {
                if (
                  (1 & t &&
                    (s.Rb(0, 'div', 0),
                    s.Ac(1, '\n  '),
                    s.yc(2, Sa, 3, 3, 'a', 1),
                    s.Ac(3, '\n  '),
                    s.yc(4, Ea, 4, 1, 'ng-template', null, 2, s.zc),
                    s.Ac(6, '\n  '),
                    s.Rb(7, 'div', 3),
                    s.Ac(8, '\n    '),
                    s.yc(9, xa, 3, 3, 'button', 4),
                    s.Ac(10, '\n  '),
                    s.Qb(),
                    s.Ac(11, '\n'),
                    s.Qb(),
                    s.Ac(12, '\n')),
                  2 & t)
                ) {
                  const t = s.rc(5);
                  s.kc('ngClass', s.nc(5, Oa, e.inNavbar)),
                    s.zb(2),
                    s.kc('ngIf', e.inNavbar)('ngIfElse', t),
                    s.zb(5),
                    s.kc('ngClass', e.menuClass),
                    s.zb(2),
                    s.kc('ngForOf', e.languages);
                }
              },
              directives: [vr, i.i, i.k, mr, i.j, yr],
              pipes: [Cn],
              styles: ['.nav-link.dropdown-toggle[_ngcontent-%COMP%]{cursor:pointer}'],
            })),
            t
          );
        })(),
        ka = (() => {
          class t {
            constructor(t) {
              this.httpClient = t;
            }
            getRandomQuote(t) {
              return this.httpClient.get(((e = t), '/jokes/random?category=' + e.category)).pipe(
                Object(l.a)((t) => t.value),
                ss(() => Pt('Error, could not load joke :-('))
              );
              var e;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Zb(se));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          );
        })(),
        Ta = (() => {
          class t {
            constructor(t) {
              (this.quoteService = t), (this.isLoading = !1);
            }
            ngOnInit() {
              (this.isLoading = !0),
                this.quoteService
                  .getRandomQuote({ category: 'dev' })
                  .pipe(
                    ps(() => {
                      this.isLoading = !1;
                    })
                  )
                  .subscribe((t) => {
                    this.quote = t;
                  });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(ka));
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['app-home']],
              decls: 19,
              vars: 3,
              consts: [
                [1, 'container-fluid'],
                [1, 'jumbotron', 'text-center'],
                ['src', 'assets/ngx-rocket-logo.png', 'alt', 'angular logo', 1, 'logo'],
                ['translate', ''],
                [3, 'isLoading'],
                [3, 'hidden'],
              ],
              template: function (t, e) {
                1 & t &&
                  (s.Rb(0, 'div', 0),
                  s.Ac(1, '\n  '),
                  s.Rb(2, 'div', 1),
                  s.Ac(3, '\n    '),
                  s.Rb(4, 'h1'),
                  s.Ac(5, '\n      '),
                  s.Nb(6, 'img', 2),
                  s.Ac(7, '\n      '),
                  s.Rb(8, 'span', 3),
                  s.Ac(9, 'Hello world !'),
                  s.Qb(),
                  s.Ac(10, '\n    '),
                  s.Qb(),
                  s.Ac(11, '\n    '),
                  s.Nb(12, 'app-loader', 4),
                  s.Ac(13, '\n    '),
                  s.Rb(14, 'q', 5),
                  s.Ac(15),
                  s.Qb(),
                  s.Ac(16, '\n  '),
                  s.Qb(),
                  s.Ac(17, '\n'),
                  s.Qb(),
                  s.Ac(18, '\n')),
                  2 & t &&
                    (s.zb(12),
                    s.kc('isLoading', e.isLoading),
                    s.zb(2),
                    s.kc('hidden', e.isLoading),
                    s.zb(1),
                    s.Bc(e.quote));
              },
              directives: [wn, ba],
              styles: [
                '@charset "UTF-8";.logo[_ngcontent-%COMP%]{width:100px}q[_ngcontent-%COMP%]{font-style:italic;font-size:1.2rem;quotes:"\xab " " \xbb"}',
              ],
            })),
            t
          );
        })(),
        Ia = (() => {
          class t {
            constructor() {
              this.menuHidden = !0;
            }
            ngOnInit() {}
            toggleMenu() {
              this.menuHidden = !this.menuHidden;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['app-header']],
              decls: 49,
              vars: 2,
              consts: [
                [1, 'navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark'],
                ['href', 'https://github.com/ngx-rocket', 'translate', '', 1, 'navbar-brand'],
                [
                  'type',
                  'button',
                  'aria-controls',
                  'navbar-menu',
                  'aria-label',
                  'Toggle navigation',
                  1,
                  'navbar-toggler',
                  3,
                  'click',
                ],
                [1, 'navbar-toggler-icon'],
                ['id', 'navbar-menu', 1, 'collapse', 'navbar-collapse', 'float-xs-none', 3, 'ngbCollapse'],
                [1, 'navbar-nav'],
                ['routerLink', '/home', 'routerLinkActive', 'active', 1, 'nav-item', 'nav-link', 'text-uppercase'],
                [1, 'fas', 'fa-home'],
                ['translate', ''],
                ['routerLink', '/Multiplos', 'routerLinkActive', 'active', 1, 'nav-item', 'nav-link', 'text-uppercase'],
                ['routerLink', '/about', 'routerLinkActive', 'active', 1, 'nav-item', 'nav-link', 'text-uppercase'],
                [1, 'fas', 'fa-question-circle'],
                [1, 'navbar-nav', 'ml-auto'],
                ['inNavbar', 'true', 'menuClass', 'dropdown-menu dropdown-menu-right'],
              ],
              template: function (t, e) {
                1 & t &&
                  (s.Rb(0, 'header'),
                  s.Ac(1, '\n  '),
                  s.Rb(2, 'nav', 0),
                  s.Ac(3, '\n    '),
                  s.Rb(4, 'a', 1),
                  s.Ac(5, 'APP_NAME'),
                  s.Qb(),
                  s.Ac(6, '\n    '),
                  s.Rb(7, 'button', 2),
                  s.dc('click', function () {
                    return e.toggleMenu();
                  }),
                  s.Ac(8, '\n      '),
                  s.Nb(9, 'span', 3),
                  s.Ac(10, '\n    '),
                  s.Qb(),
                  s.Ac(11, '\n    '),
                  s.Rb(12, 'div', 4),
                  s.Ac(13, '\n      '),
                  s.Rb(14, 'div', 5),
                  s.Ac(15, '\n        '),
                  s.Rb(16, 'a', 6),
                  s.Ac(17, '\n          '),
                  s.Nb(18, 'i', 7),
                  s.Ac(19, '\n          '),
                  s.Rb(20, 'span', 8),
                  s.Ac(21, 'Home'),
                  s.Qb(),
                  s.Ac(22, '\n        '),
                  s.Qb(),
                  s.Ac(23, '\n        '),
                  s.Rb(24, 'a', 9),
                  s.Ac(25, '\n          '),
                  s.Nb(26, 'i', 7),
                  s.Ac(27, '\n          '),
                  s.Rb(28, 'span', 8),
                  s.Ac(29, 'Multiplo'),
                  s.Qb(),
                  s.Ac(30, '\n        '),
                  s.Qb(),
                  s.Ac(31, '\n        '),
                  s.Rb(32, 'a', 10),
                  s.Ac(33, '\n          '),
                  s.Nb(34, 'i', 11),
                  s.Ac(35, '\n          '),
                  s.Rb(36, 'span', 8),
                  s.Ac(37, 'About'),
                  s.Qb(),
                  s.Ac(38, '\n        '),
                  s.Qb(),
                  s.Ac(39, '\n      '),
                  s.Qb(),
                  s.Ac(40, '\n      '),
                  s.Rb(41, 'div', 12),
                  s.Ac(42, '\n        '),
                  s.Nb(43, 'app-language-selector', 13),
                  s.Ac(44, '\n      '),
                  s.Qb(),
                  s.Ac(45, '\n    '),
                  s.Qb(),
                  s.Ac(46, '\n  '),
                  s.Qb(),
                  s.Ac(47, '\n'),
                  s.Qb(),
                  s.Ac(48, '\n')),
                  2 & t && (s.zb(7), s.Ab('aria-expanded', !e.menuHidden), s.zb(5), s.kc('ngbCollapse', e.menuHidden));
              },
              directives: [pr, wn, tr, Mo, Vo, Aa],
              styles: [
                '.navbar[_ngcontent-%COMP%]{margin-bottom:1rem}.nav-link.dropdown-toggle[_ngcontent-%COMP%]{cursor:pointer}',
              ],
            })),
            t
          );
        })(),
        Ra = (() => {
          class t {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['app-shell']],
              decls: 4,
              vars: 0,
              template: function (t, e) {
                1 & t && (s.Nb(0, 'app-header'), s.Ac(1, '\n'), s.Nb(2, 'router-outlet'), s.Ac(3, '\n'));
              },
              directives: [Ia, Uo],
              styles: [''],
            })),
            t
          );
        })();
      class ja {
        static childRoutes(t) {
          return { path: '', component: Ra, children: t, data: { reuse: !0 } };
        }
      }
      const Da = [
        ja.childRoutes([
          { path: '', redirectTo: '/home', pathMatch: 'full' },
          { path: 'home', component: Ta, data: { title: 'Home' } },
        ]),
      ];
      let Na = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [],
              imports: [[Jo.forChild(Da)], Jo],
            })),
            t
          );
        })(),
        Pa = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b, Sn, pa, ma, Na]],
            })),
            t
          );
        })(),
        Ma = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b, Sn, qr, ya, Jo]],
            })),
            t
          );
        })();
      const La = [
        ja.childRoutes([
          {
            path: 'about',
            component: (() => {
              class t {
                constructor() {
                  this.version = la.a.version;
                }
                ngOnInit() {}
              }
              return (
                (t.ɵfac = function (e) {
                  return new (e || t)();
                }),
                (t.ɵcmp = s.Gb({
                  type: t,
                  selectors: [['app-about']],
                  decls: 19,
                  vars: 1,
                  consts: [
                    [1, 'container-fluid'],
                    [1, 'jumbotron', 'text-center'],
                    ['translate', ''],
                    [1, 'far', 'fa-bookmark'],
                  ],
                  template: function (t, e) {
                    1 & t &&
                      (s.Rb(0, 'div', 0),
                      s.Ac(1, '\n  '),
                      s.Rb(2, 'div', 1),
                      s.Ac(3, '\n    '),
                      s.Rb(4, 'h1'),
                      s.Ac(5, '\n      '),
                      s.Rb(6, 'span', 2),
                      s.Ac(7, 'APP_NAME'),
                      s.Qb(),
                      s.Ac(8, '\n    '),
                      s.Qb(),
                      s.Ac(9, '\n    '),
                      s.Rb(10, 'p'),
                      s.Nb(11, 'i', 3),
                      s.Ac(12, ' '),
                      s.Rb(13, 'span', 2),
                      s.Ac(14, 'Version'),
                      s.Qb(),
                      s.Ac(15),
                      s.Qb(),
                      s.Ac(16, '\n  '),
                      s.Qb(),
                      s.Ac(17, '\n'),
                      s.Qb(),
                      s.Ac(18, '\n')),
                      2 & t && (s.zb(15), s.Cc(' ', e.version, ''));
                  },
                  directives: [wn],
                  styles: [''],
                })),
                t
              );
            })(),
            data: { title: 'About' },
          },
        ]),
      ];
      let Va = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [],
              imports: [[Jo.forChild(La)], Jo],
            })),
            t
          );
        })(),
        Fa = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b, Sn, Va]],
            })),
            t
          );
        })();
      const Ha = new ha('App');
      let Ua = (() => {
        class t {
          constructor(t, e, n, r, s) {
            (this.router = t),
              (this.activatedRoute = e),
              (this.titleService = n),
              (this.translateService = r),
              (this.i18nService = s);
          }
          ngOnInit() {
            la.a.production && ha.enableProductionMode(),
              Ha.debug('init'),
              this.i18nService.init(la.a.defaultLanguage, la.a.supportedLanguages);
            const t = this.router.events.pipe(Ft((t) => t instanceof vs));
            Object(jn.a)(this.translateService.onLangChange, t)
              .pipe(
                Object(l.a)(() => {
                  let t = this.activatedRoute;
                  for (; t.firstChild; ) t = t.firstChild;
                  return t;
                }),
                Ft((t) => 'primary' === t.outlet),
                Je((t) => t.data),
                (function (t, e = 'ngOnDestroy') {
                  return (n) => {
                    const r = t[e],
                      s = 'function' == typeof r;
                    if (!s) throw new Error(`${t.constructor.name} is using untilDestroyed but doesn't implement ${e}`);
                    return (
                      t[ga] ||
                        ((t[ga] = new Re.a()),
                        (t[e] = function () {
                          s && r.apply(this, arguments), t[ga].next(), t[ga].complete();
                        })),
                      n.pipe(Pn(t[ga]))
                    );
                  };
                })(this)
              )
              .subscribe((t) => {
                const e = t.title;
                e && this.titleService.setTitle(this.translateService.instant(e));
              });
          }
          ngOnDestroy() {
            this.i18nService.destroy();
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(No), s.Mb(Ei), s.Mb(r.b), s.Mb(_n), s.Mb(Ca));
          }),
          (t.ɵcmp = s.Gb({
            type: t,
            selectors: [['app-root']],
            decls: 2,
            vars: 0,
            template: function (t, e) {
              1 & t && (s.Nb(0, 'router-outlet'), s.Ac(1, '\n'));
            },
            directives: [Uo],
            styles: [''],
          })),
          t
        );
      })();
      const za = [{ path: '**', redirectTo: '', pathMatch: 'full' }];
      let $a = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [],
              imports: [[Jo.forRoot(za)], Jo],
            })),
            t
          );
        })(),
        qa = (() => {
          class t {
            constructor(t) {
              (this.http = t), (this.url = 'https://numerosm-1f94a.firebaseio.com');
            }
            guardarMultiplo(t) {
              return this.http.post(this.url + '/multiplos.json', t);
            }
            obtenerMultiploId(t) {
              return this.http.get(`${this.url}/multiplos/${t}`);
            }
            obtenerMultiplos() {
              return this.http.get(this.url + '/multiplos.json').pipe(Object(l.a)((t) => this.crearArreglo(t)));
            }
            crearArreglo(t) {
              const e = [];
              return (
                Object.keys(t).forEach((n) => {
                  const r = t[n];
                  (r.id = n), e.push(r);
                }),
                e
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Zb(se));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          );
        })();
      function Ba(t, e) {
        if (
          (1 & t &&
            (s.Rb(0, 'tr'),
            s.Ac(1, '\n              '),
            s.Rb(2, 'th', 14),
            s.Ac(3),
            s.Qb(),
            s.Ac(4, '\n              '),
            s.Rb(5, 'td', 10),
            s.Ac(6),
            s.Qb(),
            s.Ac(7, '\n              '),
            s.Rb(8, 'td', 11),
            s.Ac(9),
            s.Qb(),
            s.Ac(10, '\n              '),
            s.Rb(11, 'td', 12),
            s.Ac(12),
            s.Qb(),
            s.Ac(13, '\n            '),
            s.Qb()),
          2 & t)
        ) {
          const t = e.$implicit;
          s.zb(2),
            s.kc('ngClass', 0 != t.userNumber ? 'text-success' : 'mb-0'),
            s.zb(1),
            s.Bc(t.userNumber),
            s.zb(3),
            s.Bc(t.multiplo3),
            s.zb(3),
            s.Bc(t.multiplo5),
            s.zb(3),
            s.Bc(t.multiplo7);
        }
      }
      const Ga = [
        ja.childRoutes([
          { path: '', redirectTo: '/home', pathMatch: 'full' },
          {
            path: 'Multiplos',
            component: (() => {
              class t {
                constructor(t) {
                  (this._ms = t),
                    (this.multiplo3 = []),
                    (this.multiplo5 = []),
                    (this.multiplo7 = []),
                    (this.multiplos = []),
                    (this.primerMultiplo = !1);
                }
                ngOnInit() {
                  this.crearFormulario(), this.consultarMultiplos();
                }
                crearFormulario() {
                  this.formMultiplo = new ht({
                    id: new ut(''),
                    userNumber: new ut('', [R.required, R.maxLength(2)]),
                    multiplo3: new ut(''),
                    multiplo5: new ut(''),
                    multiplo7: new ut(''),
                  });
                }
                consultarMultiplos() {
                  this._ms.obtenerMultiplos().subscribe((t) => {
                    (this.multiplos = t),
                      console.log(t),
                      this.multiplos.forEach((t) => {
                        '' != t.multiplo3 && (this.primerMultiplo = !0);
                      });
                  });
                }
                obtenerMultiplos() {
                  console.log(this.formMultiplo.value);
                  let t = this.formMultiplo.get('userNumber').value;
                  t = JSON.parse(t);
                  for (let n = 0; n < t; n++) {
                    let t = n % 5,
                      e = n % 7;
                    0 == n % 3
                      ? (this.multiplo3.push(n), this.formMultiplo.get('multiplo3').setValue(this.multiplo3))
                      : 0 == t
                      ? (this.multiplo5.push(n), this.formMultiplo.get('multiplo5').setValue(this.multiplo5))
                      : 0 == e && (this.multiplo7.push(n), this.formMultiplo.get('multiplo7').setValue(this.multiplo7));
                  }
                  let e = this.formMultiplo.getRawValue();
                  (e.userNumber = JSON.parse(e.userNumber)),
                    console.log(this.formMultiplo.value),
                    this._ms.guardarMultiplo(e).subscribe((t) => {
                      (e.id = t.name),
                        this.consultarMultiplos(),
                        (this.multiplo3 = []),
                        (this.multiplo5 = []),
                        (this.multiplo7 = []),
                        this.formMultiplo.reset();
                    });
                }
              }
              return (
                (t.ɵfac = function (e) {
                  return new (e || t)(s.Mb(qa));
                }),
                (t.ɵcmp = s.Gb({
                  type: t,
                  selectors: [['app-multiplos']],
                  decls: 55,
                  vars: 3,
                  consts: [
                    [1, 'row', 'container'],
                    [1, 'col-md-12'],
                    [1, 'form-inline', 3, 'formGroup'],
                    [1, 'form-group', 'mb-2'],
                    [1, 'form-group', 'mx-sm-3', 'mb-2'],
                    [
                      'type',
                      'text',
                      'placeholder',
                      'S\xf3lo n\xfameros',
                      'formControlName',
                      'userNumber',
                      'maxlength',
                      '2',
                      1,
                      'form-control',
                    ],
                    ['type', 'button', 1, 'btn', 'btn-primary', 'mb-2', 3, 'disabled', 'click'],
                    [1, 'row'],
                    [1, 'container'],
                    [1, 'table', 'table-striped'],
                    [1, 'text-success'],
                    [1, 'text-danger'],
                    [1, 'text-primary'],
                    [4, 'ngFor', 'ngForOf'],
                    [3, 'ngClass'],
                  ],
                  template: function (t, e) {
                    1 & t &&
                      (s.Rb(0, 'div', 0),
                      s.Ac(1, '\n  '),
                      s.Rb(2, 'div', 1),
                      s.Ac(3, '\n    '),
                      s.Rb(4, 'form', 2),
                      s.Ac(5, '\n      '),
                      s.Rb(6, 'div', 3),
                      s.Ac(7, '\n        '),
                      s.Rb(8, 'label'),
                      s.Ac(9, 'N\xfamero'),
                      s.Qb(),
                      s.Ac(10, '\n      '),
                      s.Qb(),
                      s.Ac(11, '\n      '),
                      s.Rb(12, 'div', 4),
                      s.Ac(13, '\n        '),
                      s.Nb(14, 'input', 5),
                      s.Ac(15, '\n      '),
                      s.Qb(),
                      s.Ac(16, '\n      '),
                      s.Rb(17, 'button', 6),
                      s.dc('click', function () {
                        return e.obtenerMultiplos();
                      }),
                      s.Ac(18, '\n        Guardar\n      '),
                      s.Qb(),
                      s.Ac(19, '\n    '),
                      s.Qb(),
                      s.Ac(20, '\n\n    '),
                      s.Rb(21, 'div', 7),
                      s.Ac(22, '\n      '),
                      s.Rb(23, 'div', 8),
                      s.Ac(24, '\n        '),
                      s.Rb(25, 'table', 9),
                      s.Ac(26, '\n          '),
                      s.Rb(27, 'thead'),
                      s.Ac(28, '\n            '),
                      s.Rb(29, 'tr'),
                      s.Ac(30, '\n              '),
                      s.Rb(31, 'th'),
                      s.Ac(32, 'User number'),
                      s.Qb(),
                      s.Ac(33, '\n              '),
                      s.Rb(34, 'th', 10),
                      s.Ac(35, 'Multiplos 3'),
                      s.Qb(),
                      s.Ac(36, '\n              '),
                      s.Rb(37, 'th', 11),
                      s.Ac(38, 'Multiplos 5'),
                      s.Qb(),
                      s.Ac(39, '\n              '),
                      s.Rb(40, 'th', 12),
                      s.Ac(41, 'Multiplos 7'),
                      s.Qb(),
                      s.Ac(42, '\n            '),
                      s.Qb(),
                      s.Ac(43, '\n          '),
                      s.Qb(),
                      s.Ac(44, '\n          '),
                      s.Rb(45, 'tbody'),
                      s.Ac(46, '\n            '),
                      s.yc(47, Ba, 14, 5, 'tr', 13),
                      s.Ac(48, '\n          '),
                      s.Qb(),
                      s.Ac(49, '\n        '),
                      s.Qb(),
                      s.Ac(50, '\n      '),
                      s.Qb(),
                      s.Ac(51, '\n    '),
                      s.Qb(),
                      s.Ac(52, '\n  '),
                      s.Qb(),
                      s.Ac(53, '\n'),
                      s.Qb(),
                      s.Ac(54, '\n')),
                      2 & t &&
                        (s.zb(4),
                        s.kc('formGroup', e.formMultiplo),
                        s.zb(13),
                        s.kc('disabled', e.formMultiplo.invalid),
                        s.zb(30),
                        s.kc('ngForOf', e.multiplos));
                  },
                  directives: [gt, O, yt, y, x, xt, At, i.j, i.i],
                  styles: [''],
                })),
                t
              );
            })(),
            data: { title: 'multiplos' },
          },
        ]),
      ];
      let Za = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [],
              imports: [[Jo.forChild(Ga)], Jo],
            })),
            t
          );
        })(),
        Wa = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b, Sn, pa, It, Rt, ma, Za, ve]],
            })),
            t
          );
        })(),
        Qa = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t, bootstrap: [Ua] })),
            (t.ɵinj = s.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [],
              imports: [[r.a, It, ve, Sn.forRoot(), qr, pa, ma, Ma, Pa, Wa, Fa, $a]],
            })),
            t
          );
        })();
    },
    ZUHj: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('51Dv'),
        s = n('SeVD'),
        i = n('HDdC');
      function o(t, e, n, o, a = new r.a(t, n, o)) {
        if (!a.closed) return e instanceof i.a ? e.subscribe(a) : Object(s.a)(e)(a);
      }
    },
    bHdf: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('5+tZ'),
        s = n('SpAZ');
      function i(t = Number.POSITIVE_INFINITY) {
        return Object(r.a)(s.a, t);
      }
    },
    c2HN: function (t, e, n) {
      'use strict';
      function r(t) {
        return !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    fXoL: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return Ai;
      }),
        n.d(e, 'b', function () {
          return _c;
        }),
        n.d(e, 'c', function () {
          return gc;
        }),
        n.d(e, 'd', function () {
          return fc;
        }),
        n.d(e, 'e', function () {
          return pc;
        }),
        n.d(e, 'f', function () {
          return du;
        }),
        n.d(e, 'g', function () {
          return nu;
        }),
        n.d(e, 'h', function () {
          return ui;
        }),
        n.d(e, 'i', function () {
          return Rc;
        }),
        n.d(e, 'j', function () {
          return ua;
        }),
        n.d(e, 'k', function () {
          return Sc;
        }),
        n.d(e, 'l', function () {
          return ha;
        }),
        n.d(e, 'm', function () {
          return vn;
        }),
        n.d(e, 'n', function () {
          return Bl;
        }),
        n.d(e, 'o', function () {
          return G;
        }),
        n.d(e, 'p', function () {
          return u;
        }),
        n.d(e, 'q', function () {
          return B;
        }),
        n.d(e, 'r', function () {
          return Oi;
        }),
        n.d(e, 's', function () {
          return Ia;
        }),
        n.d(e, 't', function () {
          return Ra;
        }),
        n.d(e, 'u', function () {
          return Cc;
        }),
        n.d(e, 'v', function () {
          return ot;
        }),
        n.d(e, 'w', function () {
          return su;
        }),
        n.d(e, 'x', function () {
          return it;
        }),
        n.d(e, 'y', function () {
          return Jc;
        }),
        n.d(e, 'z', function () {
          return Pc;
        }),
        n.d(e, 'A', function () {
          return h;
        }),
        n.d(e, 'B', function () {
          return vc;
        }),
        n.d(e, 'C', function () {
          return yc;
        }),
        n.d(e, 'D', function () {
          return ga;
        }),
        n.d(e, 'E', function () {
          return fa;
        }),
        n.d(e, 'F', function () {
          return pa;
        }),
        n.d(e, 'G', function () {
          return ba;
        }),
        n.d(e, 'H', function () {
          return ar;
        }),
        n.d(e, 'I', function () {
          return f;
        }),
        n.d(e, 'J', function () {
          return au;
        }),
        n.d(e, 'K', function () {
          return Pa;
        }),
        n.d(e, 'L', function () {
          return $c;
        }),
        n.d(e, 'M', function () {
          return ya;
        }),
        n.d(e, 'N', function () {
          return La;
        }),
        n.d(e, 'O', function () {
          return mt;
        }),
        n.d(e, 'P', function () {
          return Pi;
        }),
        n.d(e, 'Q', function () {
          return Yc;
        }),
        n.d(e, 'R', function () {
          return Ln;
        }),
        n.d(e, 'S', function () {
          return I;
        }),
        n.d(e, 'T', function () {
          return Mn;
        }),
        n.d(e, 'U', function () {
          return uu;
        }),
        n.d(e, 'V', function () {
          return Gc;
        }),
        n.d(e, 'W', function () {
          return wc;
        }),
        n.d(e, 'X', function () {
          return di;
        }),
        n.d(e, 'Y', function () {
          return Xa;
        }),
        n.d(e, 'Z', function () {
          return ir;
        }),
        n.d(e, 'ab', function () {
          return ur;
        }),
        n.d(e, 'bb', function () {
          return Un;
        }),
        n.d(e, 'cb', function () {
          return An;
        }),
        n.d(e, 'db', function () {
          return Tn;
        }),
        n.d(e, 'eb', function () {
          return Dn;
        }),
        n.d(e, 'fb', function () {
          return Rn;
        }),
        n.d(e, 'gb', function () {
          return In;
        }),
        n.d(e, 'hb', function () {
          return jn;
        }),
        n.d(e, 'ib', function () {
          return Qa;
        }),
        n.d(e, 'jb', function () {
          return cu;
        }),
        n.d(e, 'kb', function () {
          return Ka;
        }),
        n.d(e, 'lb', function () {
          return Ja;
        }),
        n.d(e, 'mb', function () {
          return kn;
        }),
        n.d(e, 'nb', function () {
          return L;
        }),
        n.d(e, 'ob', function () {
          return Mi;
        }),
        n.d(e, 'pb', function () {
          return ro;
        }),
        n.d(e, 'qb', function () {
          return no;
        }),
        n.d(e, 'rb', function () {
          return Ni;
        }),
        n.d(e, 'sb', function () {
          return Wa;
        }),
        n.d(e, 'tb', function () {
          return Ht;
        }),
        n.d(e, 'ub', function () {
          return A;
        }),
        n.d(e, 'vb', function () {
          return On;
        }),
        n.d(e, 'wb', function () {
          return Bo;
        }),
        n.d(e, 'xb', function () {
          return Jo;
        }),
        n.d(e, 'yb', function () {
          return aa;
        }),
        n.d(e, 'zb', function () {
          return Rr;
        }),
        n.d(e, 'Ab', function () {
          return Ui;
        }),
        n.d(e, 'Bb', function () {
          return xo;
        }),
        n.d(e, 'Cb', function () {
          return Uo;
        }),
        n.d(e, 'Db', function () {
          return zo;
        }),
        n.d(e, 'Eb', function () {
          return Eo;
        }),
        n.d(e, 'Fb', function () {
          return sc;
        }),
        n.d(e, 'Gb', function () {
          return _t;
        }),
        n.d(e, 'Hb', function () {
          return At;
        }),
        n.d(e, 'Ib', function () {
          return b;
        }),
        n.d(e, 'Jb', function () {
          return y;
        }),
        n.d(e, 'Kb', function () {
          return Et;
        }),
        n.d(e, 'Lb', function () {
          return kt;
        }),
        n.d(e, 'Mb', function () {
          return Bi;
        }),
        n.d(e, 'Nb', function () {
          return Yi;
        }),
        n.d(e, 'Ob', function () {
          return to;
        }),
        n.d(e, 'Pb', function () {
          return Xi;
        }),
        n.d(e, 'Qb', function () {
          return Ji;
        }),
        n.d(e, 'Rb', function () {
          return Ki;
        }),
        n.d(e, 'Sb', function () {
          return eo;
        }),
        n.d(e, 'Tb', function () {
          return gn;
        }),
        n.d(e, 'Ub', function () {
          return $o;
        }),
        n.d(e, 'Vb', function () {
          return Cl;
        }),
        n.d(e, 'Wb', function () {
          return Al;
        }),
        n.d(e, 'Xb', function () {
          return Sl;
        }),
        n.d(e, 'Yb', function () {
          return Ol;
        }),
        n.d(e, 'Zb', function () {
          return et;
        }),
        n.d(e, 'ac', function () {
          return Gi;
        }),
        n.d(e, 'bc', function () {
          return dc;
        }),
        n.d(e, 'cc', function () {
          return Zi;
        }),
        n.d(e, 'dc', function () {
          return so;
        }),
        n.d(e, 'ec', function () {
          return ac;
        }),
        n.d(e, 'fc', function () {
          return ao;
        }),
        n.d(e, 'gc', function () {
          return $l;
        }),
        n.d(e, 'hc', function () {
          return ql;
        }),
        n.d(e, 'ic', function () {
          return fo;
        }),
        n.d(e, 'jc', function () {
          return co;
        }),
        n.d(e, 'kc', function () {
          return Wi;
        }),
        n.d(e, 'lc', function () {
          return po;
        }),
        n.d(e, 'mc', function () {
          return go;
        }),
        n.d(e, 'nc', function () {
          return Vl;
        }),
        n.d(e, 'oc', function () {
          return Fl;
        }),
        n.d(e, 'pc', function () {
          return Hl;
        }),
        n.d(e, 'qc', function () {
          return nc;
        }),
        n.d(e, 'rc', function () {
          return qi;
        }),
        n.d(e, 'sc', function () {
          return oe;
        }),
        n.d(e, 'tc', function () {
          return hr;
        }),
        n.d(e, 'uc', function () {
          return xt;
        }),
        n.d(e, 'vc', function () {
          return ic;
        }),
        n.d(e, 'wc', function () {
          return rc;
        }),
        n.d(e, 'xc', function () {
          return So;
        }),
        n.d(e, 'yc', function () {
          return $i;
        }),
        n.d(e, 'zc', function () {
          return hc;
        }),
        n.d(e, 'Ac', function () {
          return Lo;
        }),
        n.d(e, 'Bc', function () {
          return Vo;
        }),
        n.d(e, 'Cc', function () {
          return Fo;
        }),
        n.d(e, 'Dc', function () {
          return Ho;
        });
      var r = n('XNiG'),
        s = n('quSY'),
        i = n('HDdC'),
        o = n('VRyK'),
        a = n('w1tV');
      function l(t) {
        return { toString: t }.toString();
      }
      function c(t, e, n) {
        return l(() => {
          const r = (function (t) {
            return function (...e) {
              if (t) {
                const n = t(...e);
                for (const t in n) this[t] = n[t];
              }
            };
          })(e);
          function s(...t) {
            if (this instanceof s) return r.apply(this, t), this;
            const e = new s(...t);
            return (n.annotation = e), n;
            function n(t, n, r) {
              const s = t.hasOwnProperty('__parameters__')
                ? t.__parameters__
                : Object.defineProperty(t, '__parameters__', { value: [] }).__parameters__;
              for (; s.length <= r; ) s.push(null);
              return (s[r] = s[r] || []).push(e), t;
            }
          }
          return (
            n && (s.prototype = Object.create(n.prototype)), (s.prototype.ngMetadataName = t), (s.annotationCls = s), s
          );
        });
      }
      const u = c('Inject', (t) => ({ token: t })),
        h = c('Optional'),
        d = c('Self'),
        f = c('SkipSelf');
      var p = (function (t) {
        return (
          (t[(t.Default = 0)] = 'Default'),
          (t[(t.Host = 1)] = 'Host'),
          (t[(t.Self = 2)] = 'Self'),
          (t[(t.SkipSelf = 4)] = 'SkipSelf'),
          (t[(t.Optional = 8)] = 'Optional'),
          t
        );
      })({});
      function g(t) {
        for (let e in t) if (t[e] === g) return e;
        throw Error('Could not find renamed property on target object.');
      }
      function m(t, e) {
        for (const n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n]);
      }
      function b(t) {
        return { token: t.token, providedIn: t.providedIn || null, factory: t.factory, value: void 0 };
      }
      function y(t) {
        return { factory: t.factory, providers: t.providers || [], imports: t.imports || [] };
      }
      function v(t) {
        return _(t, t[C]) || _(t, t[x]);
      }
      function _(t, e) {
        return e && e.token === t ? e : null;
      }
      function w(t) {
        return t && (t.hasOwnProperty(S) || t.hasOwnProperty(O)) ? t[S] : null;
      }
      const C = g({ ɵprov: g }),
        S = g({ ɵinj: g }),
        E = g({ ɵprovFallback: g }),
        x = g({ ngInjectableDef: g }),
        O = g({ ngInjectorDef: g });
      function A(t) {
        if ('string' == typeof t) return t;
        if (Array.isArray(t)) return '[' + t.map(A).join(', ') + ']';
        if (null == t) return '' + t;
        if (t.overriddenName) return '' + t.overriddenName;
        if (t.name) return '' + t.name;
        const e = t.toString();
        if (null == e) return '' + e;
        const n = e.indexOf('\n');
        return -1 === n ? e : e.substring(0, n);
      }
      function k(t, e) {
        return null == t || '' === t ? (null === e ? '' : e) : null == e || '' === e ? t : t + ' ' + e;
      }
      const T = g({ __forward_ref__: g });
      function I(t) {
        return (
          (t.__forward_ref__ = I),
          (t.toString = function () {
            return A(this());
          }),
          t
        );
      }
      function R(t) {
        return j(t) ? t() : t;
      }
      function j(t) {
        return 'function' == typeof t && t.hasOwnProperty(T) && t.__forward_ref__ === I;
      }
      const D = 'undefined' != typeof globalThis && globalThis,
        N = 'undefined' != typeof window && window,
        P =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        M = 'undefined' != typeof global && global,
        L = D || M || N || P,
        V = g({ ɵcmp: g }),
        F = g({ ɵdir: g }),
        H = g({ ɵpipe: g }),
        U = g({ ɵmod: g }),
        z = g({ ɵloc: g }),
        $ = g({ ɵfac: g }),
        q = g({ __NG_ELEMENT_ID__: g });
      class B {
        constructor(t, e) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ɵprov = b({ token: this, providedIn: e.providedIn || 'root', factory: e.factory }));
        }
        toString() {
          return 'InjectionToken ' + this._desc;
        }
      }
      const G = new B('INJECTOR', -1),
        Z = {},
        W = /\n/gm,
        Q = g({ provide: String, useValue: g });
      let K,
        J = void 0;
      function Y(t) {
        const e = J;
        return (J = t), e;
      }
      function X(t) {
        const e = K;
        return (K = t), e;
      }
      function tt(t, e = p.Default) {
        if (void 0 === J) throw new Error('inject() must be called from an injection context');
        return null === J ? nt(t, void 0, e) : J.get(t, e & p.Optional ? null : void 0, e);
      }
      function et(t, e = p.Default) {
        return (K || tt)(R(t), e);
      }
      function nt(t, e, n) {
        const r = v(t);
        if (r && 'root' == r.providedIn) return void 0 === r.value ? (r.value = r.factory()) : r.value;
        if (n & p.Optional) return null;
        if (void 0 !== e) return e;
        throw new Error(`Injector: NOT_FOUND [${A(t)}]`);
      }
      function rt(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
          const r = R(t[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new Error('Arguments array must have arguments.');
            let t = void 0,
              n = p.Default;
            for (let e = 0; e < r.length; e++) {
              const s = r[e];
              s instanceof h || 'Optional' === s.ngMetadataName || s === h
                ? (n |= p.Optional)
                : s instanceof f || 'SkipSelf' === s.ngMetadataName || s === f
                ? (n |= p.SkipSelf)
                : s instanceof d || 'Self' === s.ngMetadataName || s === d
                ? (n |= p.Self)
                : (t = s instanceof u || s === u ? s.token : s);
            }
            e.push(et(t, n));
          } else e.push(et(r));
        }
        return e;
      }
      class st {
        get(t, e = Z) {
          if (e === Z) {
            const e = new Error(`NullInjectorError: No provider for ${A(t)}!`);
            throw ((e.name = 'NullInjectorError'), e);
          }
          return e;
        }
      }
      class it {}
      class ot {}
      function at(t, e) {
        for (let n = 0; n < t.length; n++) e.push(t[n]);
      }
      function lt(t, e) {
        t.forEach((t) => (Array.isArray(t) ? lt(t, e) : e(t)));
      }
      function ct(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function ut(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      function ht(t, e) {
        const n = [];
        for (let r = 0; r < t; r++) n.push(e);
        return n;
      }
      function dt(t, e, n) {
        let r = pt(t, e);
        return (
          r >= 0
            ? (t[1 | r] = n)
            : ((r = ~r),
              (function (t, e, n, r) {
                let s = t.length;
                if (s == e) t.push(n, r);
                else if (1 === s) t.push(r, t[0]), (t[0] = n);
                else {
                  for (s--, t.push(t[s - 1], t[s]); s > e; ) (t[s] = t[s - 2]), s--;
                  (t[e] = n), (t[e + 1] = r);
                }
              })(t, r, e, n)),
          r
        );
      }
      function ft(t, e) {
        const n = pt(t, e);
        if (n >= 0) return t[1 | n];
      }
      function pt(t, e) {
        return (function (t, e, n) {
          let r = 0,
            s = t.length >> 1;
          for (; s !== r; ) {
            const n = r + ((s - r) >> 1),
              i = t[n << 1];
            if (e === i) return n << 1;
            i > e ? (s = n) : (r = n + 1);
          }
          return ~(s << 1);
        })(t, e);
      }
      const gt = (function () {
          var t = { OnPush: 0, Default: 1 };
          return (t[t.OnPush] = 'OnPush'), (t[t.Default] = 'Default'), t;
        })(),
        mt = (function () {
          var t = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (t[t.Emulated] = 'Emulated'),
            (t[t.Native] = 'Native'),
            (t[t.None] = 'None'),
            (t[t.ShadowDom] = 'ShadowDom'),
            t
          );
        })(),
        bt = {},
        yt = [];
      let vt = 0;
      function _t(t) {
        return l(() => {
          const e = t.type,
            n = e.prototype,
            r = {},
            s = {
              type: e,
              providersResolver: null,
              decls: t.decls,
              vars: t.vars,
              factory: null,
              template: t.template || null,
              consts: t.consts || null,
              ngContentSelectors: t.ngContentSelectors,
              hostBindings: t.hostBindings || null,
              hostVars: t.hostVars || 0,
              hostAttrs: t.hostAttrs || null,
              contentQueries: t.contentQueries || null,
              declaredInputs: r,
              inputs: null,
              outputs: null,
              exportAs: t.exportAs || null,
              onChanges: null,
              onInit: n.ngOnInit || null,
              doCheck: n.ngDoCheck || null,
              afterContentInit: n.ngAfterContentInit || null,
              afterContentChecked: n.ngAfterContentChecked || null,
              afterViewInit: n.ngAfterViewInit || null,
              afterViewChecked: n.ngAfterViewChecked || null,
              onDestroy: n.ngOnDestroy || null,
              onPush: t.changeDetection === gt.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: t.selectors || yt,
              viewQuery: t.viewQuery || null,
              features: t.features || null,
              data: t.data || {},
              encapsulation: t.encapsulation || mt.Emulated,
              id: 'c',
              styles: t.styles || yt,
              _: null,
              setInput: null,
              schemas: t.schemas || null,
              tView: null,
            },
            i = t.directives,
            o = t.features,
            a = t.pipes;
          return (
            (s.id += vt++),
            (s.inputs = Ot(t.inputs, r)),
            (s.outputs = Ot(t.outputs)),
            o && o.forEach((t) => t(s)),
            (s.directiveDefs = i ? () => ('function' == typeof i ? i() : i).map(wt) : null),
            (s.pipeDefs = a ? () => ('function' == typeof a ? a() : a).map(Ct) : null),
            s
          );
        });
      }
      function wt(t) {
        return (
          Tt(t) ||
          (function (t) {
            return t[F] || null;
          })(t)
        );
      }
      function Ct(t) {
        return (function (t) {
          return t[H] || null;
        })(t);
      }
      const St = {};
      function Et(t) {
        const e = {
          type: t.type,
          bootstrap: t.bootstrap || yt,
          declarations: t.declarations || yt,
          imports: t.imports || yt,
          exports: t.exports || yt,
          transitiveCompileScopes: null,
          schemas: t.schemas || null,
          id: t.id || null,
        };
        return (
          null != t.id &&
            l(() => {
              St[t.id] = t.type;
            }),
          e
        );
      }
      function xt(t, e) {
        return l(() => {
          const n = Rt(t, !0);
          (n.declarations = e.declarations || yt), (n.imports = e.imports || yt), (n.exports = e.exports || yt);
        });
      }
      function Ot(t, e) {
        if (null == t) return bt;
        const n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            let s = t[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])), (n[s] = r), e && (e[s] = i);
          }
        return n;
      }
      const At = _t;
      function kt(t) {
        return {
          type: t.type,
          name: t.name,
          factory: null,
          pure: !1 !== t.pure,
          onDestroy: t.type.prototype.ngOnDestroy || null,
        };
      }
      function Tt(t) {
        return t[V] || null;
      }
      function It(t, e) {
        return t.hasOwnProperty($) ? t[$] : null;
      }
      function Rt(t, e) {
        const n = t[U] || null;
        if (!n && !0 === e) throw new Error(`Type ${A(t)} does not have '\u0275mod' property.`);
        return n;
      }
      function jt(t) {
        return Array.isArray(t) && 'object' == typeof t[1];
      }
      function Dt(t) {
        return Array.isArray(t) && !0 === t[1];
      }
      function Nt(t) {
        return 0 != (8 & t.flags);
      }
      function Pt(t) {
        return 2 == (2 & t.flags);
      }
      function Mt(t) {
        return 1 == (1 & t.flags);
      }
      function Lt(t) {
        return null !== t.template;
      }
      function Vt(t) {
        return 0 != (512 & t[2]);
      }
      let Ft = void 0;
      function Ht(t) {
        Ft = t;
      }
      function Ut() {
        return void 0 !== Ft ? Ft : 'undefined' != typeof document ? document : void 0;
      }
      function zt(t) {
        return !!t.listen;
      }
      const $t = { createRenderer: (t, e) => Ut() };
      function qt(t) {
        for (; Array.isArray(t); ) t = t[0];
        return t;
      }
      function Bt(t, e) {
        return qt(e[t + 20]);
      }
      function Gt(t, e) {
        return qt(e[t.index]);
      }
      function Zt(t, e) {
        return t.data[e + 20];
      }
      function Wt(t, e) {
        return t[e + 20];
      }
      function Qt(t, e) {
        const n = e[t];
        return jt(n) ? n : n[0];
      }
      function Kt(t) {
        const e = (function (t) {
          return t.__ngContext__ || null;
        })(t);
        return e ? (Array.isArray(e) ? e : e.lView) : null;
      }
      function Jt(t) {
        return 4 == (4 & t[2]);
      }
      function Yt(t) {
        return 128 == (128 & t[2]);
      }
      function Xt(t, e) {
        return null === t || null == e ? null : t[e];
      }
      function te(t) {
        t[18] = 0;
      }
      function ee(t, e) {
        t[5] += e;
        let n = t,
          r = t[3];
        for (; null !== r && ((1 === e && 1 === n[5]) || (-1 === e && 0 === n[5])); ) (r[5] += e), (n = r), (r = r[3]);
      }
      const ne = { lFrame: Ee(null), bindingsEnabled: !0, checkNoChangesMode: !1 };
      function re() {
        return ne.bindingsEnabled;
      }
      function se() {
        return ne.lFrame.lView;
      }
      function ie() {
        return ne.lFrame.tView;
      }
      function oe(t) {
        ne.lFrame.contextLView = t;
      }
      function ae() {
        return ne.lFrame.previousOrParentTNode;
      }
      function le(t, e) {
        (ne.lFrame.previousOrParentTNode = t), (ne.lFrame.isParent = e);
      }
      function ce() {
        return ne.lFrame.isParent;
      }
      function ue() {
        ne.lFrame.isParent = !1;
      }
      function he() {
        return ne.checkNoChangesMode;
      }
      function de(t) {
        ne.checkNoChangesMode = t;
      }
      function fe() {
        const t = ne.lFrame;
        let e = t.bindingRootIndex;
        return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e;
      }
      function pe() {
        return ne.lFrame.bindingIndex;
      }
      function ge() {
        return ne.lFrame.bindingIndex++;
      }
      function me(t) {
        const e = ne.lFrame,
          n = e.bindingIndex;
        return (e.bindingIndex = e.bindingIndex + t), n;
      }
      function be(t, e) {
        const n = ne.lFrame;
        (n.bindingIndex = n.bindingRootIndex = t), ye(e);
      }
      function ye(t) {
        ne.lFrame.currentDirectiveIndex = t;
      }
      function ve() {
        return ne.lFrame.currentQueryIndex;
      }
      function _e(t) {
        ne.lFrame.currentQueryIndex = t;
      }
      function we(t, e) {
        const n = Se();
        (ne.lFrame = n), (n.previousOrParentTNode = e), (n.lView = t);
      }
      function Ce(t, e) {
        const n = Se(),
          r = t[1];
        (ne.lFrame = n),
          (n.previousOrParentTNode = e),
          (n.lView = t),
          (n.tView = r),
          (n.contextLView = t),
          (n.bindingIndex = r.bindingStartIndex);
      }
      function Se() {
        const t = ne.lFrame,
          e = null === t ? null : t.child;
        return null === e ? Ee(t) : e;
      }
      function Ee(t) {
        const e = {
          previousOrParentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: 0,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentSanitizer: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: t,
          child: null,
        };
        return null !== t && (t.child = e), e;
      }
      function xe() {
        const t = ne.lFrame;
        return (ne.lFrame = t.parent), (t.previousOrParentTNode = null), (t.lView = null), t;
      }
      const Oe = xe;
      function Ae() {
        const t = xe();
        (t.isParent = !0),
          (t.tView = null),
          (t.selectedIndex = 0),
          (t.contextLView = null),
          (t.elementDepthCount = 0),
          (t.currentDirectiveIndex = -1),
          (t.currentNamespace = null),
          (t.currentSanitizer = null),
          (t.bindingRootIndex = -1),
          (t.bindingIndex = -1),
          (t.currentQueryIndex = 0);
      }
      function ke() {
        return ne.lFrame.selectedIndex;
      }
      function Te(t) {
        ne.lFrame.selectedIndex = t;
      }
      function Ie() {
        const t = ne.lFrame;
        return Zt(t.tView, t.selectedIndex);
      }
      function Re(t, e) {
        for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
          const e = t.data[n];
          e.afterContentInit && (t.contentHooks || (t.contentHooks = [])).push(-n, e.afterContentInit),
            e.afterContentChecked &&
              ((t.contentHooks || (t.contentHooks = [])).push(n, e.afterContentChecked),
              (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, e.afterContentChecked)),
            e.afterViewInit && (t.viewHooks || (t.viewHooks = [])).push(-n, e.afterViewInit),
            e.afterViewChecked &&
              ((t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewChecked),
              (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, e.afterViewChecked)),
            null != e.onDestroy && (t.destroyHooks || (t.destroyHooks = [])).push(n, e.onDestroy);
        }
      }
      function je(t, e, n) {
        Pe(t, e, 3, n);
      }
      function De(t, e, n, r) {
        (3 & t[2]) === n && Pe(t, e, n, r);
      }
      function Ne(t, e) {
        let n = t[2];
        (3 & n) === e && ((n &= 2047), (n += 1), (t[2] = n));
      }
      function Pe(t, e, n, r) {
        const s = null != r ? r : -1;
        let i = 0;
        for (let o = void 0 !== r ? 65535 & t[18] : 0; o < e.length; o++)
          if ('number' == typeof e[o + 1]) {
            if (((i = e[o]), null != r && i >= r)) break;
          } else
            e[o] < 0 && (t[18] += 65536),
              (i < s || -1 == s) && (Me(t, n, e, o), (t[18] = (4294901760 & t[18]) + o + 2)),
              o++;
      }
      function Me(t, e, n, r) {
        const s = n[r] < 0,
          i = n[r + 1],
          o = t[s ? -n[r] : n[r]];
        s ? t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === e && ((t[2] += 2048), i.call(o)) : i.call(o);
      }
      class Le {
        constructor(t, e, n) {
          (this.factory = t), (this.resolving = !1), (this.canSeeViewProviders = e), (this.injectImpl = n);
        }
      }
      function Ve(t, e, n) {
        const r = zt(t);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if ('number' == typeof i) {
            if (0 !== i) break;
            s++;
            const o = n[s++],
              a = n[s++],
              l = n[s++];
            r ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l);
          } else {
            const o = i,
              a = n[++s];
            He(o) ? r && t.setProperty(e, o, a) : r ? t.setAttribute(e, o, a) : e.setAttribute(o, a), s++;
          }
        }
        return s;
      }
      function Fe(t) {
        return 3 === t || 4 === t || 6 === t;
      }
      function He(t) {
        return 64 === t.charCodeAt(0);
      }
      function Ue(t, e) {
        if (null === e || 0 === e.length);
        else if (null === t || 0 === t.length) t = e.slice();
        else {
          let n = -1;
          for (let r = 0; r < e.length; r++) {
            const s = e[r];
            'number' == typeof s ? (n = s) : 0 === n || ze(t, n, s, null, -1 === n || 2 === n ? e[++r] : null);
          }
        }
        return t;
      }
      function ze(t, e, n, r, s) {
        let i = 0,
          o = t.length;
        if (-1 === e) o = -1;
        else
          for (; i < t.length; ) {
            const n = t[i++];
            if ('number' == typeof n) {
              if (n === e) {
                o = -1;
                break;
              }
              if (n > e) {
                o = i - 1;
                break;
              }
            }
          }
        for (; i < t.length; ) {
          const e = t[i];
          if ('number' == typeof e) break;
          if (e === n) {
            if (null === r) return void (null !== s && (t[i + 1] = s));
            if (r === t[i + 1]) return void (t[i + 2] = s);
          }
          i++, null !== r && i++, null !== s && i++;
        }
        -1 !== o && (t.splice(o, 0, e), (i = o + 1)),
          t.splice(i++, 0, n),
          null !== r && t.splice(i++, 0, r),
          null !== s && t.splice(i++, 0, s);
      }
      function $e(t) {
        return -1 !== t;
      }
      function qe(t) {
        return 32767 & t;
      }
      function Be(t) {
        return t >> 16;
      }
      function Ge(t, e) {
        let n = Be(t),
          r = e;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      function Ze(t) {
        return 'string' == typeof t ? t : null == t ? '' : '' + t;
      }
      function We(t) {
        return 'function' == typeof t
          ? t.name || t.toString()
          : 'object' == typeof t && null != t && 'function' == typeof t.type
          ? t.type.name || t.type.toString()
          : Ze(t);
      }
      const Qe = (() =>
        (('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(L))();
      function Ke(t) {
        return t instanceof Function ? t() : t;
      }
      let Je = !0;
      function Ye(t) {
        const e = Je;
        return (Je = t), e;
      }
      let Xe = 0;
      function tn(t, e) {
        const n = nn(t, e);
        if (-1 !== n) return n;
        const r = e[1];
        r.firstCreatePass && ((t.injectorIndex = e.length), en(r.data, t), en(e, null), en(r.blueprint, null));
        const s = rn(t, e),
          i = t.injectorIndex;
        if ($e(s)) {
          const t = qe(s),
            n = Ge(s, e),
            r = n[1].data;
          for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s];
        }
        return (e[i + 8] = s), i;
      }
      function en(t, e) {
        t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
      }
      function nn(t, e) {
        return -1 === t.injectorIndex ||
          (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
          null == e[t.injectorIndex + 8]
          ? -1
          : t.injectorIndex;
      }
      function rn(t, e) {
        if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
        let n = e[6],
          r = 1;
        for (; n && -1 === n.injectorIndex; ) (n = (e = e[15]) ? e[6] : null), r++;
        return n ? n.injectorIndex | (r << 16) : -1;
      }
      function sn(t, e, n) {
        !(function (t, e, n) {
          let r = 'string' != typeof n ? n[q] : n.charCodeAt(0) || 0;
          null == r && (r = n[q] = Xe++);
          const s = 255 & r,
            i = 1 << s,
            o = 64 & s,
            a = 32 & s,
            l = e.data;
          128 & s
            ? o
              ? a
                ? (l[t + 7] |= i)
                : (l[t + 6] |= i)
              : a
              ? (l[t + 5] |= i)
              : (l[t + 4] |= i)
            : o
            ? a
              ? (l[t + 3] |= i)
              : (l[t + 2] |= i)
            : a
            ? (l[t + 1] |= i)
            : (l[t] |= i);
        })(t, e, n);
      }
      function on(t, e, n, r = p.Default, s) {
        if (null !== t) {
          const s = (function (t) {
            if ('string' == typeof t) return t.charCodeAt(0) || 0;
            const e = t[q];
            return 'number' == typeof e && e > 0 ? 255 & e : e;
          })(n);
          if ('function' == typeof s) {
            we(e, t);
            try {
              const t = s();
              if (null != t || r & p.Optional) return t;
              throw new Error(`No provider for ${We(n)}!`);
            } finally {
              Oe();
            }
          } else if ('number' == typeof s) {
            if (-1 === s) return new fn(t, e);
            let i = null,
              o = nn(t, e),
              a = -1,
              l = r & p.Host ? e[16][6] : null;
            for (
              (-1 === o || r & p.SkipSelf) &&
              ((a = -1 === o ? rn(t, e) : e[o + 8]), dn(r, !1) ? ((i = e[1]), (o = qe(a)), (e = Ge(a, e))) : (o = -1));
              -1 !== o;

            ) {
              a = e[o + 8];
              const t = e[1];
              if (hn(s, o, t.data)) {
                const t = ln(o, e, n, i, r, l);
                if (t !== an) return t;
              }
              dn(r, e[1].data[o + 8] === l) && hn(s, o, e) ? ((i = t), (o = qe(a)), (e = Ge(a, e))) : (o = -1);
            }
          }
        }
        if ((r & p.Optional && void 0 === s && (s = null), 0 == (r & (p.Self | p.Host)))) {
          const t = e[9],
            i = X(void 0);
          try {
            return t ? t.get(n, s, r & p.Optional) : nt(n, s, r & p.Optional);
          } finally {
            X(i);
          }
        }
        if (r & p.Optional) return s;
        throw new Error(`NodeInjector: NOT_FOUND [${We(n)}]`);
      }
      const an = {};
      function ln(t, e, n, r, s, i) {
        const o = e[1],
          a = o.data[t + 8],
          l = cn(a, o, n, null == r ? Pt(a) && Je : r != o && 3 === a.type, s & p.Host && i === a);
        return null !== l ? un(e, o, l, a) : an;
      }
      function cn(t, e, n, r, s) {
        const i = t.providerIndexes,
          o = e.data,
          a = 65535 & i,
          l = t.directiveStart,
          c = i >> 16,
          u = s ? a + c : t.directiveEnd;
        for (let h = r ? a : a + c; h < u; h++) {
          const t = o[h];
          if ((h < l && n === t) || (h >= l && t.type === n)) return h;
        }
        if (s) {
          const t = o[l];
          if (t && Lt(t) && t.type === n) return l;
        }
        return null;
      }
      function un(t, e, n, r) {
        let s = t[n];
        const i = e.data;
        if (s instanceof Le) {
          const o = s;
          if (o.resolving) throw new Error('Circular dep for ' + We(i[n]));
          const a = Ye(o.canSeeViewProviders);
          let l;
          (o.resolving = !0), o.injectImpl && (l = X(o.injectImpl)), we(t, r);
          try {
            (s = t[n] = o.factory(void 0, i, t, r)),
              e.firstCreatePass &&
                n >= r.directiveStart &&
                (function (t, e, n) {
                  const { onChanges: r, onInit: s, doCheck: i } = e;
                  r &&
                    ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, r),
                    (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, r)),
                    s && (n.preOrderHooks || (n.preOrderHooks = [])).push(-t, s),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i),
                      (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, i));
                })(n, i[n], e);
          } finally {
            o.injectImpl && X(l), Ye(a), (o.resolving = !1), Oe();
          }
        }
        return s;
      }
      function hn(t, e, n) {
        const r = 64 & t,
          s = 32 & t;
        let i;
        return (
          (i =
            128 & t
              ? r
                ? s
                  ? n[e + 7]
                  : n[e + 6]
                : s
                ? n[e + 5]
                : n[e + 4]
              : r
              ? s
                ? n[e + 3]
                : n[e + 2]
              : s
              ? n[e + 1]
              : n[e]),
          !!(i & (1 << t))
        );
      }
      function dn(t, e) {
        return !(t & p.Self || (t & p.Host && e));
      }
      class fn {
        constructor(t, e) {
          (this._tNode = t), (this._lView = e);
        }
        get(t, e) {
          return on(this._tNode, this._lView, t, void 0, e);
        }
      }
      function pn(t) {
        const e = t;
        if (j(t))
          return () => {
            const t = pn(R(e));
            return t ? t() : null;
          };
        let n = It(e);
        if (null === n) {
          const t = w(e);
          n = t && t.factory;
        }
        return n || null;
      }
      function gn(t) {
        return l(() => {
          const e = t.prototype.constructor,
            n = e[$] || pn(e),
            r = Object.prototype;
          let s = Object.getPrototypeOf(t.prototype).constructor;
          for (; s && s !== r; ) {
            const t = s[$] || pn(s);
            if (t && t !== n) return t;
            s = Object.getPrototypeOf(s);
          }
          return (t) => new t();
        });
      }
      function mn(t) {
        return t.ngDebugContext;
      }
      function bn(t) {
        return t.ngOriginalError;
      }
      function yn(t, ...e) {
        t.error(...e);
      }
      class vn {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            n = this._findContext(t),
            r = (function (t) {
              return t.ngErrorLogger || yn;
            })(t);
          r(this._console, 'ERROR', t),
            e && r(this._console, 'ORIGINAL ERROR', e),
            n && r(this._console, 'ERROR CONTEXT', n);
        }
        _findContext(t) {
          return t ? (mn(t) ? mn(t) : this._findContext(bn(t))) : null;
        }
        _findOriginalError(t) {
          let e = bn(t);
          for (; e && bn(e); ) e = bn(e);
          return e;
        }
      }
      class _n {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return (
            'SafeValue must use [property]=binding: ' +
            this.changingThisBreaksApplicationSecurity +
            ' (see http://g.co/ng/security#xss)'
          );
        }
      }
      class wn extends _n {
        getTypeName() {
          return 'HTML';
        }
      }
      class Cn extends _n {
        getTypeName() {
          return 'Style';
        }
      }
      class Sn extends _n {
        getTypeName() {
          return 'Script';
        }
      }
      class En extends _n {
        getTypeName() {
          return 'URL';
        }
      }
      class xn extends _n {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      function On(t) {
        return t instanceof _n ? t.changingThisBreaksApplicationSecurity : t;
      }
      function An(t, e) {
        const n = kn(t);
        if (null != n && n !== e) {
          if ('ResourceURL' === n && 'URL' === e) return !0;
          throw new Error(`Required a safe ${e}, got a ${n} (see http://g.co/ng/security#xss)`);
        }
        return n === e;
      }
      function kn(t) {
        return (t instanceof _n && t.getTypeName()) || null;
      }
      function Tn(t) {
        return new wn(t);
      }
      function In(t) {
        return new Cn(t);
      }
      function Rn(t) {
        return new Sn(t);
      }
      function jn(t) {
        return new En(t);
      }
      function Dn(t) {
        return new xn(t);
      }
      let Nn = !0,
        Pn = !1;
      function Mn() {
        return (Pn = !0), Nn;
      }
      function Ln() {
        if (Pn) throw new Error('Cannot enable prod mode after platform setup.');
        Nn = !1;
      }
      class Vn {
        constructor(t) {
          (this.defaultDoc = t),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument('sanitization-inert'));
          let e = this.inertDocument.body;
          if (null == e) {
            const t = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(t), (e = this.inertDocument.createElement('body')), t.appendChild(e);
          }
          (e.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>'),
            !e.querySelector || e.querySelector('svg')
              ? ((e.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                (this.getInertBodyElement =
                  e.querySelector &&
                  e.querySelector('svg img') &&
                  (function () {
                    try {
                      return !!window.DOMParser;
                    } catch (t) {
                      return !1;
                    }
                  })()
                    ? this.getInertBodyElement_DOMParser
                    : this.getInertBodyElement_InertDocument))
              : (this.getInertBodyElement = this.getInertBodyElement_XHR);
        }
        getInertBodyElement_XHR(t) {
          t = '<body><remove></remove>' + t + '</body>';
          try {
            t = encodeURI(t);
          } catch (r) {
            return null;
          }
          const e = new XMLHttpRequest();
          (e.responseType = 'document'), e.open('GET', 'data:text/html;charset=utf-8,' + t, !1), e.send(void 0);
          const n = e.response.body;
          return n.removeChild(n.firstChild), n;
        }
        getInertBodyElement_DOMParser(t) {
          t = '<body><remove></remove>' + t + '</body>';
          try {
            const e = new window.DOMParser().parseFromString(t, 'text/html').body;
            return e.removeChild(e.firstChild), e;
          } catch (e) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(t) {
          const e = this.inertDocument.createElement('template');
          if ('content' in e) return (e.innerHTML = t), e;
          const n = this.inertDocument.createElement('body');
          return (n.innerHTML = t), this.defaultDoc.documentMode && this.stripCustomNsAttrs(n), n;
        }
        stripCustomNsAttrs(t) {
          const e = t.attributes;
          for (let r = e.length - 1; 0 < r; r--) {
            const n = e.item(r).name;
            ('xmlns:ns1' !== n && 0 !== n.indexOf('ns1:')) || t.removeAttribute(n);
          }
          let n = t.firstChild;
          for (; n; ) n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), (n = n.nextSibling);
        }
      }
      const Fn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Hn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function Un(t) {
        return (t = String(t)).match(Fn) || t.match(Hn)
          ? t
          : (Mn() && console.warn(`WARNING: sanitizing unsafe URL value ${t} (see http://g.co/ng/security#xss)`),
            'unsafe:' + t);
      }
      function zn(t) {
        return (t = String(t))
          .split(',')
          .map((t) => Un(t.trim()))
          .join(', ');
      }
      function $n(t) {
        const e = {};
        for (const n of t.split(',')) e[n] = !0;
        return e;
      }
      function qn(...t) {
        const e = {};
        for (const n of t) for (const t in n) n.hasOwnProperty(t) && (e[t] = !0);
        return e;
      }
      const Bn = $n('area,br,col,hr,img,wbr'),
        Gn = $n('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        Zn = $n('rp,rt'),
        Wn = qn(Zn, Gn),
        Qn = qn(
          Bn,
          qn(
            Gn,
            $n(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          qn(
            Zn,
            $n(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          Wn
        ),
        Kn = $n('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        Jn = $n('srcset'),
        Yn = qn(
          Kn,
          Jn,
          $n(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          $n(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        Xn = $n('script,style,template');
      class tr {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let e = t.firstChild,
            n = !0;
          for (; e; )
            if (
              (e.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(e))
                : e.nodeType === Node.TEXT_NODE
                ? this.chars(e.nodeValue)
                : (this.sanitizedSomething = !0),
              n && e.firstChild)
            )
              e = e.firstChild;
            else
              for (; e; ) {
                e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                let t = this.checkClobberedElement(e, e.nextSibling);
                if (t) {
                  e = t;
                  break;
                }
                e = this.checkClobberedElement(e, e.parentNode);
              }
          return this.buf.join('');
        }
        startElement(t) {
          const e = t.nodeName.toLowerCase();
          if (!Qn.hasOwnProperty(e)) return (this.sanitizedSomething = !0), !Xn.hasOwnProperty(e);
          this.buf.push('<'), this.buf.push(e);
          const n = t.attributes;
          for (let r = 0; r < n.length; r++) {
            const t = n.item(r),
              e = t.name,
              s = e.toLowerCase();
            if (!Yn.hasOwnProperty(s)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let i = t.value;
            Kn[s] && (i = Un(i)), Jn[s] && (i = zn(i)), this.buf.push(' ', e, '="', rr(i), '"');
          }
          return this.buf.push('>'), !0;
        }
        endElement(t) {
          const e = t.nodeName.toLowerCase();
          Qn.hasOwnProperty(e) && !Bn.hasOwnProperty(e) && (this.buf.push('</'), this.buf.push(e), this.buf.push('>'));
        }
        chars(t) {
          this.buf.push(rr(t));
        }
        checkClobberedElement(t, e) {
          if (
            e &&
            (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error('Failed to sanitize html because the element is clobbered: ' + t.outerHTML);
          return e;
        }
      }
      const er = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        nr = /([^\#-~ |!])/g;
      function rr(t) {
        return t
          .replace(/&/g, '&amp;')
          .replace(er, function (t) {
            return '&#' + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ';';
          })
          .replace(nr, function (t) {
            return '&#' + t.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let sr;
      function ir(t, e) {
        let n = null;
        try {
          sr = sr || new Vn(t);
          let r = e ? String(e) : '';
          n = sr.getInertBodyElement(r);
          let s = 5,
            i = r;
          do {
            if (0 === s) throw new Error('Failed to sanitize html because the input is unstable');
            s--, (r = i), (i = n.innerHTML), (n = sr.getInertBodyElement(r));
          } while (r !== i);
          const o = new tr(),
            a = o.sanitizeChildren(or(n) || n);
          return (
            Mn() &&
              o.sanitizedSomething &&
              console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'),
            a
          );
        } finally {
          if (n) {
            const t = or(n) || n;
            for (; t.firstChild; ) t.removeChild(t.firstChild);
          }
        }
      }
      function or(t) {
        return 'content' in t &&
          (function (t) {
            return t.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === t.nodeName;
          })(t)
          ? t.content
          : null;
      }
      const ar = (function () {
          var t = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
          return (
            (t[t.NONE] = 'NONE'),
            (t[t.HTML] = 'HTML'),
            (t[t.STYLE] = 'STYLE'),
            (t[t.SCRIPT] = 'SCRIPT'),
            (t[t.URL] = 'URL'),
            (t[t.RESOURCE_URL] = 'RESOURCE_URL'),
            t
          );
        })(),
        lr = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:attr|calc|var))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        cr = /^url\(([^)]+)\)$/;
      function ur(t) {
        if (!(t = String(t).trim())) return '';
        const e = t.match(cr);
        return (e && Un(e[1]) === e[1]) ||
          (t.match(lr) &&
            (function (t) {
              let e = !0,
                n = !0;
              for (let r = 0; r < t.length; r++) {
                const s = t.charAt(r);
                "'" === s && n ? (e = !e) : '"' === s && e && (n = !n);
              }
              return e && n;
            })(t))
          ? t
          : (Mn() && console.warn(`WARNING: sanitizing unsafe style value ${t} (see http://g.co/ng/security#xss).`),
            'unsafe');
      }
      function hr(t) {
        const e = (function () {
          const t = se();
          return t && t[12];
        })();
        return e ? e.sanitize(ar.URL, t) || '' : An(t, 'URL') ? On(t) : Un(Ze(t));
      }
      function dr(t, e) {
        t.__ngContext__ = e;
      }
      function fr(t) {
        throw new Error('Multiple components match node with tagname ' + t.tagName);
      }
      function pr() {
        throw new Error('Cannot mix multi providers and regular providers');
      }
      function gr(t, e, n) {
        let r = t.length;
        for (;;) {
          const s = t.indexOf(e, n);
          if (-1 === s) return s;
          if (0 === s || t.charCodeAt(s - 1) <= 32) {
            const n = e.length;
            if (s + n === r || t.charCodeAt(s + n) <= 32) return s;
          }
          n = s + 1;
        }
      }
      function mr(t, e, n) {
        let r = 0;
        for (; r < t.length; ) {
          let s = t[r++];
          if (n && 'class' === s) {
            if (((s = t[r]), -1 !== gr(s.toLowerCase(), e, 0))) return !0;
          } else if (1 === s) {
            for (; r < t.length && 'string' == typeof (s = t[r++]); ) if (s.toLowerCase() === e) return !0;
            return !1;
          }
        }
        return !1;
      }
      function br(t) {
        return 0 === t.type && 'ng-template' !== t.tagName;
      }
      function yr(t, e, n) {
        return e === (0 !== t.type || n ? t.tagName : 'ng-template');
      }
      function vr(t, e, n) {
        let r = 4;
        const s = t.attrs || [],
          i = (function (t) {
            for (let e = 0; e < t.length; e++) if (Fe(t[e])) return e;
            return t.length;
          })(s);
        let o = !1;
        for (let a = 0; a < e.length; a++) {
          const l = e[a];
          if ('number' != typeof l) {
            if (!o)
              if (4 & r) {
                if (((r = 2 | (1 & r)), ('' !== l && !yr(t, l, n)) || ('' === l && 1 === e.length))) {
                  if (_r(r)) return !1;
                  o = !0;
                }
              } else {
                const c = 8 & r ? l : e[++a];
                if (8 & r && null !== t.attrs) {
                  if (!mr(t.attrs, c, n)) {
                    if (_r(r)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const u = wr(8 & r ? 'class' : l, s, br(t), n);
                if (-1 === u) {
                  if (_r(r)) return !1;
                  o = !0;
                  continue;
                }
                if ('' !== c) {
                  let t;
                  t = u > i ? '' : s[u + 1].toLowerCase();
                  const e = 8 & r ? t : null;
                  if ((e && -1 !== gr(e, c, 0)) || (2 & r && c !== t)) {
                    if (_r(r)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !_r(r) && !_r(l)) return !1;
            if (o && _r(l)) continue;
            (o = !1), (r = l | (1 & r));
          }
        }
        return _r(r) || o;
      }
      function _r(t) {
        return 0 == (1 & t);
      }
      function wr(t, e, n, r) {
        if (null === e) return -1;
        let s = 0;
        if (r || !n) {
          let n = !1;
          for (; s < e.length; ) {
            const r = e[s];
            if (r === t) return s;
            if (3 === r || 6 === r) n = !0;
            else {
              if (1 === r || 2 === r) {
                let t = e[++s];
                for (; 'string' == typeof t; ) t = e[++s];
                continue;
              }
              if (4 === r) break;
              if (0 === r) {
                s += 4;
                continue;
              }
            }
            s += n ? 1 : 2;
          }
          return -1;
        }
        return (function (t, e) {
          let n = t.indexOf(4);
          if (n > -1)
            for (n++; n < t.length; ) {
              const r = t[n];
              if ('number' == typeof r) return -1;
              if (r === e) return n;
              n++;
            }
          return -1;
        })(e, t);
      }
      function Cr(t, e, n = !1) {
        for (let r = 0; r < e.length; r++) if (vr(t, e[r], n)) return !0;
        return !1;
      }
      function Sr(t, e) {
        t: for (let n = 0; n < e.length; n++) {
          const r = e[n];
          if (t.length === r.length) {
            for (let e = 0; e < t.length; e++) if (t[e] !== r[e]) continue t;
            return !0;
          }
        }
        return !1;
      }
      function Er(t, e) {
        return t ? ':not(' + e.trim() + ')' : e;
      }
      function xr(t) {
        let e = t[0],
          n = 1,
          r = 2,
          s = '',
          i = !1;
        for (; n < t.length; ) {
          let o = t[n];
          if ('string' == typeof o)
            if (2 & r) {
              const e = t[++n];
              s += '[' + o + (e.length > 0 ? '="' + e + '"' : '') + ']';
            } else 8 & r ? (s += '.' + o) : 4 & r && (s += ' ' + o);
          else '' === s || _r(o) || ((e += Er(i, s)), (s = '')), (r = o), (i = i || !_r(r));
          n++;
        }
        return '' !== s && (e += Er(i, s)), e;
      }
      const Or = {};
      function Ar(t) {
        const e = t[3];
        return Dt(e) ? e[3] : e;
      }
      function kr(t) {
        return Ir(t[13]);
      }
      function Tr(t) {
        return Ir(t[4]);
      }
      function Ir(t) {
        for (; null !== t && !Dt(t); ) t = t[4];
        return t;
      }
      function Rr(t) {
        jr(ie(), se(), ke() + t, he());
      }
      function jr(t, e, n, r) {
        if (!r)
          if (3 == (3 & e[2])) {
            const r = t.preOrderCheckHooks;
            null !== r && je(e, r, n);
          } else {
            const r = t.preOrderHooks;
            null !== r && De(e, r, 0, n);
          }
        Te(n);
      }
      const Dr = { marker: 'element' },
        Nr = { marker: 'comment' };
      function Pr(t, e) {
        return (t << 17) | (e << 2);
      }
      function Mr(t) {
        return (t >> 17) & 32767;
      }
      function Lr(t) {
        return 2 | t;
      }
      function Vr(t) {
        return (131068 & t) >> 2;
      }
      function Fr(t, e) {
        return (-131069 & t) | (e << 2);
      }
      function Hr(t) {
        return 1 | t;
      }
      function Ur(t, e) {
        const n = t.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const n = t.data[i];
              _e(s), n.contentQueries(2, e[i], i);
            }
          }
      }
      function zr(t, e, n) {
        return zt(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t);
      }
      function $r(t, e, n, r, s, i, o, a, l, c) {
        const u = e.blueprint.slice();
        return (
          (u[0] = s),
          (u[2] = 140 | r),
          te(u),
          (u[3] = u[15] = t),
          (u[8] = n),
          (u[10] = o || (t && t[10])),
          (u[11] = a || (t && t[11])),
          (u[12] = l || (t && t[12]) || null),
          (u[9] = c || (t && t[9]) || null),
          (u[6] = i),
          (u[16] = 2 == e.type ? t[16] : u),
          u
        );
      }
      function qr(t, e, n, r, s, i) {
        const o = n + 20,
          a =
            t.data[o] ||
            (function (t, e, n, r, s, i) {
              const o = ae(),
                a = ce(),
                l = a ? o : o && o.parent,
                c = (t.data[n] = ts(0, l && l !== e ? l : null, r, n, s, i));
              return (
                null === t.firstChild && (t.firstChild = c),
                o && (!a || null != o.child || (null === c.parent && 2 !== o.type) ? a || (o.next = c) : (o.child = c)),
                c
              );
            })(t, e, o, r, s, i);
        return le(a, !0), a;
      }
      function Br(t, e, n) {
        Ce(e, e[6]);
        try {
          const r = t.viewQuery;
          null !== r && Ss(1, r, n);
          const s = t.template;
          null !== s && Wr(t, e, s, 1, n),
            t.firstCreatePass && (t.firstCreatePass = !1),
            t.staticContentQueries && Ur(t, e),
            t.staticViewQueries && Ss(2, t.viewQuery, n);
          const i = t.components;
          null !== i &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) ys(t, e[n]);
            })(e, i);
        } catch (r) {
          throw (t.firstCreatePass && (t.incompleteFirstPass = !0), r);
        } finally {
          (e[2] &= -5), Ae();
        }
      }
      function Gr(t, e, n, r) {
        const s = e[2];
        if (256 == (256 & s)) return;
        Ce(e, e[6]);
        const i = he();
        try {
          te(e), (ne.lFrame.bindingIndex = t.bindingStartIndex), null !== n && Wr(t, e, n, 2, r);
          const o = 3 == (3 & s);
          if (!i)
            if (o) {
              const n = t.preOrderCheckHooks;
              null !== n && je(e, n, null);
            } else {
              const n = t.preOrderHooks;
              null !== n && De(e, n, 0, null), Ne(e, 0);
            }
          if (
            ((function (t) {
              for (let e = kr(t); null !== e; e = Tr(e)) {
                if (!e[2]) continue;
                const t = e[9];
                for (let e = 0; e < t.length; e++) {
                  const n = t[e],
                    r = n[3];
                  0 == (1024 & n[2]) && ee(r, 1), (n[2] |= 1024);
                }
              }
            })(e),
            (function (t) {
              for (let e = kr(t); null !== e; e = Tr(e))
                for (let t = 10; t < e.length; t++) {
                  const n = e[t],
                    r = n[1];
                  Yt(n) && Gr(r, n, r.template, n[8]);
                }
            })(e),
            null !== t.contentQueries && Ur(t, e),
            !i)
          )
            if (o) {
              const n = t.contentCheckHooks;
              null !== n && je(e, n);
            } else {
              const n = t.contentHooks;
              null !== n && De(e, n, 1), Ne(e, 1);
            }
          !(function (t, e) {
            try {
              const n = t.expandoInstructions;
              if (null !== n) {
                let r = t.expandoStartIndex,
                  s = -1,
                  i = -1;
                for (let t = 0; t < n.length; t++) {
                  const o = n[t];
                  'number' == typeof o
                    ? o <= 0
                      ? ((i = 0 - o), Te(i), (r += 9 + n[++t]), (s = r))
                      : (r += o)
                    : (null !== o && (be(r, s), o(2, e[s])), s++);
                }
              }
            } finally {
              Te(-1);
            }
          })(t, e);
          const a = t.components;
          null !== a &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) bs(t, e[n]);
            })(e, a);
          const l = t.viewQuery;
          if ((null !== l && Ss(2, l, r), !i))
            if (o) {
              const n = t.viewCheckHooks;
              null !== n && je(e, n);
            } else {
              const n = t.viewHooks;
              null !== n && De(e, n, 2), Ne(e, 2);
            }
          !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
            i || (e[2] &= -73),
            1024 & e[2] && ((e[2] &= -1025), ee(e[3], -1));
        } finally {
          Ae();
        }
      }
      function Zr(t, e, n, r) {
        const s = e[10],
          i = !he(),
          o = Jt(e);
        try {
          i && !o && s.begin && s.begin(), o && Br(t, e, r), Gr(t, e, n, r);
        } finally {
          i && !o && s.end && s.end();
        }
      }
      function Wr(t, e, n, r, s) {
        const i = ke();
        try {
          Te(-1), 2 & r && e.length > 20 && jr(t, e, 0, he()), n(r, s);
        } finally {
          Te(i);
        }
      }
      function Qr(t, e, n) {
        if (Nt(e)) {
          const r = e.directiveEnd;
          for (let s = e.directiveStart; s < r; s++) {
            const e = t.data[s];
            e.contentQueries && e.contentQueries(1, n[s], s);
          }
        }
      }
      function Kr(t, e, n) {
        re() &&
          ((function (t, e, n, r) {
            const s = n.directiveStart,
              i = n.directiveEnd;
            t.firstCreatePass || tn(n, e), dr(r, e);
            const o = n.initialInputs;
            for (let a = s; a < i; a++) {
              const r = t.data[a],
                i = Lt(r);
              i && ds(e, n, r);
              const l = un(e, t, a, n);
              dr(l, e), null !== o && ps(0, a - s, l, r, 0, o), i && (Qt(n.index, e)[8] = l);
            }
          })(t, e, n, Gt(n, e)),
          128 == (128 & n.flags) &&
            (function (t, e, n) {
              const r = n.directiveStart,
                s = n.directiveEnd,
                i = t.expandoInstructions,
                o = t.firstCreatePass,
                a = n.index - 20,
                l = ne.lFrame.currentDirectiveIndex;
              try {
                Te(a);
                for (let n = r; n < s; n++) {
                  const r = t.data[n],
                    s = e[n];
                  ye(n),
                    null !== r.hostBindings || 0 !== r.hostVars || null !== r.hostAttrs ? os(r, s) : o && i.push(null);
                }
              } finally {
                Te(-1), ye(l);
              }
            })(t, e, n));
      }
      function Jr(t, e, n = Gt) {
        const r = e.localNames;
        if (null !== r) {
          let s = e.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const o = r[i + 1],
              a = -1 === o ? n(e, t) : t[o];
            t[s++] = a;
          }
        }
      }
      function Yr(t) {
        const e = t.tView;
        return null === e || e.incompleteFirstPass
          ? (t.tView = Xr(
              1,
              -1,
              t.template,
              t.decls,
              t.vars,
              t.directiveDefs,
              t.pipeDefs,
              t.viewQuery,
              t.schemas,
              t.consts
            ))
          : e;
      }
      function Xr(t, e, n, r, s, i, o, a, l, c) {
        const u = 20 + r,
          h = u + s,
          d = (function (t, e) {
            const n = [];
            for (let r = 0; r < e; r++) n.push(r < t ? null : Or);
            return n;
          })(u, h);
        return (d[1] = {
          type: t,
          id: e,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          node: null,
          data: d.slice().fill(null, u),
          bindingStartIndex: u,
          expandoStartIndex: h,
          expandoInstructions: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof i ? i() : i,
          pipeRegistry: 'function' == typeof o ? o() : o,
          firstChild: null,
          schemas: l,
          consts: c,
          incompleteFirstPass: !1,
        });
      }
      function ts(t, e, n, r, s, i) {
        return {
          type: n,
          index: r,
          injectorIndex: e ? e.injectorIndex : -1,
          directiveStart: -1,
          directiveEnd: -1,
          directiveStylingLast: -1,
          propertyBindings: null,
          flags: 0,
          providerIndexes: 0,
          tagName: s,
          attrs: i,
          mergedAttrs: null,
          localNames: null,
          initialInputs: void 0,
          inputs: null,
          outputs: null,
          tViews: null,
          next: null,
          projectionNext: null,
          child: null,
          parent: e,
          projection: null,
          styles: null,
          stylesWithoutHost: null,
          residualStyles: void 0,
          classes: null,
          classesWithoutHost: null,
          residualClasses: void 0,
          classBindings: 0,
          styleBindings: 0,
        };
      }
      function es(t, e, n) {
        for (let r in t)
          if (t.hasOwnProperty(r)) {
            const s = t[r];
            (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(e, s) : (n[r] = [e, s]);
          }
        return n;
      }
      function ns(t, e, n, r, s, i, o, a) {
        const l = Gt(e, n);
        let c,
          u = e.inputs;
        var h;
        !a && null != u && (c = u[r])
          ? (ks(t, n, c, r, s),
            Pt(e) &&
              (function (t, e) {
                const n = Qt(e, t);
                16 & n[2] || (n[2] |= 64);
              })(n, e.index))
          : 3 === e.type &&
            ((r =
              'class' === (h = r)
                ? 'className'
                : 'for' === h
                ? 'htmlFor'
                : 'formaction' === h
                ? 'formAction'
                : 'innerHtml' === h
                ? 'innerHTML'
                : 'readonly' === h
                ? 'readOnly'
                : 'tabindex' === h
                ? 'tabIndex'
                : h),
            (s = null != o ? o(s, e.tagName || '', r) : s),
            zt(i) ? i.setProperty(l, r, s) : He(r) || (l.setProperty ? l.setProperty(r, s) : (l[r] = s)));
      }
      function rs(t, e, n, r) {
        let s = !1;
        if (re()) {
          const i = (function (t, e, n) {
              const r = t.directiveRegistry;
              let s = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const o = r[i];
                  Cr(n, o.selectors, !1) &&
                    (s || (s = []),
                    sn(tn(n, e), t, o.type),
                    Lt(o) ? (2 & n.flags && fr(n), ls(t, n), s.unshift(o)) : s.push(o));
                }
              return s;
            })(t, e, n),
            o = null === r ? null : { '': -1 };
          if (null !== i) {
            let r = 0;
            (s = !0), us(n, t.data.length, i.length);
            for (let t = 0; t < i.length; t++) {
              const e = i[t];
              e.providersResolver && e.providersResolver(e);
            }
            as(t, n, i.length);
            let a = !1,
              l = !1;
            for (let s = 0; s < i.length; s++) {
              const c = i[s];
              (n.mergedAttrs = Ue(n.mergedAttrs, c.hostAttrs)),
                hs(t, e, c),
                cs(t.data.length - 1, c, o),
                null !== c.contentQueries && (n.flags |= 8),
                (null === c.hostBindings && null === c.hostAttrs && 0 === c.hostVars) || (n.flags |= 128),
                !a &&
                  (c.onChanges || c.onInit || c.doCheck) &&
                  ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index - 20), (a = !0)),
                l ||
                  (!c.onChanges && !c.doCheck) ||
                  ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index - 20), (l = !0)),
                ss(t, c),
                (r += c.hostVars);
            }
            !(function (t, e) {
              const n = e.directiveEnd,
                r = t.data,
                s = e.attrs,
                i = [];
              let o = null,
                a = null;
              for (let l = e.directiveStart; l < n; l++) {
                const t = r[l],
                  n = t.inputs,
                  c = null === s || br(e) ? null : gs(n, s);
                i.push(c), (o = es(n, l, o)), (a = es(t.outputs, l, a));
              }
              null !== o &&
                (o.hasOwnProperty('class') && (e.flags |= 16), o.hasOwnProperty('style') && (e.flags |= 32)),
                (e.initialInputs = i),
                (e.inputs = o),
                (e.outputs = a);
            })(t, n),
              is(t, e, r);
          }
          o &&
            (function (t, e, n) {
              if (e) {
                const r = (t.localNames = []);
                for (let t = 0; t < e.length; t += 2) {
                  const s = n[e[t + 1]];
                  if (null == s) throw new Error(`Export of name '${e[t + 1]}' not found!`);
                  r.push(e[t], s);
                }
              }
            })(n, r, o);
        }
        return (n.mergedAttrs = Ue(n.mergedAttrs, n.attrs)), s;
      }
      function ss(t, e) {
        const n = t.expandoInstructions;
        n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars);
      }
      function is(t, e, n) {
        for (let r = 0; r < n; r++) e.push(Or), t.blueprint.push(Or), t.data.push(null);
      }
      function os(t, e) {
        null !== t.hostBindings && t.hostBindings(1, e);
      }
      function as(t, e, n) {
        const r = 20 - e.index,
          s = t.data.length - (65535 & e.providerIndexes);
        (t.expandoInstructions || (t.expandoInstructions = [])).push(r, s, n);
      }
      function ls(t, e) {
        (e.flags |= 2), (t.components || (t.components = [])).push(e.index);
      }
      function cs(t, e, n) {
        if (n) {
          if (e.exportAs) for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
          Lt(e) && (n[''] = t);
        }
      }
      function us(t, e, n) {
        (t.flags |= 1), (t.directiveStart = e), (t.directiveEnd = e + n), (t.providerIndexes = e);
      }
      function hs(t, e, n) {
        t.data.push(n);
        const r = n.factory || (n.factory = It(n.type)),
          s = new Le(r, Lt(n), null);
        t.blueprint.push(s), e.push(s);
      }
      function ds(t, e, n) {
        const r = Gt(e, t),
          s = Yr(n),
          i = t[10],
          o = vs(t, $r(t, s, null, n.onPush ? 64 : 16, r, e, i, i.createRenderer(r, n)));
        t[e.index] = o;
      }
      function fs(t, e, n, r, s, i) {
        const o = Gt(t, e),
          a = e[11];
        if (null == r) zt(a) ? a.removeAttribute(o, n, i) : o.removeAttribute(n);
        else {
          const e = null == s ? Ze(r) : s(r, t.tagName || '', n);
          zt(a) ? a.setAttribute(o, n, e, i) : i ? o.setAttributeNS(i, n, e) : o.setAttribute(n, e);
        }
      }
      function ps(t, e, n, r, s, i) {
        const o = i[e];
        if (null !== o) {
          const t = r.setInput;
          for (let e = 0; e < o.length; ) {
            const s = o[e++],
              i = o[e++],
              a = o[e++];
            null !== t ? r.setInput(n, a, s, i) : (n[i] = a);
          }
        }
      }
      function gs(t, e) {
        let n = null,
          r = 0;
        for (; r < e.length; ) {
          const s = e[r];
          if (0 !== s)
            if (5 !== s) {
              if ('number' == typeof s) break;
              t.hasOwnProperty(s) && (null === n && (n = []), n.push(s, t[s], e[r + 1])), (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function ms(t, e, n, r) {
        return new Array(t, !0, !1, e, null, 0, r, n, null, null);
      }
      function bs(t, e) {
        const n = Qt(e, t);
        if (Yt(n)) {
          const t = n[1];
          80 & n[2]
            ? Gr(t, n, t.template, n[8])
            : n[5] > 0 &&
              (function t(e) {
                for (let r = kr(e); null !== r; r = Tr(r))
                  for (let e = 10; e < r.length; e++) {
                    const n = r[e];
                    if (1024 & n[2]) {
                      const t = n[1];
                      Gr(t, n, t.template, n[8]);
                    } else n[5] > 0 && t(n);
                  }
                const n = e[1].components;
                if (null !== n)
                  for (let r = 0; r < n.length; r++) {
                    const s = Qt(n[r], e);
                    Yt(s) && s[5] > 0 && t(s);
                  }
              })(n);
        }
      }
      function ys(t, e) {
        const n = Qt(e, t),
          r = n[1];
        !(function (t, e) {
          for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n]);
        })(r, n),
          Br(r, n, n[8]);
      }
      function vs(t, e) {
        return t[13] ? (t[14][4] = e) : (t[13] = e), (t[14] = e), e;
      }
      function _s(t) {
        for (; t; ) {
          t[2] |= 64;
          const e = Ar(t);
          if (Vt(t) && !e) return t;
          t = e;
        }
        return null;
      }
      function ws(t, e, n) {
        const r = e[10];
        r.begin && r.begin();
        try {
          Gr(t, e, t.template, n);
        } catch (s) {
          throw (As(e, s), s);
        } finally {
          r.end && r.end();
        }
      }
      function Cs(t) {
        !(function (t) {
          for (let e = 0; e < t.components.length; e++) {
            const n = t.components[e],
              r = Kt(n),
              s = r[1];
            Zr(s, r, s.template, n);
          }
        })(t[8]);
      }
      function Ss(t, e, n) {
        _e(0), e(t, n);
      }
      const Es = (() => Promise.resolve(null))();
      function xs(t) {
        return t[7] || (t[7] = []);
      }
      function Os(t) {
        return t.cleanup || (t.cleanup = []);
      }
      function As(t, e) {
        const n = t[9],
          r = n ? n.get(vn, null) : null;
        r && r.handleError(e);
      }
      function ks(t, e, n, r, s) {
        for (let i = 0; i < n.length; ) {
          const o = n[i++],
            a = n[i++],
            l = e[o],
            c = t.data[o];
          null !== c.setInput ? c.setInput(l, s, r, a) : (l[a] = s);
        }
      }
      function Ts(t, e, n) {
        const r = Bt(e, t),
          s = t[11];
        zt(s) ? s.setValue(r, n) : (r.textContent = n);
      }
      function Is(t, e) {
        const n = e[3];
        return -1 === t.index ? (Dt(n) ? n : null) : n;
      }
      function Rs(t, e) {
        const n = Is(t, e);
        return n ? qs(e[11], n[7]) : null;
      }
      function js(t, e, n, r, s) {
        if (null != r) {
          let i,
            o = !1;
          Dt(r) ? (i = r) : jt(r) && ((o = !0), (r = r[0]));
          const a = qt(r);
          0 === t && null !== n
            ? null == s
              ? zs(e, n, a)
              : Us(e, n, a, s || null)
            : 1 === t && null !== n
            ? Us(e, n, a, s || null)
            : 2 === t
            ? Ws(e, a, o)
            : 3 === t && e.destroyNode(a),
            null != i &&
              (function (t, e, n, r, s) {
                const i = n[7];
                i !== qt(n) && js(e, t, r, i, s);
                for (let o = 10; o < n.length; o++) {
                  const s = n[o];
                  Ks(s[1], s, t, e, r, i);
                }
              })(e, t, i, n, s);
        }
      }
      function Ds(t, e) {
        return zt(e) ? e.createText(t) : e.createTextNode(t);
      }
      function Ns(t, e, n, r) {
        const s = Rs(t.node, e);
        s && Ks(t, e, e[11], n ? 1 : 2, s, r);
      }
      function Ps(t, e) {
        const n = t[9],
          r = n.indexOf(e);
        1024 & e[2] && ee(e[3], -1), n.splice(r, 1);
      }
      function Ms(t, e) {
        if (t.length <= 10) return;
        const n = 10 + e,
          r = t[n];
        if (r) {
          const s = r[17];
          null !== s && s !== t && Ps(s, r), e > 0 && (t[n - 1][4] = r[4]);
          const i = ut(t, 10 + e);
          Ns(r[1], r, !1, null);
          const o = i[19];
          null !== o && o.detachView(i[1]), (r[3] = null), (r[4] = null), (r[2] &= -129);
        }
        return r;
      }
      function Ls(t, e) {
        if (!(256 & e[2])) {
          const n = e[11];
          zt(n) && n.destroyNode && Ks(t, e, n, 3, null, null),
            (function (t) {
              let e = t[13];
              if (!e) return Fs(t[1], t);
              for (; e; ) {
                let n = null;
                if (jt(e)) n = e[13];
                else {
                  const t = e[10];
                  t && (n = t);
                }
                if (!n) {
                  for (; e && !e[4] && e !== t; ) jt(e) && Fs(e[1], e), (e = Vs(e, t));
                  null === e && (e = t), jt(e) && Fs(e[1], e), (n = e && e[4]);
                }
                e = n;
              }
            })(e);
        }
      }
      function Vs(t, e) {
        let n;
        return jt(t) && (n = t[6]) && 2 === n.type ? Is(n, t) : t[3] === e ? null : t[3];
      }
      function Fs(t, e) {
        if (!(256 & e[2])) {
          (e[2] &= -129),
            (e[2] |= 256),
            (function (t, e) {
              let n;
              if (null != t && null != (n = t.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const t = e[n[r]];
                  if (!(t instanceof Le)) {
                    const e = n[r + 1];
                    if (Array.isArray(e)) for (let n = 0; n < e.length; n += 2) e[n + 1].call(t[e[n]]);
                    else e.call(t);
                  }
                }
            })(t, e),
            (function (t, e) {
              const n = t.cleanup;
              if (null !== n) {
                const t = e[7];
                for (let r = 0; r < n.length - 1; r += 2)
                  if ('string' == typeof n[r]) {
                    const s = n[r + 1],
                      i = 'function' == typeof s ? s(e) : qt(e[s]),
                      o = t[n[r + 2]],
                      a = n[r + 3];
                    'boolean' == typeof a ? i.removeEventListener(n[r], o, a) : a >= 0 ? t[a]() : t[-a].unsubscribe(),
                      (r += 2);
                  } else n[r].call(t[n[r + 1]]);
                e[7] = null;
              }
            })(t, e);
          const n = e[6];
          n && 3 === n.type && zt(e[11]) && e[11].destroy();
          const r = e[17];
          if (null !== r && Dt(e[3])) {
            r !== e[3] && Ps(r, e);
            const n = e[19];
            null !== n && n.detachView(t);
          }
        }
      }
      function Hs(t, e, n) {
        let r = e.parent;
        for (; null != r && (4 === r.type || 5 === r.type); ) r = (e = r).parent;
        if (null == r) {
          const t = n[6];
          return 2 === t.type ? Rs(t, n) : n[0];
        }
        if (e && 5 === e.type && 4 & e.flags) return Gt(e, n).parentNode;
        if (2 & r.flags) {
          const e = t.data,
            n = e[e[r.index].directiveStart].encapsulation;
          if (n !== mt.ShadowDom && n !== mt.Native) return null;
        }
        return Gt(r, n);
      }
      function Us(t, e, n, r) {
        zt(t) ? t.insertBefore(e, n, r) : e.insertBefore(n, r, !0);
      }
      function zs(t, e, n) {
        zt(t) ? t.appendChild(e, n) : e.appendChild(n);
      }
      function $s(t, e, n, r) {
        null !== r ? Us(t, e, n, r) : zs(t, e, n);
      }
      function qs(t, e) {
        return zt(t) ? t.parentNode(e) : e.parentNode;
      }
      function Bs(t, e) {
        if (2 === t.type) {
          const n = Is(t, e);
          return null === n ? null : Zs(n.indexOf(e, 10) - 10, n);
        }
        return 4 === t.type || 5 === t.type ? Gt(t, e) : null;
      }
      function Gs(t, e, n, r) {
        const s = Hs(t, r, e);
        if (null != s) {
          const t = e[11],
            i = Bs(r.parent || e[6], e);
          if (Array.isArray(n)) for (let e = 0; e < n.length; e++) $s(t, s, n[e], i);
          else $s(t, s, n, i);
        }
      }
      function Zs(t, e) {
        const n = 10 + t + 1;
        if (n < e.length) {
          const t = e[n],
            r = t[1].firstChild;
          if (null !== r)
            return (function t(e, n) {
              if (null !== n) {
                const r = n.type;
                if (3 === r) return Gt(n, e);
                if (0 === r) return Zs(-1, e[n.index]);
                if (4 === r || 5 === r) {
                  const r = n.child;
                  if (null !== r) return t(e, r);
                  {
                    const t = e[n.index];
                    return Dt(t) ? Zs(-1, t) : qt(t);
                  }
                }
                {
                  const r = e[16],
                    s = r[6],
                    i = Ar(r),
                    o = s.projection[n.projection];
                  return null != o ? t(i, o) : t(e, n.next);
                }
              }
              return null;
            })(t, r);
        }
        return e[7];
      }
      function Ws(t, e, n) {
        const r = qs(t, e);
        r &&
          (function (t, e, n, r) {
            zt(t) ? t.removeChild(e, n, r) : e.removeChild(n);
          })(t, r, e, n);
      }
      function Qs(t, e, n, r, s, i, o) {
        for (; null != n; ) {
          const a = r[n.index],
            l = n.type;
          o && 0 === e && (a && dr(qt(a), r), (n.flags |= 4)),
            64 != (64 & n.flags) &&
              (4 === l || 5 === l
                ? (Qs(t, e, n.child, r, s, i, !1), js(e, t, s, a, i))
                : 1 === l
                ? Ys(t, e, r, n, s, i)
                : js(e, t, s, a, i)),
            (n = o ? n.projectionNext : n.next);
        }
      }
      function Ks(t, e, n, r, s, i) {
        Qs(n, r, t.node.child, e, s, i, !1);
      }
      function Js(t, e, n) {
        Ys(e[11], 0, e, n, Hs(t, n, e), Bs(n.parent || e[6], e));
      }
      function Ys(t, e, n, r, s, i) {
        const o = n[16],
          a = o[6].projection[r.projection];
        if (Array.isArray(a)) for (let l = 0; l < a.length; l++) js(e, t, s, a[l], i);
        else Qs(t, e, a, o[3], s, i, !0);
      }
      function Xs(t, e, n) {
        zt(t) ? t.setAttribute(e, 'style', n) : (e.style.cssText = n);
      }
      function ti(t, e, n) {
        zt(t) ? ('' === n ? t.removeAttribute(e, 'class') : t.setAttribute(e, 'class', n)) : (e.className = n);
      }
      class ei {
        constructor(t, e) {
          (this._lView = t), (this._cdRefInjectingView = e), (this._appRef = null), (this._viewContainerRef = null);
        }
        get rootNodes() {
          const t = this._lView;
          return null == t[0]
            ? (function t(e, n, r, s, i = !1) {
                for (; null !== r; ) {
                  const o = n[r.index];
                  if ((null !== o && s.push(qt(o)), Dt(o)))
                    for (let e = 10; e < o.length; e++) {
                      const n = o[e],
                        r = n[1].firstChild;
                      null !== r && t(n[1], n, r, s);
                    }
                  const a = r.type;
                  if (4 === a || 5 === a) t(e, n, r.child, s);
                  else if (1 === a) {
                    const e = n[16],
                      i = e[6].projection[r.projection];
                    if (Array.isArray(i)) s.push(...i);
                    else {
                      const n = Ar(e);
                      t(n[1], n, i, s, !0);
                    }
                  }
                  r = i ? r.projectionNext : r.next;
                }
                return s;
              })(t[1], t, t[6].child, [])
            : [];
        }
        get context() {
          return this._lView[8];
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._viewContainerRef) {
            const t = this._viewContainerRef.indexOf(this);
            t > -1 && this._viewContainerRef.detach(t), (this._viewContainerRef = null);
          }
          Ls(this._lView[1], this._lView);
        }
        onDestroy(t) {
          var e, n, r;
          (e = this._lView[1]),
            (r = t),
            xs((n = this._lView)).push(r),
            e.firstCreatePass && Os(e).push(n[7].length - 1, null);
        }
        markForCheck() {
          _s(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          ws(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (t, e, n) {
            de(!0);
            try {
              ws(t, e, n);
            } finally {
              de(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef(t) {
          if (this._appRef) throw new Error('This view is already attached directly to the ApplicationRef!');
          this._viewContainerRef = t;
        }
        detachFromAppRef() {
          var t;
          (this._appRef = null), Ks(this._lView[1], (t = this._lView), t[11], 2, null, null);
        }
        attachToAppRef(t) {
          if (this._viewContainerRef) throw new Error('This view is already attached to a ViewContainer!');
          this._appRef = t;
        }
      }
      class ni extends ei {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Cs(this._view);
        }
        checkNoChanges() {
          !(function (t) {
            de(!0);
            try {
              Cs(t);
            } finally {
              de(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      let ri, si, ii;
      function oi(t, e, n) {
        return ri || (ri = class extends t {}), new ri(Gt(e, n));
      }
      function ai(t, e, n, r) {
        return (
          si ||
            (si = class extends t {
              constructor(t, e, n) {
                super(), (this._declarationView = t), (this._declarationTContainer = e), (this.elementRef = n);
              }
              createEmbeddedView(t) {
                const e = this._declarationTContainer.tViews,
                  n = $r(this._declarationView, e, t, 16, null, e.node);
                n[17] = this._declarationView[this._declarationTContainer.index];
                const r = this._declarationView[19];
                return null !== r && (n[19] = r.createEmbeddedView(e)), Br(e, n, t), new ei(n);
              }
            }),
          0 === n.type ? new si(r, n, oi(e, n, r)) : null
        );
      }
      function li(t, e, n, r) {
        let s;
        ii ||
          (ii = class extends t {
            constructor(t, e, n) {
              super(), (this._lContainer = t), (this._hostTNode = e), (this._hostView = n);
            }
            get element() {
              return oi(e, this._hostTNode, this._hostView);
            }
            get injector() {
              return new fn(this._hostTNode, this._hostView);
            }
            get parentInjector() {
              const t = rn(this._hostTNode, this._hostView),
                e = Ge(t, this._hostView),
                n = (function (t, e, n) {
                  if (n.parent && -1 !== n.parent.injectorIndex) {
                    const t = n.parent.injectorIndex;
                    let e = n.parent;
                    for (; null != e.parent && t == e.parent.injectorIndex; ) e = e.parent;
                    return e;
                  }
                  let r = Be(t),
                    s = e,
                    i = e[6];
                  for (; r > 1; ) (s = s[15]), (i = s[6]), r--;
                  return i;
                })(t, this._hostView, this._hostTNode);
              return $e(t) && null != n ? new fn(n, e) : new fn(null, this._hostView);
            }
            clear() {
              for (; this.length > 0; ) this.remove(this.length - 1);
            }
            get(t) {
              return (null !== this._lContainer[8] && this._lContainer[8][t]) || null;
            }
            get length() {
              return this._lContainer.length - 10;
            }
            createEmbeddedView(t, e, n) {
              const r = t.createEmbeddedView(e || {});
              return this.insert(r, n), r;
            }
            createComponent(t, e, n, r, s) {
              const i = n || this.parentInjector;
              if (!s && null == t.ngModule && i) {
                const t = i.get(it, null);
                t && (s = t);
              }
              const o = t.create(i, r, void 0, s);
              return this.insert(o.hostView, e), o;
            }
            insert(t, e) {
              const n = t._lView,
                r = n[1];
              if (t.destroyed) throw new Error('Cannot insert a destroyed View in a ViewContainer!');
              if ((this.allocateContainerIfNeeded(), Dt(n[3]))) {
                const e = this.indexOf(t);
                if (-1 !== e) this.detach(e);
                else {
                  const e = n[3],
                    r = new ii(e, e[6], e[3]);
                  r.detach(r.indexOf(t));
                }
              }
              const s = this._adjustIndex(e);
              return (
                (function (t, e, n, r) {
                  const s = 10 + r,
                    i = n.length;
                  r > 0 && (n[s - 1][4] = e),
                    r < i - 10 ? ((e[4] = n[s]), ct(n, 10 + r, e)) : (n.push(e), (e[4] = null)),
                    (e[3] = n);
                  const o = e[17];
                  null !== o &&
                    n !== o &&
                    (function (t, e) {
                      const n = t[9];
                      e[16] !== e[3][3][16] && (t[2] = !0), null === n ? (t[9] = [e]) : n.push(e);
                    })(o, e);
                  const a = e[19];
                  null !== a && a.insertView(t), (e[2] |= 128);
                })(r, n, this._lContainer, s),
                Ns(r, n, !0, Zs(s, this._lContainer)),
                t.attachToViewContainerRef(this),
                ct(this._lContainer[8], s, t),
                t
              );
            }
            move(t, e) {
              if (t.destroyed) throw new Error('Cannot move a destroyed View in a ViewContainer!');
              return this.insert(t, e);
            }
            indexOf(t) {
              const e = this._lContainer[8];
              return null !== e ? e.indexOf(t) : -1;
            }
            remove(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1);
              !(function (t, e) {
                const n = Ms(t, e);
                n && Ls(n[1], n);
              })(this._lContainer, e),
                ut(this._lContainer[8], e);
            }
            detach(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1),
                n = Ms(this._lContainer, e);
              return n && null != ut(this._lContainer[8], e) ? new ei(n) : null;
            }
            _adjustIndex(t, e = 0) {
              return null == t ? this.length + e : t;
            }
            allocateContainerIfNeeded() {
              null === this._lContainer[8] && (this._lContainer[8] = []);
            }
          });
        const i = r[n.index];
        if (Dt(i)) s = i;
        else {
          let t;
          if (4 === n.type) t = qt(i);
          else if (((t = r[11].createComment('')), Vt(r))) {
            const e = r[11],
              s = Gt(n, r);
            Us(
              e,
              qs(e, s),
              t,
              (function (t, e) {
                return zt(t) ? t.nextSibling(e) : e.nextSibling;
              })(e, s)
            );
          } else Gs(r[1], r, t, n);
          (r[n.index] = s = ms(i, r, t, n)), vs(r, s);
        }
        return new ii(s, n, r);
      }
      function ci(t = !1) {
        return (function (t, e, n) {
          if (!n && Pt(t)) {
            const n = Qt(t.index, e);
            return new ei(n, n);
          }
          return 3 === t.type || 0 === t.type || 4 === t.type || 5 === t.type ? new ei(e[16], e) : null;
        })(ae(), se(), t);
      }
      let ui = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => hi()), t;
      })();
      const hi = ci,
        di = new B('Set Injector scope.'),
        fi = {},
        pi = {},
        gi = [];
      let mi = void 0;
      function bi() {
        return void 0 === mi && (mi = new st()), mi;
      }
      function yi(t, e = null, n = null, r) {
        return new vi(t, n, e || bi(), r);
      }
      class vi {
        constructor(t, e, n, r = null) {
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const s = [];
          e && lt(e, (n) => this.processProvider(n, t, e)),
            lt([t], (t) => this.processInjectorType(t, [], s)),
            this.records.set(G, Ci(void 0, this));
          const i = this.records.get(di);
          (this.scope = null != i ? i.value : null), (this.source = r || ('object' == typeof t ? null : A(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear();
          }
        }
        get(t, e = Z, n = p.Default) {
          this.assertNotDestroyed();
          const r = Y(this);
          try {
            if (!(n & p.SkipSelf)) {
              let e = this.records.get(t);
              if (void 0 === e) {
                const n = ('function' == typeof (s = t) || ('object' == typeof s && s instanceof B)) && v(t);
                (e = n && this.injectableDefInScope(n) ? Ci(_i(t), fi) : null), this.records.set(t, e);
              }
              if (null != e) return this.hydrate(t, e);
            }
            return (n & p.Self ? bi() : this.parent).get(t, (e = n & p.Optional && e === Z ? null : e));
          } catch (i) {
            if ('NullInjectorError' === i.name) {
              if (((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(A(t)), r)) throw i;
              return (function (t, e, n, r) {
                const s = t.ngTempTokenPath;
                throw (
                  (e.__source && s.unshift(e.__source),
                  (t.message = (function (t, e, n, r = null) {
                    t = t && '\n' === t.charAt(0) && '\u0275' == t.charAt(1) ? t.substr(2) : t;
                    let s = A(e);
                    if (Array.isArray(e)) s = e.map(A).join(' -> ');
                    else if ('object' == typeof e) {
                      let t = [];
                      for (let n in e)
                        if (e.hasOwnProperty(n)) {
                          let r = e[n];
                          t.push(n + ':' + ('string' == typeof r ? JSON.stringify(r) : A(r)));
                        }
                      s = `{${t.join(', ')}}`;
                    }
                    return `${n}${r ? '(' + r + ')' : ''}[${s}]: ${t.replace(W, '\n  ')}`;
                  })('\n' + t.message, s, n, r)),
                  (t.ngTokenPath = s),
                  (t.ngTempTokenPath = null),
                  t)
                );
              })(i, t, 'R3InjectorError', this.source);
            }
            throw i;
          } finally {
            Y(r);
          }
          var s;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return this.records.forEach((e, n) => t.push(A(n))), `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new Error('Injector has already been destroyed.');
        }
        processInjectorType(t, e, n) {
          if (!(t = R(t))) return !1;
          let r = w(t);
          const s = (null == r && t.ngModule) || void 0,
            i = void 0 === s ? t : s,
            o = -1 !== n.indexOf(i);
          if ((void 0 !== s && (r = w(s)), null == r)) return !1;
          if (null != r.imports && !o) {
            let t;
            n.push(i);
            try {
              lt(r.imports, (r) => {
                this.processInjectorType(r, e, n) && (void 0 === t && (t = []), t.push(r));
              });
            } finally {
            }
            if (void 0 !== t)
              for (let e = 0; e < t.length; e++) {
                const { ngModule: n, providers: r } = t[e];
                lt(r, (t) => this.processProvider(t, n, r || gi));
              }
          }
          this.injectorDefTypes.add(i), this.records.set(i, Ci(r.factory, fi));
          const a = r.providers;
          if (null != a && !o) {
            const e = t;
            lt(a, (t) => this.processProvider(t, e, a));
          }
          return void 0 !== s && void 0 !== t.providers;
        }
        processProvider(t, e, n) {
          let r = Ei((t = R(t))) ? t : R(t && t.provide);
          const s = (function (t, e, n) {
            return Si(t) ? Ci(void 0, t.useValue) : Ci(wi(t, e, n), fi);
          })(t, e, n);
          if (Ei(t) || !0 !== t.multi) {
            const t = this.records.get(r);
            t && void 0 !== t.multi && pr();
          } else {
            let e = this.records.get(r);
            e
              ? void 0 === e.multi && pr()
              : ((e = Ci(void 0, fi, !0)), (e.factory = () => rt(e.multi)), this.records.set(r, e)),
              (r = t),
              e.multi.push(t);
          }
          this.records.set(r, s);
        }
        hydrate(t, e) {
          var n;
          return (
            e.value === pi
              ? (function (t) {
                  throw new Error('Cannot instantiate cyclic dependency! ' + t);
                })(A(t))
              : e.value === fi && ((e.value = pi), (e.value = e.factory())),
            'object' == typeof e.value &&
              e.value &&
              null !== (n = e.value) &&
              'object' == typeof n &&
              'function' == typeof n.ngOnDestroy &&
              this.onDestroy.add(e.value),
            e.value
          );
        }
        injectableDefInScope(t) {
          return (
            !!t.providedIn &&
            ('string' == typeof t.providedIn
              ? 'any' === t.providedIn || t.providedIn === this.scope
              : this.injectorDefTypes.has(t.providedIn))
          );
        }
      }
      function _i(t) {
        const e = v(t),
          n = null !== e ? e.factory : It(t);
        if (null !== n) return n;
        const r = w(t);
        if (null !== r) return r.factory;
        if (t instanceof B) throw new Error(`Token ${A(t)} is missing a \u0275prov definition.`);
        if (t instanceof Function)
          return (function (t) {
            const e = t.length;
            if (e > 0) {
              const n = ht(e, '?');
              throw new Error(`Can't resolve all parameters for ${A(t)}: (${n.join(', ')}).`);
            }
            const n = (function (t) {
              const e = t && (t[C] || t[x] || (t[E] && t[E]()));
              if (e) {
                const n = (function (t) {
                  if (t.hasOwnProperty('name')) return t.name;
                  const e = ('' + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? '' : e[1];
                })(t);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in v10. Please add @Injectable() to the "${n}" class.`
                  ),
                  e
                );
              }
              return null;
            })(t);
            return null !== n ? () => n.factory(t) : () => new t();
          })(t);
        throw new Error('unreachable');
      }
      function wi(t, e, n) {
        let r = void 0;
        if (Ei(t)) {
          const e = R(t);
          return It(e) || _i(e);
        }
        if (Si(t)) r = () => R(t.useValue);
        else if ((s = t) && s.useFactory) r = () => t.useFactory(...rt(t.deps || []));
        else if (
          (function (t) {
            return !(!t || !t.useExisting);
          })(t)
        )
          r = () => et(R(t.useExisting));
        else {
          const s = R(t && (t.useClass || t.provide));
          if (
            (s ||
              (function (t, e, n) {
                let r = '';
                throw (
                  (t &&
                    e &&
                    (r = ` - only instances of Provider and Type are allowed, got: [${e
                      .map((t) => (t == n ? '?' + n + '?' : '...'))
                      .join(', ')}]`),
                  new Error(`Invalid provider for the NgModule '${A(t)}'` + r))
                );
              })(e, n, t),
            !(function (t) {
              return !!t.deps;
            })(t))
          )
            return It(s) || _i(s);
          r = () => new s(...rt(t.deps));
        }
        var s;
        return r;
      }
      function Ci(t, e, n = !1) {
        return { factory: t, value: e, multi: n ? [] : void 0 };
      }
      function Si(t) {
        return null !== t && 'object' == typeof t && Q in t;
      }
      function Ei(t) {
        return 'function' == typeof t;
      }
      const xi = function (t, e, n) {
        return (function (t, e = null, n = null, r) {
          const s = yi(t, e, n, r);
          return s._resolveInjectorDefTypes(), s;
        })({ name: n }, e, t, n);
      };
      let Oi = (() => {
        class t {
          static create(t, e) {
            return Array.isArray(t) ? xi(t, e, '') : xi(t.providers, t.parent, t.name || '');
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = Z),
          (t.NULL = new st()),
          (t.ɵprov = b({ token: t, providedIn: 'any', factory: () => et(G) })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      const Ai = new B('AnalyzeForEntryComponents');
      let ki = new Map();
      const Ti = new Set();
      function Ii(t) {
        return 'string' == typeof t ? t : t.text();
      }
      function Ri(t, e, n) {
        let r = n ? t.styles : null,
          s = n ? t.classes : null,
          i = 0;
        if (null !== e)
          for (let o = 0; o < e.length; o++) {
            const t = e[o];
            'number' == typeof t ? (i = t) : 1 == i ? (s = k(s, t)) : 2 == i && (r = k(r, t + ': ' + e[++o] + ';'));
          }
        n ? (t.styles = r) : (t.stylesWithoutHost = r), n ? (t.classes = s) : (t.classesWithoutHost = s);
      }
      let ji = null;
      function Di() {
        if (!ji) {
          const t = L.Symbol;
          if (t && t.iterator) ji = t.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < t.length; ++e) {
              const n = t[e];
              'entries' !== n && 'size' !== n && Map.prototype[n] === Map.prototype.entries && (ji = n);
            }
          }
        }
        return ji;
      }
      function Ni(t, e) {
        return t === e || ('number' == typeof t && 'number' == typeof e && isNaN(t) && isNaN(e));
      }
      class Pi {
        constructor(t) {
          this.wrapped = t;
        }
        static wrap(t) {
          return new Pi(t);
        }
        static unwrap(t) {
          return Pi.isWrapped(t) ? t.wrapped : t;
        }
        static isWrapped(t) {
          return t instanceof Pi;
        }
      }
      function Mi(t) {
        return !!Li(t) && (Array.isArray(t) || (!(t instanceof Map) && Di() in t));
      }
      function Li(t) {
        return null !== t && ('function' == typeof t || 'object' == typeof t);
      }
      function Vi(t, e, n) {
        return (t[e] = n);
      }
      function Fi(t, e, n) {
        return !Object.is(t[e], n) && ((t[e] = n), !0);
      }
      function Hi(t, e, n, r) {
        const s = Fi(t, e, n);
        return Fi(t, e + 1, r) || s;
      }
      function Ui(t, e, n, r) {
        const s = se();
        return Fi(s, ge(), e) && (ie(), fs(Ie(), s, t, e, n, r)), Ui;
      }
      function zi(t, e, n, r) {
        return Fi(t, ge(), n) ? e + Ze(n) + r : Or;
      }
      function $i(t, e, n, r, s, i, o, a) {
        const l = se(),
          c = ie(),
          u = t + 20,
          h = c.firstCreatePass
            ? (function (t, e, n, r, s, i, o, a, l) {
                const c = e.consts,
                  u = qr(e, n[6], t, 0, o || null, Xt(c, a));
                rs(e, n, u, Xt(c, l)), Re(e, u);
                const h = (u.tViews = Xr(2, -1, r, s, i, e.directiveRegistry, e.pipeRegistry, null, e.schemas, c)),
                  d = ts(0, null, 2, -1, null, null);
                return (
                  (d.injectorIndex = u.injectorIndex),
                  (h.node = d),
                  null !== e.queries && (e.queries.template(e, u), (h.queries = e.queries.embeddedTView(u))),
                  u
                );
              })(t, c, l, e, n, r, s, i, o)
            : c.data[u];
        le(h, !1);
        const d = l[11].createComment('');
        Gs(c, l, d, h), dr(d, l), vs(l, (l[u] = ms(d, l, d, h))), Mt(h) && Kr(c, l, h), null != o && Jr(l, h, a);
      }
      function qi(t) {
        return Wt(ne.lFrame.contextLView, t);
      }
      function Bi(t, e = p.Default) {
        const n = se();
        return null == n ? et(t, e) : on(ae(), n, R(t), e);
      }
      function Gi(t) {
        return (function (t, e) {
          if ('class' === e) return t.classes;
          if ('style' === e) return t.styles;
          const n = t.attrs;
          if (n) {
            const t = n.length;
            let r = 0;
            for (; r < t; ) {
              const s = n[r];
              if (Fe(s)) break;
              if (0 === s) r += 2;
              else if ('number' == typeof s) for (r++; r < t && 'string' == typeof n[r]; ) r++;
              else {
                if (s === e) return n[r + 1];
                r += 2;
              }
            }
          }
          return null;
        })(ae(), t);
      }
      function Zi() {
        throw new Error('invalid');
      }
      function Wi(t, e, n) {
        const r = se();
        return Fi(r, ge(), e) && ns(ie(), Ie(), r, t, e, r[11], n, !1), Wi;
      }
      function Qi(t, e, n, r, s) {
        const i = s ? 'class' : 'style';
        ks(t, n, e.inputs[i], i, r);
      }
      function Ki(t, e, n, r) {
        const s = se(),
          i = ie(),
          o = 20 + t,
          a = s[11],
          l = (s[o] = zr(e, a, ne.lFrame.currentNamespace)),
          c = i.firstCreatePass
            ? (function (t, e, n, r, s, i, o) {
                const a = e.consts,
                  l = Xt(a, i),
                  c = qr(e, n[6], t, 3, s, l);
                return (
                  rs(e, n, c, Xt(a, o)),
                  null !== c.attrs && Ri(c, c.attrs, !1),
                  null !== c.mergedAttrs && Ri(c, c.mergedAttrs, !0),
                  null !== e.queries && e.queries.elementStart(e, c),
                  c
                );
              })(t, i, s, 0, e, n, r)
            : i.data[o];
        le(c, !0);
        const u = c.mergedAttrs;
        null !== u && Ve(a, l, u);
        const h = c.classes;
        null !== h && ti(a, l, h);
        const d = c.styles;
        null !== d && Xs(a, l, d),
          Gs(i, s, l, c),
          0 === ne.lFrame.elementDepthCount && dr(l, s),
          ne.lFrame.elementDepthCount++,
          Mt(c) && (Kr(i, s, c), Qr(i, c, s)),
          null !== r && Jr(s, c);
      }
      function Ji() {
        let t = ae();
        ce() ? ue() : ((t = t.parent), le(t, !1));
        const e = t;
        ne.lFrame.elementDepthCount--;
        const n = ie();
        n.firstCreatePass && (Re(n, t), Nt(t) && n.queries.elementEnd(t)),
          null != e.classesWithoutHost &&
            (function (t) {
              return 0 != (16 & t.flags);
            })(e) &&
            Qi(n, e, se(), e.classesWithoutHost, !0),
          null != e.stylesWithoutHost &&
            (function (t) {
              return 0 != (32 & t.flags);
            })(e) &&
            Qi(n, e, se(), e.stylesWithoutHost, !1);
      }
      function Yi(t, e, n, r) {
        Ki(t, e, n, r), Ji();
      }
      function Xi(t, e, n) {
        const r = se(),
          s = ie(),
          i = t + 20,
          o = s.firstCreatePass
            ? (function (t, e, n, r, s) {
                const i = e.consts,
                  o = Xt(i, r),
                  a = qr(e, n[6], t, 4, 'ng-container', o);
                return (
                  null !== o && Ri(a, o, !0),
                  rs(e, n, a, Xt(i, s)),
                  null !== e.queries && e.queries.elementStart(e, a),
                  a
                );
              })(t, s, r, e, n)
            : s.data[i];
        le(o, !0);
        const a = (r[i] = r[11].createComment(''));
        Gs(s, r, a, o), dr(a, r), Mt(o) && (Kr(s, r, o), Qr(s, o, r)), null != n && Jr(r, o);
      }
      function to() {
        let t = ae();
        const e = ie();
        ce() ? ue() : ((t = t.parent), le(t, !1)), e.firstCreatePass && (Re(e, t), Nt(t) && e.queries.elementEnd(t));
      }
      function eo() {
        return se();
      }
      function no(t) {
        return !!t && 'function' == typeof t.then;
      }
      function ro(t) {
        return !!t && 'function' == typeof t.subscribe;
      }
      function so(t, e, n = !1, r) {
        const s = se(),
          i = ie(),
          o = ae();
        return (
          (function (t, e, n, r, s, i, o = !1, a) {
            const l = Mt(r),
              c = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
              u = xs(e);
            let h = !0;
            if (3 === r.type) {
              const d = Gt(r, e),
                f = a ? a(d) : bt,
                p = f.target || d,
                g = u.length,
                m = a ? (t) => a(qt(t[r.index])).target : r.index;
              if (zt(n)) {
                let o = null;
                if (
                  (!a &&
                    l &&
                    (o = (function (t, e, n, r) {
                      const s = t.cleanup;
                      if (null != s)
                        for (let i = 0; i < s.length - 1; i += 2) {
                          const t = s[i];
                          if (t === n && s[i + 1] === r) {
                            const t = e[7],
                              n = s[i + 2];
                            return t.length > n ? t[n] : null;
                          }
                          'string' == typeof t && (i += 2);
                        }
                      return null;
                    })(t, e, s, r.index)),
                  null !== o)
                )
                  ((o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i), (o.__ngLastListenerFn__ = i), (h = !1);
                else {
                  i = oo(r, e, i, !1);
                  const t = n.listen(f.name || p, s, i);
                  u.push(i, t), c && c.push(s, m, g, g + 1);
                }
              } else (i = oo(r, e, i, !0)), p.addEventListener(s, i, o), u.push(i), c && c.push(s, m, g, o);
            }
            const d = r.outputs;
            let f;
            if (h && null !== d && (f = d[s])) {
              const t = f.length;
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[f[n]][f[n + 1]].subscribe(i),
                    o = u.length;
                  u.push(i, t), c && c.push(s, r.index, o, -(o + 1));
                }
            }
          })(i, s, s[11], o, t, e, n, r),
          so
        );
      }
      function io(t, e, n) {
        try {
          return !1 !== e(n);
        } catch (r) {
          return As(t, r), !1;
        }
      }
      function oo(t, e, n, r) {
        return function s(i) {
          if (i === Function) return n;
          const o = 2 & t.flags ? Qt(t.index, e) : e;
          0 == (32 & e[2]) && _s(o);
          let a = io(e, n, i),
            l = s.__ngNextListenerFn__;
          for (; l; ) (a = io(e, l, i) && a), (l = l.__ngNextListenerFn__);
          return r && !1 === a && (i.preventDefault(), (i.returnValue = !1)), a;
        };
      }
      function ao(t = 1) {
        return (function (t) {
          return (ne.lFrame.contextLView = (function (t, e) {
            for (; t > 0; ) (e = e[15]), t--;
            return e;
          })(t, ne.lFrame.contextLView))[8];
        })(t);
      }
      function lo(t, e) {
        let n = null;
        const r = (function (t) {
          const e = t.attrs;
          if (null != e) {
            const t = e.indexOf(5);
            if (0 == (1 & t)) return e[t + 1];
          }
          return null;
        })(t);
        for (let s = 0; s < e.length; s++) {
          const i = e[s];
          if ('*' !== i) {
            if (null === r ? Cr(t, i, !0) : Sr(r, i)) return s;
          } else n = s;
        }
        return n;
      }
      function co(t) {
        const e = se()[16][6];
        if (!e.projection) {
          const n = (e.projection = ht(t ? t.length : 1, null)),
            r = n.slice();
          let s = e.child;
          for (; null !== s; ) {
            const e = t ? lo(s, t) : 0;
            null !== e && (r[e] ? (r[e].projectionNext = s) : (n[e] = s), (r[e] = s)), (s = s.next);
          }
        }
      }
      let uo = !1;
      function ho(t) {
        uo = t;
      }
      function fo(t, e = 0, n) {
        const r = se(),
          s = ie(),
          i = qr(s, r[6], t, 1, null, n || null);
        null === i.projection && (i.projection = e), ue(), uo || Js(s, r, i);
      }
      function po(t, e, n) {
        return go(t, '', e, '', n), po;
      }
      function go(t, e, n, r, s) {
        const i = se(),
          o = zi(i, e, n, r);
        return o !== Or && ns(ie(), Ie(), i, t, o, i[11], s, !1), go;
      }
      const mo = [];
      function bo(t, e, n, r, s) {
        const i = t[n + 1],
          o = null === e;
        let a = r ? Mr(i) : Vr(i),
          l = !1;
        for (; 0 !== a && (!1 === l || o); ) {
          const n = t[a + 1];
          yo(t[a], e) && ((l = !0), (t[a + 1] = r ? Hr(n) : Lr(n))), (a = r ? Mr(n) : Vr(n));
        }
        l && (t[n + 1] = r ? Lr(i) : Hr(i));
      }
      function yo(t, e) {
        return (
          null === t ||
          null == e ||
          (Array.isArray(t) ? t[1] : t) === e ||
          (!(!Array.isArray(t) || 'string' != typeof e) && pt(t, e) >= 0)
        );
      }
      const vo = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function _o(t) {
        return t.substring(vo.key, vo.keyEnd);
      }
      function wo(t, e) {
        const n = vo.textEnd;
        return n === e
          ? -1
          : ((e = vo.keyEnd = (function (t, e, n) {
              for (; e < n && t.charCodeAt(e) > 32; ) e++;
              return e;
            })(t, (vo.key = e), n)),
            Co(t, e, n));
      }
      function Co(t, e, n) {
        for (; e < n && t.charCodeAt(e) <= 32; ) e++;
        return e;
      }
      function So(t, e, n) {
        return Ao(t, e, n, !1), So;
      }
      function Eo(t, e) {
        return Ao(t, e, null, !0), Eo;
      }
      function xo(t) {
        ko(dt, Oo, t, !0);
      }
      function Oo(t, e) {
        for (
          let n = (function (t) {
            return (
              (function (t) {
                (vo.key = 0), (vo.keyEnd = 0), (vo.value = 0), (vo.valueEnd = 0), (vo.textEnd = t.length);
              })(t),
              wo(t, Co(t, 0, vo.textEnd))
            );
          })(e);
          n >= 0;
          n = wo(e, n)
        )
          dt(t, _o(e), !0);
      }
      function Ao(t, e, n, r) {
        const s = se(),
          i = ie(),
          o = me(2);
        if ((i.firstUpdatePass && Io(i, t, o, r), e !== Or && Fi(s, o, e))) {
          let a;
          null == n &&
            (a = (function () {
              const t = ne.lFrame;
              return null === t ? null : t.currentSanitizer;
            })()) &&
            (n = a),
            Do(
              i,
              i.data[ke() + 20],
              s,
              s[11],
              t,
              (s[o + 1] = (function (t, e) {
                return (
                  null == t ||
                    ('function' == typeof e
                      ? (t = e(t))
                      : 'string' == typeof e
                      ? (t += e)
                      : 'object' == typeof t && (t = A(On(t)))),
                  t
                );
              })(e, n)),
              r,
              o
            );
        }
      }
      function ko(t, e, n, r) {
        const s = ie(),
          i = me(2);
        s.firstUpdatePass && Io(s, null, i, r);
        const o = se();
        if (n !== Or && Fi(o, i, n)) {
          const a = s.data[ke() + 20];
          if (Mo(a, r) && !To(s, i)) {
            let t = r ? a.classesWithoutHost : a.stylesWithoutHost;
            null !== t && (n = k(t, n || '')), Qi(s, a, o, n, r);
          } else
            !(function (t, e, n, r, s, i, o, a) {
              s === Or && (s = mo);
              let l = 0,
                c = 0,
                u = 0 < s.length ? s[0] : null,
                h = 0 < i.length ? i[0] : null;
              for (; null !== u || null !== h; ) {
                const d = l < s.length ? s[l + 1] : void 0,
                  f = c < i.length ? i[c + 1] : void 0;
                let p = null,
                  g = void 0;
                u === h
                  ? ((l += 2), (c += 2), d !== f && ((p = h), (g = f)))
                  : null === h || (null !== u && u < h)
                  ? ((l += 2), (p = u))
                  : ((c += 2), (p = h), (g = f)),
                  null !== p && Do(t, e, n, r, p, g, o, a),
                  (u = l < s.length ? s[l] : null),
                  (h = c < i.length ? i[c] : null);
              }
            })(
              s,
              a,
              o,
              o[11],
              o[i + 1],
              (o[i + 1] = (function (t, e, n) {
                if (null == n || '' === n) return mo;
                const r = [],
                  s = On(n);
                if (Array.isArray(s)) for (let i = 0; i < s.length; i++) t(r, s[i], !0);
                else if ('object' == typeof s) for (const i in s) s.hasOwnProperty(i) && t(r, i, s[i]);
                else 'string' == typeof s && e(r, s);
                return r;
              })(t, e, n)),
              r,
              i
            );
        }
      }
      function To(t, e) {
        return e >= t.expandoStartIndex;
      }
      function Io(t, e, n, r) {
        const s = t.data;
        if (null === s[n + 1]) {
          const i = s[ke() + 20],
            o = To(t, n);
          Mo(i, r) && null === e && !o && (e = !1),
            (e = (function (t, e, n, r) {
              const s = (function (t) {
                const e = ne.lFrame.currentDirectiveIndex;
                return -1 === e ? null : t[e];
              })(t);
              let i = r ? e.residualClasses : e.residualStyles;
              if (null === s)
                0 === (r ? e.classBindings : e.styleBindings) &&
                  ((n = jo((n = Ro(null, t, e, n, r)), e.attrs, r)), (i = null));
              else {
                const o = e.directiveStylingLast;
                if (-1 === o || t[o] !== s)
                  if (((n = Ro(s, t, e, n, r)), null === i)) {
                    let n = (function (t, e, n) {
                      const r = n ? e.classBindings : e.styleBindings;
                      if (0 !== Vr(r)) return t[Mr(r)];
                    })(t, e, r);
                    void 0 !== n &&
                      Array.isArray(n) &&
                      ((n = Ro(null, t, e, n[1], r)),
                      (n = jo(n, e.attrs, r)),
                      (function (t, e, n, r) {
                        t[Mr(n ? e.classBindings : e.styleBindings)] = r;
                      })(t, e, r, n));
                  } else
                    i = (function (t, e, n) {
                      let r = void 0;
                      const s = e.directiveEnd;
                      for (let i = 1 + e.directiveStylingLast; i < s; i++) r = jo(r, t[i].hostAttrs, n);
                      return jo(r, e.attrs, n);
                    })(t, e, r);
              }
              return void 0 !== i && (r ? (e.residualClasses = i) : (e.residualStyles = i)), n;
            })(s, i, e, r)),
            (function (t, e, n, r, s, i) {
              let o = i ? e.classBindings : e.styleBindings,
                a = Mr(o),
                l = Vr(o);
              t[r] = n;
              let c,
                u = !1;
              if (Array.isArray(n)) {
                const t = n;
                (c = t[1]), (null === c || pt(t, c) > 0) && (u = !0);
              } else c = n;
              if (s)
                if (0 !== l) {
                  const e = Mr(t[a + 1]);
                  (t[r + 1] = Pr(e, a)),
                    0 !== e && (t[e + 1] = Fr(t[e + 1], r)),
                    (t[a + 1] = (131071 & t[a + 1]) | (r << 17));
                } else (t[r + 1] = Pr(a, 0)), 0 !== a && (t[a + 1] = Fr(t[a + 1], r)), (a = r);
              else (t[r + 1] = Pr(l, 0)), 0 === a ? (a = r) : (t[l + 1] = Fr(t[l + 1], r)), (l = r);
              u && (t[r + 1] = Lr(t[r + 1])),
                bo(t, c, r, !0),
                bo(t, c, r, !1),
                (function (t, e, n, r, s) {
                  const i = s ? t.residualClasses : t.residualStyles;
                  null != i && 'string' == typeof e && pt(i, e) >= 0 && (n[r + 1] = Hr(n[r + 1]));
                })(e, c, t, r, i),
                (o = Pr(a, l)),
                i ? (e.classBindings = o) : (e.styleBindings = o);
            })(s, i, e, n, o, r);
        }
      }
      function Ro(t, e, n, r, s) {
        let i = null;
        const o = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (-1 === a ? (a = n.directiveStart) : a++; a < o && ((i = e[a]), (r = jo(r, i.hostAttrs, s)), i !== t); )
          a++;
        return null !== t && (n.directiveStylingLast = a), r;
      }
      function jo(t, e, n) {
        const r = n ? 1 : 2;
        let s = -1;
        if (null !== e)
          for (let i = 0; i < e.length; i++) {
            const o = e[i];
            'number' == typeof o
              ? (s = o)
              : s === r && (Array.isArray(t) || (t = void 0 === t ? [] : ['', t]), dt(t, o, !!n || e[++i]));
          }
        return void 0 === t ? null : t;
      }
      function Do(t, e, n, r, s, i, o, a) {
        if (3 !== e.type) return;
        const l = t.data,
          c = l[a + 1];
        Po(1 == (1 & c) ? No(l, e, n, s, Vr(c), o) : void 0) ||
          (Po(i) ||
            ((function (t) {
              return 2 == (2 & t);
            })(c) &&
              (i = No(l, null, n, s, a, o))),
          (function (t, e, n, r, s) {
            const i = zt(t);
            if (e) s ? (i ? t.addClass(n, r) : n.classList.add(r)) : i ? t.removeClass(n, r) : n.classList.remove(r);
            else {
              const e = -1 == r.indexOf('-') ? void 0 : 2;
              null == s
                ? i
                  ? t.removeStyle(n, r, e)
                  : n.style.removeProperty(r)
                : i
                ? t.setStyle(n, r, s, e)
                : n.style.setProperty(r, s);
            }
          })(r, o, Bt(ke(), n), s, i));
      }
      function No(t, e, n, r, s, i) {
        const o = null === e;
        let a = void 0;
        for (; s > 0; ) {
          const e = t[s],
            i = Array.isArray(e),
            l = i ? e[1] : e,
            c = null === l;
          let u = n[s + 1];
          u === Or && (u = c ? mo : void 0);
          let h = c ? ft(u, r) : l === r ? u : void 0;
          if ((i && !Po(h) && (h = ft(e, r)), Po(h) && ((a = h), o))) return a;
          const d = t[s + 1];
          s = o ? Mr(d) : Vr(d);
        }
        if (null !== e) {
          let t = i ? e.residualClasses : e.residualStyles;
          null != t && (a = ft(t, r));
        }
        return a;
      }
      function Po(t) {
        return void 0 !== t;
      }
      function Mo(t, e) {
        return 0 != (t.flags & (e ? 16 : 32));
      }
      function Lo(t, e = '') {
        const n = se(),
          r = ie(),
          s = t + 20,
          i = r.firstCreatePass ? qr(r, n[6], t, 3, null, null) : r.data[s],
          o = (n[s] = Ds(e, n[11]));
        Gs(r, n, o, i), le(i, !1);
      }
      function Vo(t) {
        return Fo('', t, ''), Vo;
      }
      function Fo(t, e, n) {
        const r = se(),
          s = zi(r, t, e, n);
        return s !== Or && Ts(r, ke(), s), Fo;
      }
      function Ho(t, e, n, r, s) {
        const i = se(),
          o = (function (t, e, n, r, s, i) {
            const o = Hi(t, pe(), n, s);
            return me(2), o ? e + Ze(n) + r + Ze(s) + i : Or;
          })(i, t, e, n, r, s);
        return o !== Or && Ts(i, ke(), o), Ho;
      }
      function Uo(t, e, n) {
        ko(dt, Oo, zi(se(), t, e, n), !0);
      }
      function zo(t, e, n, r, s, i, o, a, l) {
        ko(
          dt,
          Oo,
          (function (t, e, n, r, s, i, o, a, l, c) {
            const u = (function (t, e, n, r, s, i) {
              const o = Hi(t, e, n, r);
              return Hi(t, e + 2, s, i) || o;
            })(t, pe(), n, s, o, l);
            return me(4), u ? e + Ze(n) + r + Ze(s) + i + Ze(o) + a + Ze(l) + c : Or;
          })(se(), t, e, n, r, s, i, o, a, l),
          !0
        );
      }
      function $o(t, e, n) {
        const r = se();
        return Fi(r, ge(), e) && ns(ie(), Ie(), r, t, e, r[11], n, !0), $o;
      }
      function qo(t, e) {
        const n = Kt(t)[1],
          r = n.data.length - 1;
        Re(n, { directiveStart: r, directiveEnd: r + 1 });
      }
      function Bo(t) {
        let e = Object.getPrototypeOf(t.type.prototype).constructor,
          n = !0;
        const r = [t];
        for (; e; ) {
          let s = void 0;
          if (Lt(t)) s = e.ɵcmp || e.ɵdir;
          else {
            if (e.ɵcmp) throw new Error('Directives cannot inherit Components');
            s = e.ɵdir;
          }
          if (s) {
            if (n) {
              r.push(s);
              const e = t;
              (e.inputs = Go(t.inputs)), (e.declaredInputs = Go(t.declaredInputs)), (e.outputs = Go(t.outputs));
              const n = s.hostBindings;
              n && Qo(t, n);
              const i = s.viewQuery,
                o = s.contentQueries;
              if (
                (i && Zo(t, i),
                o && Wo(t, o),
                m(t.inputs, s.inputs),
                m(t.declaredInputs, s.declaredInputs),
                m(t.outputs, s.outputs),
                Lt(s) && s.data.animation)
              ) {
                const e = t.data;
                e.animation = (e.animation || []).concat(s.data.animation);
              }
              (e.afterContentChecked = e.afterContentChecked || s.afterContentChecked),
                (e.afterContentInit = t.afterContentInit || s.afterContentInit),
                (e.afterViewChecked = t.afterViewChecked || s.afterViewChecked),
                (e.afterViewInit = t.afterViewInit || s.afterViewInit),
                (e.doCheck = t.doCheck || s.doCheck),
                (e.onDestroy = t.onDestroy || s.onDestroy),
                (e.onInit = t.onInit || s.onInit);
            }
            const e = s.features;
            if (e)
              for (let r = 0; r < e.length; r++) {
                const s = e[r];
                s && s.ngInherit && s(t), s === Bo && (n = !1);
              }
          }
          e = Object.getPrototypeOf(e);
        }
        !(function (t) {
          let e = 0,
            n = null;
          for (let r = t.length - 1; r >= 0; r--) {
            const s = t[r];
            (s.hostVars = e += s.hostVars), (s.hostAttrs = Ue(s.hostAttrs, (n = Ue(n, s.hostAttrs))));
          }
        })(r);
      }
      function Go(t) {
        return t === bt ? {} : t === yt ? [] : t;
      }
      function Zo(t, e) {
        const n = t.viewQuery;
        t.viewQuery = n
          ? (t, r) => {
              e(t, r), n(t, r);
            }
          : e;
      }
      function Wo(t, e) {
        const n = t.contentQueries;
        t.contentQueries = n
          ? (t, r, s) => {
              e(t, r, s), n(t, r, s);
            }
          : e;
      }
      function Qo(t, e) {
        const n = t.hostBindings;
        t.hostBindings = n
          ? (t, r) => {
              e(t, r), n(t, r);
            }
          : e;
      }
      class Ko {
        constructor(t, e, n) {
          (this.previousValue = t), (this.currentValue = e), (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Jo(t) {
        t.type.prototype.ngOnChanges &&
          ((t.setInput = Yo),
          (t.onChanges = function () {
            const t = Xo(this),
              e = t && t.current;
            if (e) {
              const n = t.previous;
              if (n === bt) t.previous = e;
              else for (let t in e) n[t] = e[t];
              (t.current = null), this.ngOnChanges(e);
            }
          }));
      }
      function Yo(t, e, n, r) {
        const s =
            Xo(t) ||
            (function (t, e) {
              return (t.__ngSimpleChanges__ = e);
            })(t, { previous: bt, current: null }),
          i = s.current || (s.current = {}),
          o = s.previous,
          a = this.declaredInputs[n],
          l = o[a];
        (i[a] = new Ko(l && l.currentValue, e, o === bt)), (t[r] = e);
      }
      function Xo(t) {
        return t.__ngSimpleChanges__ || null;
      }
      function ta(t, e, n, r, s) {
        if (((t = R(t)), Array.isArray(t))) for (let i = 0; i < t.length; i++) ta(t[i], e, n, r, s);
        else {
          const i = ie(),
            o = se();
          let a = Ei(t) ? t : R(t.provide),
            l = wi(t);
          const c = ae(),
            u = 65535 & c.providerIndexes,
            h = c.directiveStart,
            d = c.providerIndexes >> 16;
          if (Ei(t) || !t.multi) {
            const r = new Le(l, s, Bi),
              f = ra(a, e, s ? u : u + d, h);
            -1 === f
              ? (sn(tn(c, o), i, a),
                ea(i, t, e.length),
                e.push(a),
                c.directiveStart++,
                c.directiveEnd++,
                s && (c.providerIndexes += 65536),
                n.push(r),
                o.push(r))
              : ((n[f] = r), (o[f] = r));
          } else {
            const f = ra(a, e, u + d, h),
              p = ra(a, e, u, u + d),
              g = f >= 0 && n[f],
              m = p >= 0 && n[p];
            if ((s && !m) || (!s && !g)) {
              sn(tn(c, o), i, a);
              const u = (function (t, e, n, r, s) {
                const i = new Le(t, n, Bi);
                return (i.multi = []), (i.index = e), (i.componentProviders = 0), na(i, s, r && !n), i;
              })(s ? ia : sa, n.length, s, r, l);
              !s && m && (n[p].providerFactory = u),
                ea(i, t, e.length, 0),
                e.push(a),
                c.directiveStart++,
                c.directiveEnd++,
                s && (c.providerIndexes += 65536),
                n.push(u),
                o.push(u);
            } else ea(i, t, f > -1 ? f : p, na(n[s ? p : f], l, !s && r));
            !s && r && m && n[p].componentProviders++;
          }
        }
      }
      function ea(t, e, n, r) {
        const s = Ei(e);
        if (s || e.useClass) {
          const i = (e.useClass || e).prototype.ngOnDestroy;
          if (i) {
            const o = t.destroyHooks || (t.destroyHooks = []);
            if (!s && e.multi) {
              const t = o.indexOf(n);
              -1 === t ? o.push(n, [r, i]) : o[t + 1].push(r, i);
            } else o.push(n, i);
          }
        }
      }
      function na(t, e, n) {
        return n && t.componentProviders++, t.multi.push(e) - 1;
      }
      function ra(t, e, n, r) {
        for (let s = n; s < r; s++) if (e[s] === t) return s;
        return -1;
      }
      function sa(t, e, n, r) {
        return oa(this.multi, []);
      }
      function ia(t, e, n, r) {
        const s = this.multi;
        let i;
        if (this.providerFactory) {
          const t = this.providerFactory.componentProviders,
            e = un(n, n[1], this.providerFactory.index, r);
          (i = e.slice(0, t)), oa(s, i);
          for (let n = t; n < e.length; n++) i.push(e[n]);
        } else (i = []), oa(s, i);
        return i;
      }
      function oa(t, e) {
        for (let n = 0; n < t.length; n++) e.push((0, t[n])());
        return e;
      }
      function aa(t, e = []) {
        return (n) => {
          n.providersResolver = (n, r) =>
            (function (t, e, n) {
              const r = ie();
              if (r.firstCreatePass) {
                const s = Lt(t);
                ta(n, r.data, r.blueprint, s, !0), ta(e, r.data, r.blueprint, s, !1);
              }
            })(n, r ? r(t) : t, e);
        };
      }
      Jo.ngInherit = !0;
      class la {}
      class ca {
        resolveComponentFactory(t) {
          throw (function (t) {
            const e = Error(`No component factory found for ${A(t)}. Did you add it to @NgModule.entryComponents?`);
            return (e.ngComponent = t), e;
          })(t);
        }
      }
      let ua = (() => {
          class t {}
          return (t.NULL = new ca()), t;
        })(),
        ha = (() => {
          class t {
            constructor(t) {
              this.nativeElement = t;
            }
          }
          return (t.__NG_ELEMENT_ID__ = () => da(t)), t;
        })();
      const da = function (t) {
        return oi(t, ae(), se());
      };
      class fa {}
      const pa = (function () {
        var t = { Important: 1, DashCase: 2 };
        return (t[t.Important] = 'Important'), (t[t.DashCase] = 'DashCase'), t;
      })();
      let ga = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => ma()), t;
      })();
      const ma = function () {
        const t = se(),
          e = Qt(ae().index, t);
        return (function (t) {
          const e = t[11];
          if (zt(e)) return e;
          throw new Error('Cannot inject Renderer2 when the application uses Renderer3!');
        })(jt(e) ? e : t);
      };
      let ba = (() => {
        class t {}
        return (t.ɵprov = b({ token: t, providedIn: 'root', factory: () => null })), t;
      })();
      class ya {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        }
      }
      const va = new ya('9.1.12');
      class _a {
        constructor() {}
        supports(t) {
          return Mi(t);
        }
        create(t) {
          return new Ca(t);
        }
      }
      const wa = (t, e) => e;
      class Ca {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || wa);
        }
        forEachItem(t) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) t(e);
        }
        forEachOperation(t) {
          let e = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; e || n; ) {
            const i = !n || (e && e.currentIndex < Oa(n, r, s)) ? e : n,
              o = Oa(i, r, s),
              a = i.currentIndex;
            if (i === n) r--, (n = n._nextRemoved);
            else if (((e = e._next), null == i.previousIndex)) r++;
            else {
              s || (s = []);
              const t = o - r,
                e = a - r;
              if (t != e) {
                for (let n = 0; n < t; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    i = r + n;
                  e <= i && i < t && (s[n] = r + 1);
                }
                s[i.previousIndex] = e - t;
              }
            }
            o !== a && t(i, o, a);
          }
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachMovedItem(t) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        forEachIdentityChange(t) {
          let e;
          for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e);
        }
        diff(t) {
          if ((null == t && (t = []), !Mi(t)))
            throw new Error(`Error trying to diff '${A(t)}'. Only arrays and iterables are allowed`);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e,
            n,
            r,
            s = this._itHead,
            i = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let e = 0; e < this.length; e++)
              (n = t[e]),
                (r = this._trackByFn(e, n)),
                null !== s && Ni(s.trackById, r)
                  ? (i && (s = this._verifyReinsertion(s, n, r, e)), Ni(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, e)), (i = !0)),
                (s = s._next);
          } else
            (e = 0),
              (function (t, e) {
                if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[Di()]();
                  let r;
                  for (; !(r = n.next()).done; ) e(r.value);
                }
              })(t, (t) => {
                (r = this._trackByFn(e, t)),
                  null !== s && Ni(s.trackById, r)
                    ? (i && (s = this._verifyReinsertion(s, t, r, e)), Ni(s.item, t) || this._addIdentityChange(s, t))
                    : ((s = this._mismatch(s, t, r, e)), (i = !0)),
                  (s = s._next),
                  e++;
              }),
              (this.length = e);
          return this._truncate(s), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t, e;
            for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
            for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e)
              (t.previousIndex = t.currentIndex), (e = t._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, e, n, r) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r))
              ? (Ni(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, s, r))
              : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null))
              ? (Ni(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, s, r))
              : (t = this._addAfter(new Sa(e, n), s, r)),
            t
          );
        }
        _verifyReinsertion(t, e, n, r) {
          let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, r))
              : t.currentIndex != r && ((t.currentIndex = r), this._addToMoves(t, r)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next;
            this._addToRemovals(this._unlink(t)), (t = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const r = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _moveAfter(t, e, n) {
          return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t;
        }
        _addAfter(t, e, n) {
          return (
            this._insertAfter(t, e, n),
            (this._additionsTail =
              null === this._additionsTail ? (this._additionsHead = t) : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, e, n) {
          const r = null === e ? this._itHead : e._next;
          return (
            (t._next = r),
            (t._prev = e),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new xa()),
            this._linkedRecords.put(t),
            (t.currentIndex = n),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const e = t._prev,
            n = t._next;
          return null === e ? (this._itHead = n) : (e._next = n), null === n ? (this._itTail = e) : (n._prev = e), t;
        }
        _addToMoves(t, e) {
          return (
            t.previousIndex === e ||
              (this._movesTail = null === this._movesTail ? (this._movesHead = t) : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new xa()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t), (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class Sa {
        constructor(t, e) {
          (this.item = t),
            (this.trackById = e),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class Ea {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t), (t._nextDup = null), (t._prevDup = null))
            : ((this._tail._nextDup = t), (t._prevDup = this._tail), (t._nextDup = null), (this._tail = t));
        }
        get(t, e) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if ((null === e || e <= n.currentIndex) && Ni(n.trackById, t)) return n;
          return null;
        }
        remove(t) {
          const e = t._prevDup,
            n = t._nextDup;
          return (
            null === e ? (this._head = n) : (e._nextDup = n),
            null === n ? (this._tail = e) : (n._prevDup = e),
            null === this._head
          );
        }
      }
      class xa {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const e = t.trackById;
          let n = this.map.get(e);
          n || ((n = new Ea()), this.map.set(e, n)), n.add(t);
        }
        get(t, e) {
          const n = this.map.get(t);
          return n ? n.get(t, e) : null;
        }
        remove(t) {
          const e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Oa(t, e, n) {
        const r = t.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + e + s;
      }
      class Aa {
        constructor() {}
        supports(t) {
          return t instanceof Map || Li(t);
        }
        create() {
          return new ka();
        }
      }
      class ka {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
        }
        forEachItem(t) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) t(e);
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachChangedItem(t) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Li(t)))
              throw new Error(`Error trying to diff '${A(t)}'. Only maps and objects are allowed`);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, n) => {
              if (e && e.key === n) this._maybeAddToChanges(e, t), (this._appendAfter = e), (e = e._next);
              else {
                const r = this._getOrCreateRecordForKey(n, t);
                e = this._insertBeforeOrAppend(e, r);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let t = e; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const n = t._prev;
            return (
              (e._next = t),
              (e._prev = n),
              (t._prev = e),
              n && (n._next = e),
              t === this._mapHead && (this._mapHead = e),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter ? ((this._appendAfter._next = e), (e._prev = this._appendAfter)) : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            const r = n._prev,
              s = n._next;
            return r && (r._next = s), s && (s._prev = r), (n._next = null), (n._prev = null), n;
          }
          const n = new Ta(t);
          return this._records.set(t, n), (n.currentValue = e), this._addToAdditions(n), n;
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next)
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, e) {
          Ni(e, t.currentValue) || ((t.previousValue = t.currentValue), (t.currentValue = e), this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, e) {
          t instanceof Map ? t.forEach(e) : Object.keys(t).forEach((n) => e(t[n], n));
        }
      }
      class Ta {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let Ia = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (null != n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n) throw new Error('Cannot extend IterableDiffers without a parent injector');
                  return t.create(e, n);
                },
                deps: [[t, new f(), new h()]],
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (null != e) return e;
              throw new Error(
                `Cannot find a differ supporting object '${t}' of type '${((n = t), n.name || typeof n)}'`
              );
              var n;
            }
          }
          return (t.ɵprov = b({ token: t, providedIn: 'root', factory: () => new t([new _a()]) })), t;
        })(),
        Ra = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n) throw new Error('Cannot extend KeyValueDiffers without a parent injector');
                  return t.create(e, n);
                },
                deps: [[t, new f(), new h()]],
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (e) return e;
              throw new Error(`Cannot find a differ supporting object '${t}'`);
            }
          }
          return (t.ɵprov = b({ token: t, providedIn: 'root', factory: () => new t([new Aa()]) })), t;
        })();
      const ja = [new Aa()],
        Da = new Ia([new _a()]),
        Na = new Ra(ja);
      let Pa = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Ma(t, ha)), t;
      })();
      const Ma = function (t, e) {
        return ai(t, e, ae(), se());
      };
      let La = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Va(t, ha)), t;
      })();
      const Va = function (t, e) {
          return li(t, e, ae(), se());
        },
        Fa = {};
      class Ha extends ua {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const e = Tt(t);
          return new $a(e, this.ngModule);
        }
      }
      function Ua(t) {
        const e = [];
        for (let n in t) t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
        return e;
      }
      const za = new B('SCHEDULER_TOKEN', { providedIn: 'root', factory: () => Qe });
      class $a extends la {
        constructor(t, e) {
          super(),
            (this.componentDef = t),
            (this.ngModule = e),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(xr).join(',')),
            (this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : []),
            (this.isBoundToModule = !!e);
        }
        get inputs() {
          return Ua(this.componentDef.inputs);
        }
        get outputs() {
          return Ua(this.componentDef.outputs);
        }
        create(t, e, n, r) {
          const s = (r = r || this.ngModule)
              ? (function (t, e) {
                  return {
                    get: (n, r, s) => {
                      const i = t.get(n, Fa, s);
                      return i !== Fa || r === Fa ? i : e.get(n, r, s);
                    },
                  };
                })(t, r.injector)
              : t,
            i = s.get(fa, $t),
            o = s.get(ba, null),
            a = i.createRenderer(null, this.componentDef),
            l = this.componentDef.selectors[0][0] || 'div',
            c = n
              ? (function (t, e, n) {
                  if (zt(t)) return t.selectRootElement(e, n === mt.ShadowDom);
                  let r = 'string' == typeof e ? t.querySelector(e) : e;
                  return (r.textContent = ''), r;
                })(a, n, this.componentDef.encapsulation)
              : zr(
                  l,
                  i.createRenderer(null, this.componentDef),
                  (function (t) {
                    const e = t.toLowerCase();
                    return 'svg' === e
                      ? 'http://www.w3.org/2000/svg'
                      : 'math' === e
                      ? 'http://www.w3.org/1998/MathML/'
                      : null;
                  })(l)
                ),
            u = this.componentDef.onPush ? 576 : 528,
            h = 'string' == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
            d = { components: [], scheduler: Qe, clean: Es, playerHandler: null, flags: 0 },
            f = Xr(0, -1, null, 1, 0, null, null, null, null, null),
            p = $r(null, f, d, u, null, null, i, a, o, s);
          let g, m;
          Ce(p, null);
          try {
            const t = (function (t, e, n, r, s, i) {
              const o = n[1];
              n[20] = t;
              const a = qr(o, null, 0, 3, null, null),
                l = (a.mergedAttrs = e.hostAttrs);
              null !== l &&
                (Ri(a, l, !0),
                null !== t &&
                  (Ve(s, t, l), null !== a.classes && ti(s, t, a.classes), null !== a.styles && Xs(s, t, a.styles)));
              const c = r.createRenderer(t, e),
                u = $r(n, Yr(e), null, e.onPush ? 64 : 16, n[20], a, r, c, void 0);
              return (
                o.firstCreatePass && (sn(tn(a, n), o, e.type), ls(o, a), us(a, n.length, 1)), vs(n, u), (n[20] = u)
              );
            })(c, this.componentDef, p, i, a);
            if (c)
              if (n) Ve(a, c, ['ng-version', va.full]);
              else {
                const { attrs: t, classes: e } = (function (t) {
                  const e = [],
                    n = [];
                  let r = 1,
                    s = 2;
                  for (; r < t.length; ) {
                    let i = t[r];
                    if ('string' == typeof i) 2 === s ? '' !== i && e.push(i, t[++r]) : 8 === s && n.push(i);
                    else {
                      if (!_r(s)) break;
                      s = i;
                    }
                    r++;
                  }
                  return { attrs: e, classes: n };
                })(this.componentDef.selectors[0]);
                t && Ve(a, c, t), e && e.length > 0 && ti(a, c, e.join(' '));
              }
            if (((m = Zt(f, 0)), void 0 !== e)) {
              const t = (m.projection = []);
              for (let n = 0; n < this.ngContentSelectors.length; n++) {
                const r = e[n];
                t.push(null != r ? Array.from(r) : null);
              }
            }
            (g = (function (t, e, n, r, s) {
              const i = n[1],
                o = (function (t, e, n) {
                  const r = ae();
                  t.firstCreatePass && (n.providersResolver && n.providersResolver(n), as(t, r, 1), hs(t, e, n));
                  const s = un(e, t, e.length - 1, r);
                  dr(s, e);
                  const i = Gt(r, e);
                  return i && dr(i, e), s;
                })(i, n, e);
              r.components.push(o),
                (t[8] = o),
                s && s.forEach((t) => t(o, e)),
                e.contentQueries && e.contentQueries(1, o, n.length - 1);
              const a = ae();
              if (i.firstCreatePass && (null !== e.hostBindings || null !== e.hostAttrs)) {
                Te(a.index - 20);
                const t = n[1];
                ss(t, e), is(t, n, e.hostVars), os(e, o);
              }
              return o;
            })(t, this.componentDef, p, d, [qo])),
              Br(f, p, null);
          } finally {
            Ae();
          }
          const b = new qa(this.componentType, g, oi(ha, m, p), p, m);
          return (n && !h) || (f.node.child = m), b;
        }
      }
      class qa extends class {} {
        constructor(t, e, n, r, s) {
          super(),
            (this.location = n),
            (this._rootLView = r),
            (this._tNode = s),
            (this.destroyCbs = []),
            (this.instance = e),
            (this.hostView = this.changeDetectorRef = new ni(r)),
            (function (t, e, n, r) {
              let s = t.node;
              null == s && (t.node = s = ts(0, null, 2, -1, null, null)), (r[6] = s);
            })(r[1], 0, 0, r),
            (this.componentType = t);
        }
        get injector() {
          return new fn(this._tNode, this._rootLView);
        }
        destroy() {
          this.destroyCbs &&
            (this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null),
            !this.hostView.destroyed && this.hostView.destroy());
        }
        onDestroy(t) {
          this.destroyCbs && this.destroyCbs.push(t);
        }
      }
      const Ba = void 0;
      var Ga = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Ba],
        [['AM', 'PM'], Ba, Ba],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        ],
        Ba,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        ],
        Ba,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Ba, "{1} 'at' {0}", Ba],
        ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        function (t) {
          let e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === e && 0 === n ? 1 : 5;
        },
      ];
      let Za = {};
      function Wa(t, e, n) {
        'string' != typeof e && ((n = e), (e = t[Xa.LocaleId])),
          (e = e.toLowerCase().replace(/_/g, '-')),
          (Za[e] = t),
          n && (Za[e][Xa.ExtraData] = n);
      }
      function Qa(t) {
        const e = (function (t) {
          return t.toLowerCase().replace(/_/g, '-');
        })(t);
        let n = Ya(e);
        if (n) return n;
        const r = e.split('-')[0];
        if (((n = Ya(r)), n)) return n;
        if ('en' === r) return Ga;
        throw new Error(`Missing locale data for the locale "${t}".`);
      }
      function Ka(t) {
        return Qa(t)[Xa.CurrencyCode] || null;
      }
      function Ja(t) {
        return Qa(t)[Xa.PluralCase];
      }
      function Ya(t) {
        return t in Za || (Za[t] = L.ng && L.ng.common && L.ng.common.locales && L.ng.common.locales[t]), Za[t];
      }
      const Xa = (function () {
          var t = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencyCode: 15,
            CurrencySymbol: 16,
            CurrencyName: 17,
            Currencies: 18,
            Directionality: 19,
            PluralCase: 20,
            ExtraData: 21,
          };
          return (
            (t[t.LocaleId] = 'LocaleId'),
            (t[t.DayPeriodsFormat] = 'DayPeriodsFormat'),
            (t[t.DayPeriodsStandalone] = 'DayPeriodsStandalone'),
            (t[t.DaysFormat] = 'DaysFormat'),
            (t[t.DaysStandalone] = 'DaysStandalone'),
            (t[t.MonthsFormat] = 'MonthsFormat'),
            (t[t.MonthsStandalone] = 'MonthsStandalone'),
            (t[t.Eras] = 'Eras'),
            (t[t.FirstDayOfWeek] = 'FirstDayOfWeek'),
            (t[t.WeekendRange] = 'WeekendRange'),
            (t[t.DateFormat] = 'DateFormat'),
            (t[t.TimeFormat] = 'TimeFormat'),
            (t[t.DateTimeFormat] = 'DateTimeFormat'),
            (t[t.NumberSymbols] = 'NumberSymbols'),
            (t[t.NumberFormats] = 'NumberFormats'),
            (t[t.CurrencyCode] = 'CurrencyCode'),
            (t[t.CurrencySymbol] = 'CurrencySymbol'),
            (t[t.CurrencyName] = 'CurrencyName'),
            (t[t.Currencies] = 'Currencies'),
            (t[t.Directionality] = 'Directionality'),
            (t[t.PluralCase] = 'PluralCase'),
            (t[t.ExtraData] = 'ExtraData'),
            t
          );
        })(),
        tl = ['zero', 'one', 'two', 'few', 'many'],
        el = /^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/,
        nl = /\ufffd\/?\*(\d+:\d+)\ufffd/gi,
        rl = /\ufffd(\/?[#*!]\d+):?\d*\ufffd/gi,
        sl = /\ufffd(\d+):?\d*\ufffd/gi,
        il = /({\s*\ufffd\d+:?\d*\ufffd\s*,\s*\S{6}\s*,[\s\S]*})/gi;
      function ol(t) {
        if (!t) return [];
        let e = 0;
        const n = [],
          r = [],
          s = /[{}]/g;
        let i;
        for (s.lastIndex = 0; (i = s.exec(t)); ) {
          const s = i.index;
          if ('}' == i[0]) {
            if ((n.pop(), 0 == n.length)) {
              const n = t.substring(e, s);
              el.test(n) ? r.push(al(n)) : r.push(n), (e = s + 1);
            }
          } else {
            if (0 == n.length) {
              const n = t.substring(e, s);
              r.push(n), (e = s + 1);
            }
            n.push('{');
          }
        }
        const o = t.substring(e);
        return r.push(o), r;
      }
      function al(t) {
        const e = [],
          n = [];
        let r = 1,
          s = 0;
        const i = ol(
          (t = t.replace(el, function (t, e, n) {
            return (r = 'select' === n ? 0 : 1), (s = parseInt(e.substr(1), 10)), '';
          }))
        );
        for (let o = 0; o < i.length; ) {
          let t = i[o++].trim();
          1 === r && (t = t.replace(/\s*(?:=)?(\w+)\s*/, '$1')), t.length && e.push(t);
          const s = ol(i[o++]);
          e.length > n.length && n.push(s);
        }
        return { type: r, mainBinding: s, cases: e, values: n };
      }
      function ll(t) {
        let e,
          n,
          r = '',
          s = 0,
          i = !1;
        for (; null !== (e = nl.exec(t)); )
          i
            ? e[0] === `\ufffd/*${n}\ufffd` && ((s = e.index), (i = !1))
            : ((r += t.substring(s, e.index + e[0].length)), (n = e[1]), (i = !0));
        return (r += t.substr(s)), r;
      }
      function cl(t, e, n, r = null) {
        const s = [null, null],
          i = t.split(sl);
        let o = 0;
        for (let a = 0; a < i.length; a++) {
          const t = i[a];
          if (1 & a) {
            const e = parseInt(t, 10);
            s.push(-1 - e), (o |= fl(e));
          } else '' !== t && s.push(t);
        }
        return s.push((e << 2) | (n ? 1 : 0)), n && s.push(n, r), (s[0] = o), (s[1] = s.length - 2), s;
      }
      function ul(t, e = 0) {
        let n;
        e |= fl(t.mainBinding);
        for (let r = 0; r < t.values.length; r++) {
          const s = t.values[r];
          for (let t = 0; t < s.length; t++) {
            const r = s[t];
            if ('string' == typeof r) for (; (n = sl.exec(r)); ) e |= fl(parseInt(n[1], 10));
            else e = ul(r, e);
          }
        }
        return e;
      }
      const hl = [];
      let dl = -1;
      function fl(t) {
        return 1 << Math.min(t, 31);
      }
      const pl = [];
      let gl;
      function ml(t) {
        return t + gl++;
      }
      function bl(t, e, n, r, s) {
        const i = e.next;
        r || (r = n),
          r === n && e !== n.child
            ? ((e.next = n.child), (n.child = e))
            : r !== n && e !== r.next
            ? ((e.next = r.next), (r.next = e))
            : (e.next = null),
          n !== s[6] && (e.parent = n);
        let o = e.next;
        for (; o; ) o.next === e && (o.next = i), (o = o.next);
        if (1 === e.type) return Js(t, s, e), e;
        Gs(t, s, Gt(e, s), e);
        const a = s[e.index];
        return 0 !== e.type && Dt(a) && Gs(t, s, a[7], e), e;
      }
      function yl(t) {
        return void 0 === t;
      }
      function vl(t, e, n, r, s, i) {
        const o = ae();
        e[n + 20] = s;
        const a = qr(t, e[6], n, r, i, null);
        return o && o.next === a && (o.next = null), a;
      }
      function _l(t, e, n, r) {
        const s = r[11];
        let i = null,
          o = null;
        const a = [];
        for (let l = 0; l < e.length; l++) {
          const c = e[l];
          if ('string' == typeof c) {
            const t = Ds(c, s),
              u = e[++l];
            (o = i), (i = vl(n, r, u, 3, t, null)), a.push(u), ue();
          } else if ('number' == typeof c)
            switch (7 & c) {
              case 1:
                const s = c >>> 17;
                let u;
                (u = s === t ? r[6] : Zt(n, s)), (o = bl(n, i, u, o, r));
                break;
              case 0:
                const h = c >= 0,
                  d = (h ? c : ~c) >>> 3;
                a.push(d), (o = i), (i = Zt(n, d)), i && le(i, h);
                break;
              case 5:
                (o = i = Zt(n, c >>> 3)), le(i, !1);
                break;
              case 4:
                const f = e[++l],
                  p = e[++l];
                fs(Zt(n, c >>> 3), r, f, p, null, null);
                break;
              default:
                throw new Error(`Unable to determine the type of mutate operation for "${c}"`);
            }
          else
            switch (c) {
              case Nr:
                const t = e[++l],
                  u = e[++l],
                  h = s.createComment(t);
                (o = i), (i = vl(n, r, u, 5, h, null)), a.push(u), dr(h, r), (i.activeCaseIndex = null), ue();
                break;
              case Dr:
                const d = e[++l],
                  f = e[++l];
                (o = i), (i = vl(n, r, f, 3, s.createElement(d), d)), a.push(f);
                break;
              default:
                throw new Error(`Unable to determine the type of mutate operation for "${c}"`);
            }
        }
        return ue(), a;
      }
      function wl(t, e, n, r) {
        const s = Zt(t, n),
          i = Bt(n, e);
        i && Ws(e[11], i);
        const o = Wt(e, n);
        if (Dt(o)) {
          const t = o;
          0 !== s.type && Ws(e[11], t[7]);
        }
        r && (s.flags |= 64);
      }
      function Cl(t, e, n) {
        (function (t, e, n) {
          const r = ie();
          (hl[++dl] = t),
            ho(!0),
            r.firstCreatePass &&
              null === r.data[t + 20] &&
              (function (t, e, n, r, s) {
                const i = e.blueprint.length - 20;
                gl = 0;
                const o = ae(),
                  a = ce() ? o : o && o.parent;
                let l = a && a !== t[6] ? a.index - 20 : n,
                  c = 0;
                pl[c] = l;
                const u = [];
                if (n > 0 && o !== a) {
                  let t = o.index - 20;
                  ce() || (t = ~t), u.push((t << 3) | 0);
                }
                const h = [],
                  d = [];
                if ('' === r && yl(s)) u.push(r, ml(i), (l << 17) | 1);
                else {
                  const t = (function (t, e) {
                      if (yl(e)) return ll(t);
                      {
                        const n = t.indexOf(`:${e}\ufffd`) + 2 + e.toString().length,
                          r = t.search(new RegExp(`\ufffd\\/\\*\\d+:${e}\ufffd`));
                        return ll(t.substring(n, r));
                      }
                    })(r, s),
                    e = ((f = t), f.replace(jl, ' ')).split(rl);
                  for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    if (1 & n)
                      if ('/' === r.charAt(0)) {
                        if ('#' === r.charAt(1)) {
                          const t = parseInt(r.substr(2), 10);
                          (l = pl[--c]), u.push((t << 3) | 5);
                        }
                      } else {
                        const t = parseInt(r.substr(1), 10),
                          e = '#' === r.charAt(0);
                        u.push(((e ? t : ~t) << 3) | 0, (l << 17) | 1), e && (pl[++c] = l = t);
                      }
                    else {
                      const e = ol(r);
                      for (let n = 0; n < e.length; n++)
                        if (1 & n) {
                          const r = e[n];
                          if ('object' != typeof r)
                            throw new Error(`Unable to parse ICU expression in "${t}" message.`);
                          const s = ml(i);
                          u.push(Nr, '', s, (l << 17) | 1);
                          const o = ul(r);
                          Tl(d, r, s, s);
                          const a = d.length - 1;
                          h.push(fl(r.mainBinding), 3, -1 - r.mainBinding, (s << 2) | 2, a, o, 2, (s << 2) | 3, a);
                        } else if ('' !== e[n]) {
                          const t = e[n],
                            r = t.match(sl),
                            s = ml(i);
                          u.push(r ? '' : t, s, (l << 17) | 1), r && at(cl(t, s), h);
                        }
                    }
                  }
                }
                var f;
                gl > 0 &&
                  (function (t, e, n) {
                    if (n > 0 && t.firstCreatePass) {
                      for (let r = 0; r < n; r++) t.blueprint.push(null), t.data.push(null), e.push(null);
                      t.expandoInstructions ? t.expandoInstructions.push(n) : (t.expandoStartIndex += n);
                    }
                  })(e, t, gl),
                  (e.data[n + 20] = { vars: gl, create: u, update: h, icus: d.length ? d : null });
              })(se(), r, t, e, n);
        })(t, e, n),
          (function () {
            const t = se();
            !(function (t, e) {
              const n = hl[dl--],
                r = t.data[n + 20],
                s = ae(),
                i = _l(n, r.create, t, e);
              let o = n + 1;
              for (; o <= s.index - 20; ) {
                -1 === i.indexOf(o) && wl(t, e, o, !0);
                const n = Zt(t, o);
                !n ||
                  (0 !== n.type && 3 !== n.type && 4 !== n.type) ||
                  null === n.localNames ||
                  (o += n.localNames.length >> 1),
                  o++;
              }
            })(ie(), t),
              ho(!1);
          })();
      }
      function Sl(t, e) {
        !(function (t, e, n, r) {
          const s = ae().index - 20,
            i = [];
          for (let o = 0; o < r.length; o += 2) {
            const a = r[o],
              l = r[o + 1].split(il);
            for (let r = 0; r < l.length; r++) {
              const o = l[r];
              if (1 & r) throw new Error('ICU expressions are not yet supported in attributes');
              if ('' !== o)
                if (o.match(sl)) e.firstCreatePass && null === e.data[n + 20] && at(cl(o, s, a), i);
                else {
                  const n = Zt(e, s);
                  3 === n.type && fs(n, t, a, o, null, null);
                  const r = null !== n.inputs && n.inputs[a];
                  r && ks(e, t, r, a, o);
                }
            }
          }
          e.firstCreatePass && null === e.data[n + 20] && (e.data[n + 20] = i);
        })(se(), ie(), t, e);
      }
      let El = 0,
        xl = 0;
      function Ol(t) {
        return Fi(se(), ge(), t) && (El |= 1 << xl), xl++, Ol;
      }
      function Al(t) {
        if (xl) {
          const e = ie(),
            n = e.data[t + 20];
          let r,
            s = null;
          Array.isArray(n) ? (r = n) : ((r = n.update), (s = n.icus));
          const i = pe() - xl - 1,
            o = se();
          !(function t(e, n, r, s, i, o, a = !1) {
            let l = !1;
            for (let c = 0; c < e.length; c++) {
              const u = e[c],
                h = e[++c];
              if (a || u & s) {
                let a = '';
                for (let u = c + 1; u <= c + h; u++) {
                  const c = e[u];
                  if ('string' == typeof c) a += c;
                  else if ('number' == typeof c)
                    if (c < 0) a += Ze(o[r - c]);
                    else {
                      const h = c >>> 2;
                      let d, f, p;
                      switch (3 & c) {
                        case 1:
                          const c = e[++u],
                            g = e[++u];
                          ns(i, Zt(i, h), o, c, a, o[11], g, !1);
                          break;
                        case 0:
                          Ts(o, h, a);
                          break;
                        case 2:
                          if (((d = e[++u]), (f = n[d]), (p = Zt(i, h)), null !== p.activeCaseIndex)) {
                            const t = f.remove[p.activeCaseIndex];
                            for (let e = 0; e < t.length; e++) {
                              const r = t[e];
                              switch (7 & r) {
                                case 3:
                                  wl(i, o, r >>> 3, !1);
                                  break;
                                case 6:
                                  const s = Zt(i, t[e + 1] >>> 3).activeCaseIndex;
                                  null !== s && at(n[r >>> 3].remove[s], t);
                              }
                            }
                          }
                          const m = kl(f, a);
                          (p.activeCaseIndex = -1 !== m ? m : null), m > -1 && (_l(-1, f.create[m], i, o), (l = !0));
                          break;
                        case 3:
                          (d = e[++u]),
                            (f = n[d]),
                            (p = Zt(i, h)),
                            null !== p.activeCaseIndex && t(f.update[p.activeCaseIndex], n, r, s, i, o, l);
                      }
                    }
                }
              }
              c += h;
            }
          })(r, s, i, El, e, o),
            (El = 0),
            (xl = 0);
        }
      }
      function kl(t, e) {
        let n = t.cases.indexOf(e);
        if (-1 === n)
          switch (t.type) {
            case 1: {
              const r = (function (t, e) {
                const n = Ja(e)(parseInt(t, 10)),
                  r = tl[n];
                return void 0 !== r ? r : 'other';
              })(e, Dl);
              (n = t.cases.indexOf(r)), -1 === n && 'other' !== r && (n = t.cases.indexOf('other'));
              break;
            }
            case 0:
              n = t.cases.indexOf('other');
          }
        return n;
      }
      function Tl(t, e, n, r) {
        const s = [],
          i = [],
          o = [],
          a = [],
          l = [];
        for (let c = 0; c < e.values.length; c++) {
          const u = e.values[c],
            h = [];
          for (let t = 0; t < u.length; t++) {
            const e = u[t];
            if ('string' != typeof e) {
              const n = h.push(e) - 1;
              u[t] = `\x3c!--\ufffd${n}\ufffd--\x3e`;
            }
          }
          const d = Il(u.join(''), n, h, t, r);
          s.push(d.create), i.push(d.remove), o.push(d.update), a.push(d.vars), l.push(d.childIcus);
        }
        t.push({ type: e.type, vars: a, childIcus: l, cases: e.cases, create: s, remove: i, update: o }),
          (gl += Math.max(...a));
      }
      function Il(t, e, n, r, s) {
        const i = new Vn(Ut()).getInertBodyElement(t);
        if (!i) throw new Error('Unable to generate inert body element');
        const o = { vars: 0, childIcus: [], create: [], remove: [], update: [] };
        return (
          (function t(e, n, r, s, i, o) {
            if (e) {
              const a = [];
              for (; e; ) {
                const l = e.nextSibling,
                  c = o + ++n.vars;
                switch (e.nodeType) {
                  case Node.ELEMENT_NODE:
                    const l = e,
                      u = l.tagName.toLowerCase();
                    if (Qn.hasOwnProperty(u)) {
                      n.create.push(Dr, u, c, (r << 17) | 1);
                      const a = l.attributes;
                      for (let t = 0; t < a.length; t++) {
                        const e = a.item(t),
                          r = e.name.toLowerCase();
                        e.value.match(sl)
                          ? Yn.hasOwnProperty(r) &&
                            at(
                              Kn[r]
                                ? cl(e.value, c, e.name, Un)
                                : Jn[r]
                                ? cl(e.value, c, e.name, zn)
                                : cl(e.value, c, e.name),
                              n.update
                            )
                          : n.create.push((c << 3) | 4, e.name, e.value);
                      }
                      t(e.firstChild, n, c, s, i, o), n.remove.push((c << 3) | 3);
                    } else n.vars--;
                    break;
                  case Node.TEXT_NODE:
                    const h = e.textContent || '',
                      d = h.match(sl);
                    n.create.push(d ? '' : h, c, (r << 17) | 1),
                      n.remove.push((c << 3) | 3),
                      d && at(cl(h, c), n.update);
                    break;
                  case Node.COMMENT_NODE:
                    const f = Rl.exec(e.textContent || '');
                    if (f) {
                      const t = parseInt(f[1], 10);
                      n.create.push(Nr, '', c, (r << 17) | 1), a.push([s[t], c]);
                    } else n.vars--;
                    break;
                  default:
                    n.vars--;
                }
                e = l;
              }
              for (let t = 0; t < a.length; t++) {
                const e = a[t][0],
                  r = a[t][1];
                Tl(i, e, r, o + n.vars);
                const s = i.length - 1;
                (n.vars += Math.max(...i[s].vars)), n.childIcus.push(s);
                const l = ul(e);
                n.update.push(fl(e.mainBinding), 3, -1 - e.mainBinding, (r << 2) | 2, s, l, 2, (r << 2) | 3, s),
                  n.remove.push((s << 3) | 6, (r << 3) | 3);
              }
            }
          })((or(i) || i).firstChild, o, e, n, r, s),
          o
        );
      }
      const Rl = /\ufffd(\d+)\ufffd/,
        jl = /\uE500/g;
      let Dl = 'en-US';
      function Nl(t) {
        var e, n;
        (n = 'Expected localeId to be defined'),
          null == (e = t) &&
            (function (t, e, n, r) {
              throw new Error('ASSERTION ERROR: ' + t + ` [Expected=> null != ${e} <=Actual]`);
            })(n, e),
          'string' == typeof t && (Dl = t.toLowerCase().replace(/_/g, '-'));
      }
      const Pl = new Map();
      class Ml extends it {
        constructor(t, e) {
          super(),
            (this._parent = e),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new Ha(this));
          const n = Rt(t),
            r = t[z] || null;
          r && Nl(r),
            (this._bootstrapComponents = Ke(n.bootstrap)),
            (this._r3Injector = yi(
              t,
              e,
              [
                { provide: it, useValue: this },
                { provide: ua, useValue: this.componentFactoryResolver },
              ],
              A(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, e = Oi.THROW_IF_NOT_FOUND, n = p.Default) {
          return t === Oi || t === it || t === G ? this : this._r3Injector.get(t, e, n);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(), this.destroyCbs.forEach((t) => t()), (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class Ll extends ot {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== Rt(t) &&
              (function t(e) {
                if (null !== e.ɵmod.id) {
                  const t = e.ɵmod.id;
                  (function (t, e, n) {
                    if (e && e !== n) throw new Error(`Duplicate module registered for ${t} - ${A(e)} vs ${A(e.name)}`);
                  })(t, Pl.get(t), e),
                    Pl.set(t, e);
                }
                let n = e.ɵmod.imports;
                n instanceof Function && (n = n()), n && n.forEach((e) => t(e));
              })(t);
        }
        create(t) {
          return new Ml(this.moduleType, t);
        }
      }
      function Vl(t, e, n, r) {
        return zl(se(), fe(), t, e, n, r);
      }
      function Fl(t, e, n, r, s) {
        return (function (t, e, n, r, s, i, o) {
          const a = e + n;
          return Hi(t, a, s, i) ? Vi(t, a + 2, o ? r.call(o, s, i) : r(s, i)) : Ul(t, a + 2);
        })(se(), fe(), t, e, n, r, s);
      }
      function Hl(t, e, n, r, s, i) {
        return (function (t, e, n, r, s, i, o, a) {
          const l = e + n;
          return (function (t, e, n, r, s) {
            const i = Hi(t, e, n, r);
            return Fi(t, e + 2, s) || i;
          })(t, l, s, i, o)
            ? Vi(t, l + 3, a ? r.call(a, s, i, o) : r(s, i, o))
            : Ul(t, l + 3);
        })(se(), fe(), t, e, n, r, s, i);
      }
      function Ul(t, e) {
        const n = t[e];
        return n === Or ? void 0 : n;
      }
      function zl(t, e, n, r, s, i) {
        const o = e + n;
        return Fi(t, o, s) ? Vi(t, o + 1, i ? r.call(i, s) : r(s)) : Ul(t, o + 1);
      }
      function $l(t, e) {
        const n = ie();
        let r;
        const s = t + 20;
        n.firstCreatePass
          ? ((r = (function (t, e) {
              if (e)
                for (let n = e.length - 1; n >= 0; n--) {
                  const r = e[n];
                  if (t === r.name) return r;
                }
              throw new Error(`The pipe '${t}' could not be found!`);
            })(e, n.pipeRegistry)),
            (n.data[s] = r),
            r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy))
          : (r = n.data[s]);
        const i = r.factory || (r.factory = It(r.type)),
          o = X(Bi),
          a = Ye(!1),
          l = i();
        return (
          Ye(a),
          X(o),
          (function (t, e, n, r) {
            const s = n + 20;
            s >= t.data.length && ((t.data[s] = null), (t.blueprint[s] = null)), (e[s] = r);
          })(n, se(), t, l),
          l
        );
      }
      function ql(t, e, n) {
        const r = se(),
          s = Wt(r, t);
        return (function (t, e) {
          return Pi.isWrapped(e) && ((e = Pi.unwrap(e)), (t[pe()] = Or)), e;
        })(
          r,
          (function (t, e) {
            return t[1].data[e + 20].pure;
          })(r, t)
            ? zl(r, fe(), e, s.transform, n, s)
            : s.transform(n)
        );
      }
      class Bl extends r.a {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, e, n) {
          let r,
            i = (t) => null,
            o = () => null;
          t && 'object' == typeof t
            ? ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t.next(e));
                  }
                : (e) => {
                    t.next(e);
                  }),
              t.error &&
                (i = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t.error(e));
                    }
                  : (e) => {
                      t.error(e);
                    }),
              t.complete &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => t.complete());
                    }
                  : () => {
                      t.complete();
                    }))
            : ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t(e));
                  }
                : (e) => {
                    t(e);
                  }),
              e &&
                (i = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e(t));
                    }
                  : (t) => {
                      e(t);
                    }),
              n &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const a = super.subscribe(r, i, o);
          return t instanceof s.a && t.add(a), a;
        }
      }
      function Gl() {
        return this._results[Di()]();
      }
      class Zl {
        constructor() {
          (this.dirty = !0), (this._results = []), (this.changes = new Bl()), (this.length = 0);
          const t = Di(),
            e = Zl.prototype;
          e[t] || (e[t] = Gl);
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, e) {
          return this._results.reduce(t, e);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t) {
          (this._results = (function t(e, n) {
            void 0 === n && (n = e);
            for (let r = 0; r < e.length; r++) {
              let s = e[r];
              Array.isArray(s) ? (n === e && (n = e.slice(0, r)), t(s, n)) : n !== e && n.push(s);
            }
            return n;
          })(t)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      class Wl {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Wl(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Ql {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const e = t.queries;
          if (null !== e) {
            const n = null !== t.contentQueries ? t.contentQueries[0] : e.length,
              r = [];
            for (let t = 0; t < n; t++) {
              const n = e.getByIndex(t);
              r.push(this.queries[n.indexInDeclarationView].clone());
            }
            return new Ql(r);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let e = 0; e < this.queries.length; e++) null !== uc(t, e).matches && this.queries[e].setDirty();
        }
      }
      class Kl {
        constructor(t, e, n, r = null) {
          (this.predicate = t), (this.descendants = e), (this.isStatic = n), (this.read = r);
        }
      }
      class Jl {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, e) {
          for (let n = 0; n < this.queries.length; n++) this.queries[n].elementStart(t, e);
        }
        elementEnd(t) {
          for (let e = 0; e < this.queries.length; e++) this.queries[e].elementEnd(t);
        }
        embeddedTView(t) {
          let e = null;
          for (let n = 0; n < this.length; n++) {
            const r = null !== e ? e.length : 0,
              s = this.getByIndex(n).embeddedTView(t, r);
            s && ((s.indexInDeclarationView = n), null !== e ? e.push(s) : (e = [s]));
          }
          return null !== e ? new Jl(e) : null;
        }
        template(t, e) {
          for (let n = 0; n < this.queries.length; n++) this.queries[n].template(t, e);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class Yl {
        constructor(t, e = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = e);
        }
        elementStart(t, e) {
          this.isApplyingToNode(e) && this.matchTNode(t, e);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
        }
        template(t, e) {
          this.elementStart(t, e);
        }
        embeddedTView(t, e) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0), this.addMatch(-t.index, e), new Yl(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && !1 === this.metadata.descendants) {
            const e = this._declarationNodeIndex;
            let n = t.parent;
            for (; null !== n && 4 === n.type && n.index !== e; ) n = n.parent;
            return e === (null !== n ? n.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, e) {
          if (Array.isArray(this.metadata.predicate)) {
            const n = this.metadata.predicate;
            for (let r = 0; r < n.length; r++) this.matchTNodeWithReadOption(t, e, Xl(e, n[r]));
          } else {
            const n = this.metadata.predicate;
            n === Pa
              ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1)
              : this.matchTNodeWithReadOption(t, e, cn(e, t, n, !1, !1));
          }
        }
        matchTNodeWithReadOption(t, e, n) {
          if (null !== n) {
            const r = this.metadata.read;
            if (null !== r)
              if (r === ha || r === La || (r === Pa && 0 === e.type)) this.addMatch(e.index, -2);
              else {
                const n = cn(e, t, r, !1, !1);
                null !== n && this.addMatch(e.index, n);
              }
            else this.addMatch(e.index, n);
          }
        }
        addMatch(t, e) {
          null === this.matches ? (this.matches = [t, e]) : this.matches.push(t, e);
        }
      }
      function Xl(t, e) {
        const n = t.localNames;
        if (null !== n) for (let r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1];
        return null;
      }
      function tc(t, e, n, r) {
        return -1 === n
          ? (function (t, e) {
              return 3 === t.type || 4 === t.type ? oi(ha, t, e) : 0 === t.type ? ai(Pa, ha, t, e) : null;
            })(e, t)
          : -2 === n
          ? (function (t, e, n) {
              return n === ha ? oi(ha, e, t) : n === Pa ? ai(Pa, ha, e, t) : n === La ? li(La, ha, e, t) : void 0;
            })(t, e, r)
          : un(t, t[1], n, e);
      }
      function ec(t, e, n, r) {
        const s = e[19].queries[r];
        if (null === s.matches) {
          const r = t.data,
            i = n.matches,
            o = [];
          for (let t = 0; t < i.length; t += 2) {
            const s = i[t];
            o.push(s < 0 ? null : tc(e, r[s], i[t + 1], n.metadata.read));
          }
          s.matches = o;
        }
        return s.matches;
      }
      function nc(t) {
        const e = se(),
          n = ie(),
          r = ve();
        _e(r + 1);
        const s = uc(n, r);
        if (t.dirty && Jt(e) === s.metadata.isStatic) {
          if (null === s.matches) t.reset([]);
          else {
            const i = s.crossesNgTemplate
              ? (function t(e, n, r, s) {
                  const i = e.queries.getByIndex(r),
                    o = i.matches;
                  if (null !== o) {
                    const a = ec(e, n, i, r);
                    for (let e = 0; e < o.length; e += 2) {
                      const r = o[e];
                      if (r > 0) s.push(a[e / 2]);
                      else {
                        const i = o[e + 1],
                          a = n[-r];
                        for (let e = 10; e < a.length; e++) {
                          const n = a[e];
                          n[17] === n[3] && t(n[1], n, i, s);
                        }
                        if (null !== a[9]) {
                          const e = a[9];
                          for (let n = 0; n < e.length; n++) {
                            const r = e[n];
                            t(r[1], r, i, s);
                          }
                        }
                      }
                    }
                  }
                  return s;
                })(n, e, r, [])
              : ec(n, e, s, r);
            t.reset(i), t.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function rc(t, e, n) {
        !(function (t, e, n, r, s, i) {
          t.firstCreatePass && (cc(t, new Kl(n, r, !0, s), -1), (t.staticViewQueries = !0)), lc(t, e);
        })(ie(), se(), t, e, n);
      }
      function sc(t, e, n, r) {
        oc(ie(), se(), e, n, r, !1, ae(), t);
      }
      function ic(t, e, n, r) {
        oc(ie(), se(), e, n, r, !0, ae(), t);
      }
      function oc(t, e, n, r, s, i, o, a) {
        t.firstCreatePass &&
          (cc(t, new Kl(n, r, i, s), o.index),
          (function (t, e) {
            const n = t.contentQueries || (t.contentQueries = []);
            e !== (t.contentQueries.length ? n[n.length - 1] : -1) && n.push(t.queries.length - 1, e);
          })(t, a),
          i && (t.staticContentQueries = !0)),
          lc(t, e);
      }
      function ac() {
        return (t = se()), (e = ve()), t[19].queries[e].queryList;
        var t, e;
      }
      function lc(t, e) {
        const n = new Zl();
        !(function (t, e, n, r) {
          const s = xs(e);
          s.push(n), t.firstCreatePass && Os(t).push(r, s.length - 1);
        })(t, e, n, n.destroy),
          null === e[19] && (e[19] = new Ql()),
          e[19].queries.push(new Wl(n));
      }
      function cc(t, e, n) {
        null === t.queries && (t.queries = new Jl()), t.queries.track(new Yl(e, n));
      }
      function uc(t, e) {
        return t.queries.getByIndex(e);
      }
      function hc(t, e) {
        return ai(Pa, ha, t, e);
      }
      function dc(t = p.Default) {
        const e = ci(!0);
        if (null != e || t & p.Optional) return e;
        throw new Error('No provider for ChangeDetectorRef!');
      }
      const fc = new B('Application Initializer');
      let pc = (() => {
        class t {
          constructor(t) {
            (this.appInits = t),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, e) => {
                (this.resolve = t), (this.reject = e);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [],
              e = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const e = this.appInits[n]();
                no(e) && t.push(e);
              }
            Promise.all(t)
              .then(() => {
                e();
              })
              .catch((t) => {
                this.reject(t);
              }),
              0 === t.length && e(),
              (this.initialized = !0);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(et(fc, 8));
          }),
          (t.ɵprov = b({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const gc = new B('AppId'),
        mc = {
          provide: gc,
          useFactory: function () {
            return `${bc()}${bc()}${bc()}`;
          },
          deps: [],
        };
      function bc() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const yc = new B('Platform Initializer'),
        vc = new B('Platform ID'),
        _c = new B('appBootstrapListener');
      let wc = (() => {
        class t {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = b({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Cc = new B('LocaleId'),
        Sc = new B('DefaultCurrencyCode');
      class Ec {
        constructor(t, e) {
          (this.ngModuleFactory = t), (this.componentFactories = e);
        }
      }
      const xc = function (t) {
          return new Ll(t);
        },
        Oc = xc,
        Ac = function (t) {
          return Promise.resolve(xc(t));
        },
        kc = function (t) {
          const e = xc(t),
            n = Ke(Rt(t).declarations).reduce((t, e) => {
              const n = Tt(e);
              return n && t.push(new $a(n)), t;
            }, []);
          return new Ec(e, n);
        },
        Tc = kc,
        Ic = function (t) {
          return Promise.resolve(kc(t));
        };
      let Rc = (() => {
        class t {
          constructor() {
            (this.compileModuleSync = Oc),
              (this.compileModuleAsync = Ac),
              (this.compileModuleAndAllComponentsSync = Tc),
              (this.compileModuleAndAllComponentsAsync = Ic);
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = b({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const jc = new B('compilerOptions'),
        Dc = (() => Promise.resolve(0))();
      function Nc(t) {
        'undefined' == typeof Zone
          ? Dc.then(() => {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', t);
      }
      class Pc {
        constructor({ enableLongStackTrace: t = !1, shouldCoalesceEventChangeDetection: e = !1 }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Bl(!1)),
            (this.onMicrotaskEmpty = new Bl(!1)),
            (this.onStable = new Bl(!1)),
            (this.onError = new Bl(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            (this.shouldCoalesceEventChangeDetection = e),
            (this.lastRequestAnimationFrameId = -1),
            (this.nativeRequestAnimationFrame = (function () {
              let t = L.requestAnimationFrame,
                e = L.cancelAnimationFrame;
              if ('undefined' != typeof Zone && t && e) {
                const n = t[Zone.__symbol__('OriginalDelegate')];
                n && (t = n);
                const r = e[Zone.__symbol__('OriginalDelegate')];
                r && (e = r);
              }
              return { nativeRequestAnimationFrame: t, nativeCancelAnimationFrame: e };
            })().nativeRequestAnimationFrame),
            (function (t) {
              const e =
                !!t.shouldCoalesceEventChangeDetection &&
                t.nativeRequestAnimationFrame &&
                (() => {
                  !(function (t) {
                    -1 === t.lastRequestAnimationFrameId &&
                      ((t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(L, () => {
                        (t.lastRequestAnimationFrameId = -1), Fc(t), Vc(t);
                      })),
                      Fc(t));
                  })(t);
                });
              t._inner = t._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0, maybeDelayChangeDetection: e },
                onInvokeTask: (n, r, s, i, o, a) => {
                  try {
                    return Hc(t), n.invokeTask(s, i, o, a);
                  } finally {
                    e && 'eventTask' === i.type && e(), Uc(t);
                  }
                },
                onInvoke: (e, n, r, s, i, o, a) => {
                  try {
                    return Hc(t), e.invoke(r, s, i, o, a);
                  } finally {
                    Uc(t);
                  }
                },
                onHasTask: (e, n, r, s) => {
                  e.hasTask(r, s),
                    n === r &&
                      ('microTask' == s.change
                        ? ((t._hasPendingMicrotasks = s.microTask), Fc(t), Vc(t))
                        : 'macroTask' == s.change && (t.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (e, n, r, s) => (e.handleError(r, s), t.runOutsideAngular(() => t.onError.emit(s)), !1),
              });
            })(this);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!Pc.isInAngularZone()) throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (Pc.isInAngularZone()) throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(t, e, n) {
          return this._inner.run(t, e, n);
        }
        runTask(t, e, n, r) {
          const s = this._inner,
            i = s.scheduleEventTask('NgZoneEvent: ' + r, t, Lc, Mc, Mc);
          try {
            return s.runTask(i, e, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      function Mc() {}
      const Lc = {};
      function Vc(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null));
              } finally {
                t.isStable = !0;
              }
          }
      }
      function Fc(t) {
        t.hasPendingMicrotasks = !!(
          t._hasPendingMicrotasks ||
          (t.shouldCoalesceEventChangeDetection && -1 !== t.lastRequestAnimationFrameId)
        );
      }
      function Hc(t) {
        t._nesting++, t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function Uc(t) {
        t._nesting--, Vc(t);
      }
      class zc {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Bl()),
            (this.onMicrotaskEmpty = new Bl()),
            (this.onStable = new Bl()),
            (this.onError = new Bl());
        }
        run(t, e, n) {
          return t.apply(e, n);
        }
        runGuarded(t, e, n) {
          return t.apply(e, n);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, e, n, r) {
          return t.apply(e, n);
        }
      }
      let $c = (() => {
          class t {
            constructor(t) {
              (this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone = 'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Pc.assertNotInAngularZone(),
                        Nc(() => {
                          (this._isZoneStable = !0), this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Nc(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (e) => !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((t) => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data,
                  }))
                : [];
            }
            addCallback(t, e, n) {
              let r = -1;
              e &&
                e > 0 &&
                (r = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter((t) => t.timeoutId !== r)),
                    t(this._didWork, this.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n });
            }
            whenStable(t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(t, e, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(t, e, n) {
              return [];
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(et(Pc));
            }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        qc = (() => {
          class t {
            constructor() {
              (this._applications = new Map()), Wc.addToWindow(this);
            }
            registerApplication(t, e) {
              this._applications.set(t, e);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, e = !0) {
              return Wc.findTestabilityInTree(this, t, e);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      class Bc {
        addToWindow(t) {}
        findTestabilityInTree(t, e, n) {
          return null;
        }
      }
      function Gc(t) {
        Wc = t;
      }
      let Zc,
        Wc = new Bc(),
        Qc = function (t, e, n) {
          const r = t.get(jc, []).concat(e),
            s = new Ll(n);
          if (0 === ki.size) return Promise.resolve(s);
          const i = (function (t) {
            const e = [];
            return t.forEach((t) => t && e.push(...t)), e;
          })(r.map((t) => t.providers));
          if (0 === i.length) return Promise.resolve(s);
          const o = (function () {
              const t = L.ng;
              if (!t || !t.ɵcompilerFacade)
                throw new Error(
                  "Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping."
                );
              return t.ɵcompilerFacade;
            })(),
            a = Oi.create({ providers: i }).get(o.ResourceLoader);
          return (function (t) {
            const e = [],
              n = new Map();
            function r(t) {
              let e = n.get(t);
              if (!e) {
                const r = ((t) => Promise.resolve(a.get(t)))(t);
                n.set(t, (e = r.then(Ii)));
              }
              return e;
            }
            return (
              ki.forEach((t, n) => {
                const s = [];
                t.templateUrl &&
                  s.push(
                    r(t.templateUrl).then((e) => {
                      t.template = e;
                    })
                  );
                const i = t.styleUrls,
                  o = t.styles || (t.styles = []),
                  a = t.styles.length;
                i &&
                  i.forEach((e, n) => {
                    o.push(''),
                      s.push(
                        r(e).then((r) => {
                          (o[a + n] = r), i.splice(i.indexOf(e), 1), 0 == i.length && (t.styleUrls = void 0);
                        })
                      );
                  });
                const l = Promise.all(s).then(() =>
                  (function (t) {
                    Ti.delete(t);
                  })(n)
                );
                e.push(l);
              }),
              (ki = new Map()),
              Promise.all(e).then(() => {})
            );
          })().then(() => s);
        };
      const Kc = new B('AllowMultipleToken');
      class Jc {
        constructor(t, e) {
          (this.name = t), (this.token = e);
        }
      }
      function Yc(t, e, n = []) {
        const r = 'Platform: ' + e,
          s = new B(r);
        return (e = []) => {
          let i = Xc();
          if (!i || i.injector.get(Kc, !1))
            if (t) t(n.concat(e).concat({ provide: s, useValue: !0 }));
            else {
              const t = n.concat(e).concat({ provide: s, useValue: !0 }, { provide: di, useValue: 'platform' });
              !(function (t) {
                if (Zc && !Zc.destroyed && !Zc.injector.get(Kc, !1))
                  throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
                Zc = t.get(tu);
                const e = t.get(yc, null);
                e && e.forEach((t) => t());
              })(Oi.create({ providers: t, name: r }));
            }
          return (function (t) {
            const e = Xc();
            if (!e) throw new Error('No platform exists!');
            if (!e.injector.get(t, null))
              throw new Error('A platform with a different configuration has been created. Please destroy it first.');
            return e;
          })(s);
        };
      }
      function Xc() {
        return Zc && !Zc.destroyed ? Zc : null;
      }
      let tu = (() => {
        class t {
          constructor(t) {
            (this._injector = t), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
          }
          bootstrapModuleFactory(t, e) {
            const n = (function (t, e) {
                let n;
                return (
                  (n =
                    'noop' === t
                      ? new zc()
                      : ('zone.js' === t ? void 0 : t) ||
                        new Pc({ enableLongStackTrace: Mn(), shouldCoalesceEventChangeDetection: e })),
                  n
                );
              })(e ? e.ngZone : void 0, (e && e.ngZoneEventCoalescing) || !1),
              r = [{ provide: Pc, useValue: n }];
            return n.run(() => {
              const e = Oi.create({ providers: r, parent: this.injector, name: t.moduleType.name }),
                s = t.create(e),
                i = s.injector.get(vn, null);
              if (!i) throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
              return (
                s.onDestroy(() => ru(this._modules, s)),
                n.runOutsideAngular(() =>
                  n.onError.subscribe({
                    next: (t) => {
                      i.handleError(t);
                    },
                  })
                ),
                (function (t, e, n) {
                  try {
                    const r = n();
                    return no(r)
                      ? r.catch((n) => {
                          throw (e.runOutsideAngular(() => t.handleError(n)), n);
                        })
                      : r;
                  } catch (r) {
                    throw (e.runOutsideAngular(() => t.handleError(r)), r);
                  }
                })(i, n, () => {
                  const t = s.injector.get(pc);
                  return (
                    t.runInitializers(),
                    t.donePromise.then(
                      () => (Nl(s.injector.get(Cc, 'en-US') || 'en-US'), this._moduleDoBootstrap(s), s)
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(t, e = []) {
            const n = eu({}, e);
            return Qc(this.injector, n, t).then((t) => this.bootstrapModuleFactory(t, n));
          }
          _moduleDoBootstrap(t) {
            const e = t.injector.get(nu);
            if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach((t) => e.bootstrap(t));
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${A(
                    t.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              t.instance.ngDoBootstrap(e);
            }
            this._modules.push(t);
          }
          onDestroy(t) {
            this._destroyListeners.push(t);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new Error('The platform has already been destroyed!');
            this._modules.slice().forEach((t) => t.destroy()),
              this._destroyListeners.forEach((t) => t()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(et(Oi));
          }),
          (t.ɵprov = b({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function eu(t, e) {
        return Array.isArray(e) ? e.reduce(eu, t) : Object.assign(Object.assign({}, t), e);
      }
      let nu = (() => {
        class t {
          constructor(t, e, n, r, s, l) {
            (this._zone = t),
              (this._console = e),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = s),
              (this._initStatus = l),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = Mn()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              });
            const c = new i.a((t) => {
                (this._stable =
                  this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete();
                  });
              }),
              u = new i.a((t) => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    Pc.assertNotInAngularZone(),
                      Nc(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  Pc.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1);
                      }));
                });
                return () => {
                  e.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = Object(o.a)(c, u.pipe(Object(a.a)()));
          }
          bootstrap(t, e) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            let n;
            (n = t instanceof la ? t : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            const r = n.isBoundToModule ? void 0 : this._injector.get(it),
              s = n.create(Oi.NULL, [], e || n.selector, r);
            s.onDestroy(() => {
              this._unloadComponent(s);
            });
            const i = s.injector.get($c, null);
            return (
              i && s.injector.get(qc).registerApplication(s.location.nativeElement, i),
              this._loadComponent(s),
              Mn() &&
                this._console.log(
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                ),
              s
            );
          }
          tick() {
            if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
              if (this._enforceNoNewChanges) for (let t of this._views) t.checkNoChanges();
            } catch (t) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(t));
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(t) {
            const e = t;
            this._views.push(e), e.attachToAppRef(this);
          }
          detachView(t) {
            const e = t;
            ru(this._views, e), e.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(_c, [])
                .concat(this._bootstrapListeners)
                .forEach((e) => e(t));
          }
          _unloadComponent(t) {
            this.detachView(t.hostView), ru(this.components, t);
          }
          ngOnDestroy() {
            this._views.slice().forEach((t) => t.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(et(Pc), et(wc), et(Oi), et(vn), et(ua), et(pc));
          }),
          (t.ɵprov = b({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function ru(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class su {}
      class iu {}
      const ou = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      let au = (() => {
        class t {
          constructor(t, e) {
            (this._compiler = t), (this._config = e || ou);
          }
          load(t) {
            return this.loadAndCompile(t);
          }
          loadAndCompile(t) {
            let [e, r] = t.split('#');
            return (
              void 0 === r && (r = 'default'),
              n('zn8P')(e)
                .then((t) => t[r])
                .then((t) => lu(t, e, r))
                .then((t) => this._compiler.compileModuleAsync(t))
            );
          }
          loadFactory(t) {
            let [e, r] = t.split('#'),
              s = 'NgFactory';
            return (
              void 0 === r && ((r = 'default'), (s = '')),
              n('zn8P')(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix)
                .then((t) => t[r + s])
                .then((t) => lu(t, e, r))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(et(Rc), et(iu, 8));
          }),
          (t.ɵprov = b({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function lu(t, e, n) {
        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
        return t;
      }
      const cu = function (t) {
          return null;
        },
        uu = Yc(null, 'core', [
          { provide: vc, useValue: 'unknown' },
          { provide: tu, deps: [Oi] },
          { provide: qc, deps: [] },
          { provide: wc, deps: [] },
        ]),
        hu = [
          { provide: nu, useClass: nu, deps: [Pc, wc, Oi, vn, ua, pc] },
          {
            provide: za,
            deps: [Pc],
            useFactory: function (t) {
              let e = [];
              return (
                t.onStable.subscribe(() => {
                  for (; e.length; ) e.pop()();
                }),
                function (t) {
                  e.push(t);
                }
              );
            },
          },
          { provide: pc, useClass: pc, deps: [[new h(), fc]] },
          { provide: Rc, useClass: Rc, deps: [] },
          mc,
          {
            provide: Ia,
            useFactory: function () {
              return Da;
            },
            deps: [],
          },
          {
            provide: Ra,
            useFactory: function () {
              return Na;
            },
            deps: [],
          },
          {
            provide: Cc,
            useFactory: function (t) {
              return Nl((t = t || ('undefined' != typeof $localize && $localize.locale) || 'en-US')), t;
            },
            deps: [[new u(Cc), new h(), new f()]],
          },
          { provide: Sc, useValue: 'USD' },
        ];
      let du = (() => {
        class t {
          constructor(t) {}
        }
        return (
          (t.ɵmod = Et({ type: t })),
          (t.ɵinj = y({
            factory: function (e) {
              return new (e || t)(et(nu));
            },
            providers: hu,
          })),
          t
        );
      })();
    },
    gRHU: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('2fFW'),
        s = n('NJ4a');
      const i = {
        closed: !0,
        next(t) {},
        error(t) {
          if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
          Object(s.a)(t);
        },
        complete() {},
      };
    },
    jZKg: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('HDdC'),
        s = n('quSY');
      function i(t, e) {
        return new r.a((n) => {
          const r = new s.a();
          let i = 0;
          return (
            r.add(
              e.schedule(function () {
                i !== t.length ? (n.next(t[i++]), n.closed || r.add(this.schedule())) : n.complete();
              })
            ),
            r
          );
        });
      }
    },
    jhN1: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return N;
      }),
        n.d(e, 'b', function () {
          return M;
        }),
        n.d(e, 'c', function () {
          return j;
        });
      var r = n('ofXK'),
        s = n('fXoL');
      class i extends r.w {
        constructor() {
          super();
        }
        supportsDOMEvents() {
          return !0;
        }
      }
      class o extends i {
        static makeCurrent() {
          Object(r.A)(new o());
        }
        getProperty(t, e) {
          return t[e];
        }
        log(t) {
          window.console && window.console.log && window.console.log(t);
        }
        logGroup(t) {
          window.console && window.console.group && window.console.group(t);
        }
        logGroupEnd() {
          window.console && window.console.groupEnd && window.console.groupEnd();
        }
        onAndCancel(t, e, n) {
          return (
            t.addEventListener(e, n, !1),
            () => {
              t.removeEventListener(e, n, !1);
            }
          );
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
        remove(t) {
          return t.parentNode && t.parentNode.removeChild(t), t;
        }
        getValue(t) {
          return t.value;
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, e) {
          return 'window' === e ? window : 'document' === e ? t : 'body' === e ? t.body : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(t) {
          const e = l || ((l = document.querySelector('base')), l) ? l.getAttribute('href') : null;
          return null == e
            ? null
            : ((n = e),
              a || (a = document.createElement('a')),
              a.setAttribute('href', n),
              '/' === a.pathname.charAt(0) ? a.pathname : '/' + a.pathname);
          var n;
        }
        resetBaseElement() {
          l = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        performanceNow() {
          return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(t) {
          return Object(r.z)(document.cookie, t);
        }
      }
      let a,
        l = null;
      const c = new s.q('TRANSITION_ID'),
        u = [
          {
            provide: s.d,
            useFactory: function (t, e, n) {
              return () => {
                n.get(s.e).donePromise.then(() => {
                  const n = Object(r.y)();
                  Array.prototype.slice
                    .apply(e.querySelectorAll('style[ng-transition]'))
                    .filter((e) => e.getAttribute('ng-transition') === t)
                    .forEach((t) => n.remove(t));
                });
              };
            },
            deps: [c, r.c, s.r],
            multi: !0,
          },
        ];
      class h {
        static init() {
          Object(s.V)(new h());
        }
        addToWindow(t) {
          (s.nb.getAngularTestability = (e, n = !0) => {
            const r = t.findTestabilityInTree(e, n);
            if (null == r) throw new Error('Could not find testability for element.');
            return r;
          }),
            (s.nb.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (s.nb.getAllAngularRootElements = () => t.getAllRootElements()),
            s.nb.frameworkStabilizers || (s.nb.frameworkStabilizers = []),
            s.nb.frameworkStabilizers.push((t) => {
              const e = s.nb.getAllAngularTestabilities();
              let n = e.length,
                r = !1;
              const i = function (e) {
                (r = r || e), n--, 0 == n && t(r);
              };
              e.forEach(function (t) {
                t.whenStable(i);
              });
            });
        }
        findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          const s = t.getTestability(e);
          return null != s
            ? s
            : n
            ? Object(r.y)().isShadowRoot(e)
              ? this.findTestabilityInTree(t, e.host, !0)
              : this.findTestabilityInTree(t, e.parentElement, !0)
            : null;
        }
      }
      const d = new s.q('EventManagerPlugins');
      let f = (() => {
        class t {
          constructor(t, e) {
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach((t) => (t.manager = this)),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, e, n) {
            return this._findPluginFor(e).addEventListener(t, e, n);
          }
          addGlobalEventListener(t, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(t, e, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            const e = this._eventNameToPlugin.get(t);
            if (e) return e;
            const n = this._plugins;
            for (let r = 0; r < n.length; r++) {
              const e = n[r];
              if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e;
            }
            throw new Error('No event manager plugin found for event ' + t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Zb(d), s.Zb(s.z));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class p {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, e, n) {
          const s = Object(r.y)().getGlobalEventTarget(this._doc, t);
          if (!s) throw new Error(`Unsupported event target ${s} for event ${e}`);
          return this.addEventListener(s, e, n);
        }
      }
      let g = (() => {
          class t {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(t) {
              const e = new Set();
              t.forEach((t) => {
                this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t));
              }),
                this.onStylesAdded(e);
            }
            onStylesAdded(t) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        m = (() => {
          class t extends g {
            constructor(t) {
              super(),
                (this._doc = t),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(t.head);
            }
            _addStylesToHost(t, e) {
              t.forEach((t) => {
                const n = this._doc.createElement('style');
                (n.textContent = t), this._styleNodes.add(e.appendChild(n));
              });
            }
            addHost(t) {
              this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
            }
            removeHost(t) {
              this._hostNodes.delete(t);
            }
            onStylesAdded(t) {
              this._hostNodes.forEach((e) => this._addStylesToHost(t, e));
            }
            ngOnDestroy() {
              this._styleNodes.forEach((t) => Object(r.y)().remove(t));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Zb(r.c));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const b = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
        },
        y = /%COMP%/g;
      function v(t, e, n) {
        for (let r = 0; r < e.length; r++) {
          let s = e[r];
          Array.isArray(s) ? v(t, s, n) : ((s = s.replace(y, t)), n.push(s));
        }
        return n;
      }
      function _(t) {
        return (e) => {
          if ('__ngUnwrap__' === e) return t;
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      let w = (() => {
        class t {
          constructor(t, e, n) {
            (this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new C(t));
          }
          createRenderer(t, e) {
            if (!t || !e) return this.defaultRenderer;
            switch (e.encapsulation) {
              case s.O.Emulated: {
                let n = this.rendererByCompId.get(e.id);
                return (
                  n ||
                    ((n = new S(this.eventManager, this.sharedStylesHost, e, this.appId)),
                    this.rendererByCompId.set(e.id, n)),
                  n.applyToHost(t),
                  n
                );
              }
              case s.O.Native:
              case s.O.ShadowDom:
                return new E(this.eventManager, this.sharedStylesHost, t, e);
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  const t = v(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(t), this.rendererByCompId.set(e.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Zb(f), s.Zb(m), s.Zb(s.c));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class C {
        constructor(t) {
          (this.eventManager = t), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(t, e) {
          return e ? document.createElementNS(b[e] || e, t) : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        insertBefore(t, e, n) {
          t && t.insertBefore(e, n);
        }
        removeChild(t, e) {
          t && t.removeChild(e);
        }
        selectRootElement(t, e) {
          let n = 'string' == typeof t ? document.querySelector(t) : t;
          if (!n) throw new Error(`The selector "${t}" did not match any elements`);
          return e || (n.textContent = ''), n;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, e, n, r) {
          if (r) {
            e = r + ':' + e;
            const s = b[r];
            s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
        removeAttribute(t, e, n) {
          if (n) {
            const r = b[n];
            r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`);
          } else t.removeAttribute(e);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        setStyle(t, e, n, r) {
          r & s.F.DashCase ? t.style.setProperty(e, n, r & s.F.Important ? 'important' : '') : (t.style[e] = n);
        }
        removeStyle(t, e, n) {
          n & s.F.DashCase ? t.style.removeProperty(e) : (t.style[e] = '');
        }
        setProperty(t, e, n) {
          t[e] = n;
        }
        setValue(t, e) {
          t.nodeValue = e;
        }
        listen(t, e, n) {
          return 'string' == typeof t
            ? this.eventManager.addGlobalEventListener(t, e, _(n))
            : this.eventManager.addEventListener(t, e, _(n));
        }
      }
      class S extends C {
        constructor(t, e, n, r) {
          super(t), (this.component = n);
          const s = v(r + '-' + n.id, n.styles, []);
          e.addStyles(s),
            (this.contentAttr = '_ngcontent-%COMP%'.replace(y, r + '-' + n.id)),
            (this.hostAttr = (function (t) {
              return '_nghost-%COMP%'.replace(y, t);
            })(r + '-' + n.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, '');
        }
        createElement(t, e) {
          const n = super.createElement(t, e);
          return super.setAttribute(n, this.contentAttr, ''), n;
        }
      }
      class E extends C {
        constructor(t, e, n, r) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = n),
            (this.component = r),
            (this.shadowRoot =
              r.encapsulation === s.O.ShadowDom ? n.attachShadow({ mode: 'open' }) : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const i = v(r.id, r.styles, []);
          for (let s = 0; s < i.length; s++) {
            const t = document.createElement('style');
            (t.textContent = i[s]), this.shadowRoot.appendChild(t);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, n) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, n);
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)));
        }
      }
      let x = (() => {
        class t extends p {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, e, n) {
            return t.addEventListener(e, n, !1), () => this.removeEventListener(t, e, n);
          }
          removeEventListener(t, e, n) {
            return t.removeEventListener(e, n);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Zb(r.c));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const O = ['alt', 'control', 'meta', 'shift'],
        A = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        k = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock',
        },
        T = { alt: (t) => t.altKey, control: (t) => t.ctrlKey, meta: (t) => t.metaKey, shift: (t) => t.shiftKey };
      let I = (() => {
        class t extends p {
          constructor(t) {
            super(t);
          }
          supports(e) {
            return null != t.parseEventName(e);
          }
          addEventListener(e, n, s) {
            const i = t.parseEventName(n),
              o = t.eventCallback(i.fullKey, s, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(() => Object(r.y)().onAndCancel(e, i.domEventName, o));
          }
          static parseEventName(e) {
            const n = e.toLowerCase().split('.'),
              r = n.shift();
            if (0 === n.length || ('keydown' !== r && 'keyup' !== r)) return null;
            const s = t._normalizeKey(n.pop());
            let i = '';
            if (
              (O.forEach((t) => {
                const e = n.indexOf(t);
                e > -1 && (n.splice(e, 1), (i += t + '.'));
              }),
              (i += s),
              0 != n.length || 0 === s.length)
            )
              return null;
            const o = {};
            return (o.domEventName = r), (o.fullKey = i), o;
          }
          static getEventFullKey(t) {
            let e = '',
              n = (function (t) {
                let e = t.key;
                if (null == e) {
                  if (((e = t.keyIdentifier), null == e)) return 'Unidentified';
                  e.startsWith('U+') &&
                    ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                    3 === t.location && k.hasOwnProperty(e) && (e = k[e]));
                }
                return A[e] || e;
              })(t);
            return (
              (n = n.toLowerCase()),
              ' ' === n ? (n = 'space') : '.' === n && (n = 'dot'),
              O.forEach((r) => {
                r != n && (0, T[r])(t) && (e += r + '.');
              }),
              (e += n),
              e
            );
          }
          static eventCallback(e, n, r) {
            return (s) => {
              t.getEventFullKey(s) === e && r.runGuarded(() => n(s));
            };
          }
          static _normalizeKey(t) {
            switch (t) {
              case 'esc':
                return 'escape';
              default:
                return t;
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Zb(r.c));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const R = [
          { provide: s.B, useValue: r.x },
          {
            provide: s.C,
            useValue: function () {
              o.makeCurrent(), h.init();
            },
            multi: !0,
          },
          {
            provide: r.c,
            useFactory: function () {
              return Object(s.tb)(document), document;
            },
            deps: [],
          },
        ],
        j = Object(s.Q)(s.U, 'browser', R),
        D = [
          [],
          { provide: s.X, useValue: 'root' },
          {
            provide: s.m,
            useFactory: function () {
              return new s.m();
            },
            deps: [],
          },
          { provide: d, useClass: x, multi: !0, deps: [r.c, s.z, s.B] },
          { provide: d, useClass: I, multi: !0, deps: [r.c] },
          [],
          { provide: w, useClass: w, deps: [f, m, s.c] },
          { provide: s.E, useExisting: w },
          { provide: g, useExisting: m },
          { provide: m, useClass: m, deps: [r.c] },
          { provide: s.L, useClass: s.L, deps: [s.z] },
          { provide: f, useClass: f, deps: [d, s.z] },
          [],
        ];
      let N = (() => {
        class t {
          constructor(t) {
            if (t)
              throw new Error(
                'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
              );
          }
          static withServerTransition(e) {
            return {
              ngModule: t,
              providers: [{ provide: s.c, useValue: e.appId }, { provide: c, useExisting: s.c }, u],
            };
          }
        }
        return (
          (t.ɵmod = s.Kb({ type: t })),
          (t.ɵinj = s.Jb({
            factory: function (e) {
              return new (e || t)(s.Zb(t, 12));
            },
            providers: D,
            imports: [r.b, s.f],
          })),
          t
        );
      })();
      function P() {
        return new M(Object(s.Zb)(r.c));
      }
      let M = (() => {
        class t {
          constructor(t) {
            this._doc = t;
          }
          getTitle() {
            return this._doc.title;
          }
          setTitle(t) {
            this._doc.title = t || '';
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Zb(r.c));
          }),
          (t.ɵprov = Object(s.Ib)({ factory: P, token: t, providedIn: 'root' })),
          t
        );
      })();
      'undefined' != typeof window && window;
    },
    kJWO: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (() => ('function' == typeof Symbol && Symbol.observable) || '@@observable')();
    },
    l7GE: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('7o/Q');
      class s extends r.a {
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyError(t, e) {
          this.destination.error(t);
        }
        notifyComplete(t) {
          this.destination.complete();
        }
      }
    },
    lJxs: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('7o/Q');
      function s(t, e) {
        return function (n) {
          if ('function' != typeof t) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return n.lift(new i(t, e));
        };
      }
      class i {
        constructor(t, e) {
          (this.project = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new o(t, this.project, this.thisArg));
        }
      }
      class o extends r.a {
        constructor(t, e, n) {
          super(t), (this.project = e), (this.count = 0), (this.thisArg = n || this);
        }
        _next(t) {
          let e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
    },
    mCNh: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      }),
        n.d(e, 'b', function () {
          return i;
        });
      var r = n('SpAZ');
      function s(...t) {
        return i(t);
      }
      function i(t) {
        return 0 === t.length
          ? r.a
          : 1 === t.length
          ? t[0]
          : function (e) {
              return t.reduce((t, e) => e(t), e);
            };
      }
    },
    n6bG: function (t, e, n) {
      'use strict';
      function r(t) {
        return 'function' == typeof t;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    ngJS: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (t) => (e) => {
        for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
        e.complete();
      };
    },
    ofXK: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return _;
      }),
        n.d(e, 'b', function () {
          return vt;
        }),
        n.d(e, 'c', function () {
          return l;
        }),
        n.d(e, 'd', function () {
          return k;
        }),
        n.d(e, 'e', function () {
          return C;
        }),
        n.d(e, 'f', function () {
          return h;
        }),
        n.d(e, 'g', function () {
          return S;
        }),
        n.d(e, 'h', function () {
          return y;
        }),
        n.d(e, 'i', function () {
          return ut;
        }),
        n.d(e, 'j', function () {
          return dt;
        }),
        n.d(e, 'k', function () {
          return pt;
        }),
        n.d(e, 'l', function () {
          return bt;
        }),
        n.d(e, 'm', function () {
          return w;
        }),
        n.d(e, 'n', function () {
          return yt;
        }),
        n.d(e, 'o', function () {
          return c;
        }),
        n.d(e, 'p', function () {
          return T;
        }),
        n.d(e, 'q', function () {
          return Ct;
        }),
        n.d(e, 'r', function () {
          return Q;
        }),
        n.d(e, 's', function () {
          return D;
        }),
        n.d(e, 't', function () {
          return j;
        }),
        n.d(e, 'u', function () {
          return N;
        }),
        n.d(e, 'v', function () {
          return wt;
        }),
        n.d(e, 'w', function () {
          return a;
        }),
        n.d(e, 'x', function () {
          return _t;
        }),
        n.d(e, 'y', function () {
          return i;
        }),
        n.d(e, 'z', function () {
          return ct;
        }),
        n.d(e, 'A', function () {
          return o;
        });
      var r = n('fXoL');
      let s = null;
      function i() {
        return s;
      }
      function o(t) {
        s || (s = t);
      }
      class a {}
      const l = new r.q('DocumentToken');
      let c = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = Object(r.Ib)({ factory: u, token: t, providedIn: 'platform' })),
          t
        );
      })();
      function u() {
        return Object(r.Zb)(d);
      }
      const h = new r.q('Location Initialized');
      let d = (() => {
        class t extends c {
          constructor(t) {
            super(), (this._doc = t), this._init();
          }
          _init() {
            (this.location = i().getLocation()), (this._history = i().getHistory());
          }
          getBaseHrefFromDOM() {
            return i().getBaseHref(this._doc);
          }
          onPopState(t) {
            i().getGlobalEventTarget(this._doc, 'window').addEventListener('popstate', t, !1);
          }
          onHashChange(t) {
            i().getGlobalEventTarget(this._doc, 'window').addEventListener('hashchange', t, !1);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(t) {
            this.location.pathname = t;
          }
          pushState(t, e, n) {
            f() ? this._history.pushState(t, e, n) : (this.location.hash = n);
          }
          replaceState(t, e, n) {
            f() ? this._history.replaceState(t, e, n) : (this.location.hash = n);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Zb(l));
          }),
          (t.ɵprov = Object(r.Ib)({ factory: p, token: t, providedIn: 'platform' })),
          t
        );
      })();
      function f() {
        return !!window.history.pushState;
      }
      function p() {
        return new d(Object(r.Zb)(l));
      }
      function g(t, e) {
        if (0 == t.length) return e;
        if (0 == e.length) return t;
        let n = 0;
        return (
          t.endsWith('/') && n++, e.startsWith('/') && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + '/' + e
        );
      }
      function m(t) {
        const e = t.match(/#|\?|$/),
          n = (e && e.index) || t.length;
        return t.slice(0, n - ('/' === t[n - 1] ? 1 : 0)) + t.slice(n);
      }
      function b(t) {
        return t && '?' !== t[0] ? '?' + t : t;
      }
      let y = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = Object(r.Ib)({ factory: v, token: t, providedIn: 'root' })),
          t
        );
      })();
      function v(t) {
        const e = Object(r.Zb)(l).location;
        return new w(Object(r.Zb)(c), (e && e.origin) || '');
      }
      const _ = new r.q('appBaseHref');
      let w = (() => {
          class t extends y {
            constructor(t, e) {
              if (
                (super(),
                (this._platformLocation = t),
                null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                null == e)
              )
                throw new Error(
                  'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
                );
              this._baseHref = e;
            }
            onPopState(t) {
              this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return g(this._baseHref, t);
            }
            path(t = !1) {
              const e = this._platformLocation.pathname + b(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && t ? `${e}${n}` : e;
            }
            pushState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + b(r));
              this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + b(r));
              this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Zb(c), r.Zb(_, 8));
            }),
            (t.ɵprov = r.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        C = (() => {
          class t extends y {
            constructor(t, e) {
              super(), (this._platformLocation = t), (this._baseHref = ''), null != e && (this._baseHref = e);
            }
            onPopState(t) {
              this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              let e = this._platformLocation.hash;
              return null == e && (e = '#'), e.length > 0 ? e.substring(1) : e;
            }
            prepareExternalUrl(t) {
              const e = g(this._baseHref, t);
              return e.length > 0 ? '#' + e : e;
            }
            pushState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + b(r));
              0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + b(r));
              0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Zb(c), r.Zb(_, 8));
            }),
            (t.ɵprov = r.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        S = (() => {
          class t {
            constructor(t, e) {
              (this._subject = new r.n()), (this._urlChangeListeners = []), (this._platformStrategy = t);
              const n = this._platformStrategy.getBaseHref();
              (this._platformLocation = e),
                (this._baseHref = m(x(n))),
                this._platformStrategy.onPopState((t) => {
                  this._subject.emit({ url: this.path(!0), pop: !0, state: t.state, type: t.type });
                });
            }
            path(t = !1) {
              return this.normalize(this._platformStrategy.path(t));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(t, e = '') {
              return this.path() == this.normalize(t + b(e));
            }
            normalize(e) {
              return t.stripTrailingSlash(
                (function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e;
                })(this._baseHref, x(e))
              );
            }
            prepareExternalUrl(t) {
              return t && '/' !== t[0] && (t = '/' + t), this._platformStrategy.prepareExternalUrl(t);
            }
            go(t, e = '', n = null) {
              this._platformStrategy.pushState(n, '', t, e),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(t + b(e)), n);
            }
            replaceState(t, e = '', n = null) {
              this._platformStrategy.replaceState(n, '', t, e),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(t + b(e)), n);
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            onUrlChange(t) {
              this._urlChangeListeners.push(t),
                this.subscribe((t) => {
                  this._notifyUrlChangeListeners(t.url, t.state);
                });
            }
            _notifyUrlChangeListeners(t = '', e) {
              this._urlChangeListeners.forEach((n) => n(t, e));
            }
            subscribe(t, e, n) {
              return this._subject.subscribe({ next: t, error: e, complete: n });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Zb(y), r.Zb(c));
            }),
            (t.normalizeQueryParams = b),
            (t.joinWithSlash = g),
            (t.stripTrailingSlash = m),
            (t.ɵprov = Object(r.Ib)({ factory: E, token: t, providedIn: 'root' })),
            t
          );
        })();
      function E() {
        return new S(Object(r.Zb)(y), Object(r.Zb)(c));
      }
      function x(t) {
        return t.replace(/\/index.html$/, '');
      }
      const O = (function () {
          var t = { Decimal: 0, Percent: 1, Currency: 2, Scientific: 3 };
          return (
            (t[t.Decimal] = 'Decimal'),
            (t[t.Percent] = 'Percent'),
            (t[t.Currency] = 'Currency'),
            (t[t.Scientific] = 'Scientific'),
            t
          );
        })(),
        A = (function () {
          var t = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (t[t.Zero] = 'Zero'),
            (t[t.One] = 'One'),
            (t[t.Two] = 'Two'),
            (t[t.Few] = 'Few'),
            (t[t.Many] = 'Many'),
            (t[t.Other] = 'Other'),
            t
          );
        })(),
        k = (function () {
          var t = { Format: 0, Standalone: 1 };
          return (t[t.Format] = 'Format'), (t[t.Standalone] = 'Standalone'), t;
        })(),
        T = (function () {
          var t = { Narrow: 0, Abbreviated: 1, Wide: 2, Short: 3 };
          return (
            (t[t.Narrow] = 'Narrow'),
            (t[t.Abbreviated] = 'Abbreviated'),
            (t[t.Wide] = 'Wide'),
            (t[t.Short] = 'Short'),
            t
          );
        })(),
        I = (function () {
          var t = { Short: 0, Medium: 1, Long: 2, Full: 3 };
          return (t[t.Short] = 'Short'), (t[t.Medium] = 'Medium'), (t[t.Long] = 'Long'), (t[t.Full] = 'Full'), t;
        })(),
        R = (function () {
          var t = {
            Decimal: 0,
            Group: 1,
            List: 2,
            PercentSign: 3,
            PlusSign: 4,
            MinusSign: 5,
            Exponential: 6,
            SuperscriptingExponent: 7,
            PerMille: 8,
            Infinity: 9,
            NaN: 10,
            TimeSeparator: 11,
            CurrencyDecimal: 12,
            CurrencyGroup: 13,
          };
          return (
            (t[t.Decimal] = 'Decimal'),
            (t[t.Group] = 'Group'),
            (t[t.List] = 'List'),
            (t[t.PercentSign] = 'PercentSign'),
            (t[t.PlusSign] = 'PlusSign'),
            (t[t.MinusSign] = 'MinusSign'),
            (t[t.Exponential] = 'Exponential'),
            (t[t.SuperscriptingExponent] = 'SuperscriptingExponent'),
            (t[t.PerMille] = 'PerMille'),
            (t[t.Infinity] = 'Infinity'),
            (t[t.NaN] = 'NaN'),
            (t[t.TimeSeparator] = 'TimeSeparator'),
            (t[t.CurrencyDecimal] = 'CurrencyDecimal'),
            (t[t.CurrencyGroup] = 'CurrencyGroup'),
            t
          );
        })();
      function j(t, e, n) {
        const s = Object(r.ib)(t),
          i = U([s[r.Y.DayPeriodsFormat], s[r.Y.DayPeriodsStandalone]], e);
        return U(i, n);
      }
      function D(t, e, n) {
        const s = Object(r.ib)(t),
          i = U([s[r.Y.DaysFormat], s[r.Y.DaysStandalone]], e);
        return U(i, n);
      }
      function N(t, e, n) {
        const s = Object(r.ib)(t),
          i = U([s[r.Y.MonthsFormat], s[r.Y.MonthsStandalone]], e);
        return U(i, n);
      }
      function P(t, e) {
        return U(Object(r.ib)(t)[r.Y.DateFormat], e);
      }
      function M(t, e) {
        return U(Object(r.ib)(t)[r.Y.TimeFormat], e);
      }
      function L(t, e) {
        return U(Object(r.ib)(t)[r.Y.DateTimeFormat], e);
      }
      function V(t, e) {
        const n = Object(r.ib)(t),
          s = n[r.Y.NumberSymbols][e];
        if (void 0 === s) {
          if (e === R.CurrencyDecimal) return n[r.Y.NumberSymbols][R.Decimal];
          if (e === R.CurrencyGroup) return n[r.Y.NumberSymbols][R.Group];
        }
        return s;
      }
      const F = r.lb;
      function H(t) {
        if (!t[r.Y.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              t[r.Y.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function U(t, e) {
        for (let n = e; n > -1; n--) if (void 0 !== t[n]) return t[n];
        throw new Error('Locale data API: locale data undefined');
      }
      function z(t) {
        const [e, n] = t.split(':');
        return { hours: +e, minutes: +n };
      }
      const $ = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        q = {},
        B = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
        G = (function () {
          var t = { Short: 0, ShortGMT: 1, Long: 2, Extended: 3 };
          return (
            (t[t.Short] = 'Short'), (t[t.ShortGMT] = 'ShortGMT'), (t[t.Long] = 'Long'), (t[t.Extended] = 'Extended'), t
          );
        })(),
        Z = (function () {
          var t = { FullYear: 0, Month: 1, Date: 2, Hours: 3, Minutes: 4, Seconds: 5, FractionalSeconds: 6, Day: 7 };
          return (
            (t[t.FullYear] = 'FullYear'),
            (t[t.Month] = 'Month'),
            (t[t.Date] = 'Date'),
            (t[t.Hours] = 'Hours'),
            (t[t.Minutes] = 'Minutes'),
            (t[t.Seconds] = 'Seconds'),
            (t[t.FractionalSeconds] = 'FractionalSeconds'),
            (t[t.Day] = 'Day'),
            t
          );
        })(),
        W = (function () {
          var t = { DayPeriods: 0, Days: 1, Months: 2, Eras: 3 };
          return (
            (t[t.DayPeriods] = 'DayPeriods'), (t[t.Days] = 'Days'), (t[t.Months] = 'Months'), (t[t.Eras] = 'Eras'), t
          );
        })();
      function Q(t, e, n, s) {
        let i = (function (t) {
          if (st(t)) return t;
          if ('number' == typeof t && !isNaN(t)) return new Date(t);
          if ('string' == typeof t) {
            t = t.trim();
            const e = parseFloat(t);
            if (!isNaN(t - e)) return new Date(e);
            if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) {
              const [e, n, r] = t.split('-').map((t) => +t);
              return new Date(e, n - 1, r);
            }
            let n;
            if ((n = t.match($)))
              return (function (t) {
                const e = new Date(0);
                let n = 0,
                  r = 0;
                const s = t[8] ? e.setUTCFullYear : e.setFullYear,
                  i = t[8] ? e.setUTCHours : e.setHours;
                t[9] && ((n = Number(t[9] + t[10])), (r = Number(t[9] + t[11]))),
                  s.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3]));
                const o = Number(t[4] || 0) - n,
                  a = Number(t[5] || 0) - r,
                  l = Number(t[6] || 0),
                  c = Math.round(1e3 * parseFloat('0.' + (t[7] || 0)));
                return i.call(e, o, a, l, c), e;
              })(n);
          }
          const e = new Date(t);
          if (!st(e)) throw new Error(`Unable to convert "${t}" into a date`);
          return e;
        })(t);
        e =
          (function t(e, n) {
            const s = (function (t) {
              return Object(r.ib)(t)[r.Y.LocaleId];
            })(e);
            if (((q[s] = q[s] || {}), q[s][n])) return q[s][n];
            let i = '';
            switch (n) {
              case 'shortDate':
                i = P(e, I.Short);
                break;
              case 'mediumDate':
                i = P(e, I.Medium);
                break;
              case 'longDate':
                i = P(e, I.Long);
                break;
              case 'fullDate':
                i = P(e, I.Full);
                break;
              case 'shortTime':
                i = M(e, I.Short);
                break;
              case 'mediumTime':
                i = M(e, I.Medium);
                break;
              case 'longTime':
                i = M(e, I.Long);
                break;
              case 'fullTime':
                i = M(e, I.Full);
                break;
              case 'short':
                const n = t(e, 'shortTime'),
                  r = t(e, 'shortDate');
                i = K(L(e, I.Short), [n, r]);
                break;
              case 'medium':
                const s = t(e, 'mediumTime'),
                  o = t(e, 'mediumDate');
                i = K(L(e, I.Medium), [s, o]);
                break;
              case 'long':
                const a = t(e, 'longTime'),
                  l = t(e, 'longDate');
                i = K(L(e, I.Long), [a, l]);
                break;
              case 'full':
                const c = t(e, 'fullTime'),
                  u = t(e, 'fullDate');
                i = K(L(e, I.Full), [c, u]);
            }
            return i && (q[s][n] = i), i;
          })(n, e) || e;
        let o,
          a = [];
        for (; e; ) {
          if (((o = B.exec(e)), !o)) {
            a.push(e);
            break;
          }
          {
            a = a.concat(o.slice(1));
            const t = a.pop();
            if (!t) break;
            e = t;
          }
        }
        let l = i.getTimezoneOffset();
        s &&
          ((l = rt(s, l)),
          (i = (function (t, e, n) {
            const r = t.getTimezoneOffset();
            return (function (t, e) {
              return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t;
            })(t, -1 * (rt(e, r) - r));
          })(i, s)));
        let c = '';
        return (
          a.forEach((t) => {
            const e = (function (t) {
              if (nt[t]) return nt[t];
              let e;
              switch (t) {
                case 'G':
                case 'GG':
                case 'GGG':
                  e = X(W.Eras, T.Abbreviated);
                  break;
                case 'GGGG':
                  e = X(W.Eras, T.Wide);
                  break;
                case 'GGGGG':
                  e = X(W.Eras, T.Narrow);
                  break;
                case 'y':
                  e = Y(Z.FullYear, 1, 0, !1, !0);
                  break;
                case 'yy':
                  e = Y(Z.FullYear, 2, 0, !0, !0);
                  break;
                case 'yyy':
                  e = Y(Z.FullYear, 3, 0, !1, !0);
                  break;
                case 'yyyy':
                  e = Y(Z.FullYear, 4, 0, !1, !0);
                  break;
                case 'M':
                case 'L':
                  e = Y(Z.Month, 1, 1);
                  break;
                case 'MM':
                case 'LL':
                  e = Y(Z.Month, 2, 1);
                  break;
                case 'MMM':
                  e = X(W.Months, T.Abbreviated);
                  break;
                case 'MMMM':
                  e = X(W.Months, T.Wide);
                  break;
                case 'MMMMM':
                  e = X(W.Months, T.Narrow);
                  break;
                case 'LLL':
                  e = X(W.Months, T.Abbreviated, k.Standalone);
                  break;
                case 'LLLL':
                  e = X(W.Months, T.Wide, k.Standalone);
                  break;
                case 'LLLLL':
                  e = X(W.Months, T.Narrow, k.Standalone);
                  break;
                case 'w':
                  e = et(1);
                  break;
                case 'ww':
                  e = et(2);
                  break;
                case 'W':
                  e = et(1, !0);
                  break;
                case 'd':
                  e = Y(Z.Date, 1);
                  break;
                case 'dd':
                  e = Y(Z.Date, 2);
                  break;
                case 'E':
                case 'EE':
                case 'EEE':
                  e = X(W.Days, T.Abbreviated);
                  break;
                case 'EEEE':
                  e = X(W.Days, T.Wide);
                  break;
                case 'EEEEE':
                  e = X(W.Days, T.Narrow);
                  break;
                case 'EEEEEE':
                  e = X(W.Days, T.Short);
                  break;
                case 'a':
                case 'aa':
                case 'aaa':
                  e = X(W.DayPeriods, T.Abbreviated);
                  break;
                case 'aaaa':
                  e = X(W.DayPeriods, T.Wide);
                  break;
                case 'aaaaa':
                  e = X(W.DayPeriods, T.Narrow);
                  break;
                case 'b':
                case 'bb':
                case 'bbb':
                  e = X(W.DayPeriods, T.Abbreviated, k.Standalone, !0);
                  break;
                case 'bbbb':
                  e = X(W.DayPeriods, T.Wide, k.Standalone, !0);
                  break;
                case 'bbbbb':
                  e = X(W.DayPeriods, T.Narrow, k.Standalone, !0);
                  break;
                case 'B':
                case 'BB':
                case 'BBB':
                  e = X(W.DayPeriods, T.Abbreviated, k.Format, !0);
                  break;
                case 'BBBB':
                  e = X(W.DayPeriods, T.Wide, k.Format, !0);
                  break;
                case 'BBBBB':
                  e = X(W.DayPeriods, T.Narrow, k.Format, !0);
                  break;
                case 'h':
                  e = Y(Z.Hours, 1, -12);
                  break;
                case 'hh':
                  e = Y(Z.Hours, 2, -12);
                  break;
                case 'H':
                  e = Y(Z.Hours, 1);
                  break;
                case 'HH':
                  e = Y(Z.Hours, 2);
                  break;
                case 'm':
                  e = Y(Z.Minutes, 1);
                  break;
                case 'mm':
                  e = Y(Z.Minutes, 2);
                  break;
                case 's':
                  e = Y(Z.Seconds, 1);
                  break;
                case 'ss':
                  e = Y(Z.Seconds, 2);
                  break;
                case 'S':
                  e = Y(Z.FractionalSeconds, 1);
                  break;
                case 'SS':
                  e = Y(Z.FractionalSeconds, 2);
                  break;
                case 'SSS':
                  e = Y(Z.FractionalSeconds, 3);
                  break;
                case 'Z':
                case 'ZZ':
                case 'ZZZ':
                  e = tt(G.Short);
                  break;
                case 'ZZZZZ':
                  e = tt(G.Extended);
                  break;
                case 'O':
                case 'OO':
                case 'OOO':
                case 'z':
                case 'zz':
                case 'zzz':
                  e = tt(G.ShortGMT);
                  break;
                case 'OOOO':
                case 'ZZZZ':
                case 'zzzz':
                  e = tt(G.Long);
                  break;
                default:
                  return null;
              }
              return (nt[t] = e), e;
            })(t);
            c += e ? e(i, n, l) : "''" === t ? "'" : t.replace(/(^'|'$)/g, '').replace(/''/g, "'");
          }),
          c
        );
      }
      function K(t, e) {
        return (
          e &&
            (t = t.replace(/\{([^}]+)}/g, function (t, n) {
              return null != e && n in e ? e[n] : t;
            })),
          t
        );
      }
      function J(t, e, n = '-', r, s) {
        let i = '';
        (t < 0 || (s && t <= 0)) && (s ? (t = 1 - t) : ((t = -t), (i = n)));
        let o = String(t);
        for (; o.length < e; ) o = '0' + o;
        return r && (o = o.substr(o.length - e)), i + o;
      }
      function Y(t, e, n = 0, r = !1, s = !1) {
        return function (i, o) {
          let a = (function (t, e) {
            switch (t) {
              case Z.FullYear:
                return e.getFullYear();
              case Z.Month:
                return e.getMonth();
              case Z.Date:
                return e.getDate();
              case Z.Hours:
                return e.getHours();
              case Z.Minutes:
                return e.getMinutes();
              case Z.Seconds:
                return e.getSeconds();
              case Z.FractionalSeconds:
                return e.getMilliseconds();
              case Z.Day:
                return e.getDay();
              default:
                throw new Error(`Unknown DateType value "${t}".`);
            }
          })(t, i);
          if (((n > 0 || a > -n) && (a += n), t === Z.Hours)) 0 === a && -12 === n && (a = 12);
          else if (t === Z.FractionalSeconds) return (l = e), J(a, 3).substr(0, l);
          var l;
          const c = V(o, R.MinusSign);
          return J(a, e, c, r, s);
        };
      }
      function X(t, e, n = k.Format, s = !1) {
        return function (i, o) {
          return (function (t, e, n, s, i, o) {
            switch (n) {
              case W.Months:
                return N(e, i, s)[t.getMonth()];
              case W.Days:
                return D(e, i, s)[t.getDay()];
              case W.DayPeriods:
                const a = t.getHours(),
                  l = t.getMinutes();
                if (o) {
                  const t = (function (t) {
                      const e = Object(r.ib)(t);
                      return (
                        H(e), (e[r.Y.ExtraData][2] || []).map((t) => ('string' == typeof t ? z(t) : [z(t[0]), z(t[1])]))
                      );
                    })(e),
                    n = (function (t, e, n) {
                      const s = Object(r.ib)(t);
                      H(s);
                      const i = U([s[r.Y.ExtraData][0], s[r.Y.ExtraData][1]], e) || [];
                      return U(i, n) || [];
                    })(e, i, s);
                  let o;
                  if (
                    (t.forEach((t, e) => {
                      if (Array.isArray(t)) {
                        const { hours: r, minutes: s } = t[0],
                          { hours: i, minutes: c } = t[1];
                        a >= r && l >= s && (a < i || (a === i && l < c)) && (o = n[e]);
                      } else {
                        const { hours: r, minutes: s } = t;
                        r === a && s === l && (o = n[e]);
                      }
                    }),
                    o)
                  )
                    return o;
                }
                return j(e, i, s)[a < 12 ? 0 : 1];
              case W.Eras:
                return (function (t, e) {
                  return U(Object(r.ib)(t)[r.Y.Eras], e);
                })(e, s)[t.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error('unexpected translation type ' + n);
            }
          })(i, o, t, e, n, s);
        };
      }
      function tt(t) {
        return function (e, n, r) {
          const s = -1 * r,
            i = V(n, R.MinusSign),
            o = s > 0 ? Math.floor(s / 60) : Math.ceil(s / 60);
          switch (t) {
            case G.Short:
              return (s >= 0 ? '+' : '') + J(o, 2, i) + J(Math.abs(s % 60), 2, i);
            case G.ShortGMT:
              return 'GMT' + (s >= 0 ? '+' : '') + J(o, 1, i);
            case G.Long:
              return 'GMT' + (s >= 0 ? '+' : '') + J(o, 2, i) + ':' + J(Math.abs(s % 60), 2, i);
            case G.Extended:
              return 0 === r ? 'Z' : (s >= 0 ? '+' : '') + J(o, 2, i) + ':' + J(Math.abs(s % 60), 2, i);
            default:
              throw new Error(`Unknown zone width "${t}"`);
          }
        };
      }
      function et(t, e = !1) {
        return function (n, r) {
          let s;
          if (e) {
            const t = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
              e = n.getDate();
            s = 1 + Math.floor((e + t) / 7);
          } else {
            const t = (function (t) {
                const e = new Date(t, 0, 1).getDay();
                return new Date(t, 0, 1 + (e <= 4 ? 4 : 11) - e);
              })(n.getFullYear()),
              e =
                ((i = n), new Date(i.getFullYear(), i.getMonth(), i.getDate() + (4 - i.getDay()))).getTime() -
                t.getTime();
            s = 1 + Math.round(e / 6048e5);
          }
          var i;
          return J(s, t, V(r, R.MinusSign));
        };
      }
      const nt = {};
      function rt(t, e) {
        t = t.replace(/:/g, '');
        const n = Date.parse('Jan 01, 1970 00:00:00 ' + t) / 6e4;
        return isNaN(n) ? e : n;
      }
      function st(t) {
        return t instanceof Date && !isNaN(t.valueOf());
      }
      const it = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
      function ot(t) {
        const e = parseInt(t);
        if (isNaN(e)) throw new Error('Invalid integer literal when parsing ' + t);
        return e;
      }
      class at {}
      let lt = (() => {
        class t extends at {
          constructor(t) {
            super(), (this.locale = t);
          }
          getPluralCategory(t, e) {
            switch (F(e || this.locale)(t)) {
              case A.Zero:
                return 'zero';
              case A.One:
                return 'one';
              case A.Two:
                return 'two';
              case A.Few:
                return 'few';
              case A.Many:
                return 'many';
              default:
                return 'other';
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Zb(r.u));
          }),
          (t.ɵprov = r.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function ct(t, e) {
        e = encodeURIComponent(e);
        for (const n of t.split(';')) {
          const t = n.indexOf('='),
            [r, s] = -1 == t ? [n, ''] : [n.slice(0, t), n.slice(t + 1)];
          if (r.trim() === e) return decodeURIComponent(s);
        }
        return null;
      }
      let ut = (() => {
        class t {
          constructor(t, e, n, r) {
            (this._iterableDiffers = t),
              (this._keyValueDiffers = e),
              (this._ngEl = n),
              (this._renderer = r),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(t) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses = 'string' == typeof t ? t.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(t) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = 'string' == typeof t ? t.split(/\s+/) : t),
              this._rawClass &&
                (Object(r.ob)(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create())
                  : (this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const t = this._iterableDiffer.diff(this._rawClass);
              t && this._applyIterableChanges(t);
            } else if (this._keyValueDiffer) {
              const t = this._keyValueDiffer.diff(this._rawClass);
              t && this._applyKeyValueChanges(t);
            }
          }
          _applyKeyValueChanges(t) {
            t.forEachAddedItem((t) => this._toggleClass(t.key, t.currentValue)),
              t.forEachChangedItem((t) => this._toggleClass(t.key, t.currentValue)),
              t.forEachRemovedItem((t) => {
                t.previousValue && this._toggleClass(t.key, !1);
              });
          }
          _applyIterableChanges(t) {
            t.forEachAddedItem((t) => {
              if ('string' != typeof t.item)
                throw new Error(
                  'NgClass can only toggle CSS classes expressed as strings, got ' + Object(r.ub)(t.item)
                );
              this._toggleClass(t.item, !0);
            }),
              t.forEachRemovedItem((t) => this._toggleClass(t.item, !1));
          }
          _applyClasses(t) {
            t &&
              (Array.isArray(t) || t instanceof Set
                ? t.forEach((t) => this._toggleClass(t, !0))
                : Object.keys(t).forEach((e) => this._toggleClass(e, !!t[e])));
          }
          _removeClasses(t) {
            t &&
              (Array.isArray(t) || t instanceof Set
                ? t.forEach((t) => this._toggleClass(t, !1))
                : Object.keys(t).forEach((t) => this._toggleClass(t, !1)));
          }
          _toggleClass(t, e) {
            (t = t.trim()) &&
              t.split(/\s+/g).forEach((t) => {
                e
                  ? this._renderer.addClass(this._ngEl.nativeElement, t)
                  : this._renderer.removeClass(this._ngEl.nativeElement, t);
              });
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Mb(r.s), r.Mb(r.t), r.Mb(r.l), r.Mb(r.D));
          }),
          (t.ɵdir = r.Hb({
            type: t,
            selectors: [['', 'ngClass', '']],
            inputs: { klass: ['class', 'klass'], ngClass: 'ngClass' },
          })),
          t
        );
      })();
      class ht {
        constructor(t, e, n, r) {
          (this.$implicit = t), (this.ngForOf = e), (this.index = n), (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let dt = (() => {
        class t {
          constructor(t, e, n) {
            (this._viewContainer = t),
              (this._template = e),
              (this._differs = n),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            Object(r.T)() &&
              null != t &&
              'function' != typeof t &&
              console &&
              console.warn &&
              console.warn(
                `trackBy must be a function, but received ${JSON.stringify(
                  t
                )}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`
              ),
              (this._trackByFn = t);
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              if (!this._differ && n)
                try {
                  this._differ = this._differs.find(n).create(this.ngForTrackBy);
                } catch (e) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${
                      ((t = n), t.name || typeof t)
                    }'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            var t;
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const e = [];
            t.forEachOperation((t, n, r) => {
              if (null == t.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new ht(null, this._ngForOf, -1, -1),
                    null === r ? void 0 : r
                  ),
                  s = new ft(t, n);
                e.push(s);
              } else if (null == r) this._viewContainer.remove(null === n ? void 0 : n);
              else if (null !== n) {
                const s = this._viewContainer.get(n);
                this._viewContainer.move(s, r);
                const i = new ft(t, s);
                e.push(i);
              }
            });
            for (let n = 0; n < e.length; n++) this._perViewChange(e[n].view, e[n].record);
            for (let n = 0, r = this._viewContainer.length; n < r; n++) {
              const t = this._viewContainer.get(n);
              (t.context.index = n), (t.context.count = r), (t.context.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange((t) => {
              this._viewContainer.get(t.currentIndex).context.$implicit = t.item;
            });
          }
          _perViewChange(t, e) {
            t.context.$implicit = e.item;
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Mb(r.N), r.Mb(r.K), r.Mb(r.s));
          }),
          (t.ɵdir = r.Hb({
            type: t,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: { ngForOf: 'ngForOf', ngForTrackBy: 'ngForTrackBy', ngForTemplate: 'ngForTemplate' },
          })),
          t
        );
      })();
      class ft {
        constructor(t, e) {
          (this.record = t), (this.view = e);
        }
      }
      let pt = (() => {
        class t {
          constructor(t, e) {
            (this._viewContainer = t),
              (this._context = new gt()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = e);
          }
          set ngIf(t) {
            (this._context.$implicit = this._context.ngIf = t), this._updateView();
          }
          set ngIfThen(t) {
            mt('ngIfThen', t), (this._thenTemplateRef = t), (this._thenViewRef = null), this._updateView();
          }
          set ngIfElse(t) {
            mt('ngIfElse', t), (this._elseTemplateRef = t), (this._elseViewRef = null), this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context)))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Mb(r.N), r.Mb(r.K));
          }),
          (t.ɵdir = r.Hb({
            type: t,
            selectors: [['', 'ngIf', '']],
            inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' },
          })),
          t
        );
      })();
      class gt {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function mt(t, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(`${t} must be a TemplateRef, but received '${Object(r.ub)(e)}'.`);
      }
      let bt = (() => {
          class t {
            constructor(t) {
              (this._viewContainerRef = t),
                (this._viewRef = null),
                (this.ngTemplateOutletContext = null),
                (this.ngTemplateOutlet = null);
            }
            ngOnChanges(t) {
              if (this._shouldRecreateView(t)) {
                const t = this._viewContainerRef;
                this._viewRef && t.remove(t.indexOf(this._viewRef)),
                  (this._viewRef = this.ngTemplateOutlet
                    ? t.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext)
                    : null);
              } else
                this._viewRef &&
                  this.ngTemplateOutletContext &&
                  this._updateExistingContext(this.ngTemplateOutletContext);
            }
            _shouldRecreateView(t) {
              const e = t.ngTemplateOutletContext;
              return !!t.ngTemplateOutlet || (e && this._hasContextShapeChanged(e));
            }
            _hasContextShapeChanged(t) {
              const e = Object.keys(t.previousValue || {}),
                n = Object.keys(t.currentValue || {});
              if (e.length === n.length) {
                for (let t of n) if (-1 === e.indexOf(t)) return !0;
                return !1;
              }
              return !0;
            }
            _updateExistingContext(t) {
              for (let e of Object.keys(t)) this._viewRef.context[e] = this.ngTemplateOutletContext[e];
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Mb(r.N));
            }),
            (t.ɵdir = r.Hb({
              type: t,
              selectors: [['', 'ngTemplateOutlet', '']],
              inputs: { ngTemplateOutletContext: 'ngTemplateOutletContext', ngTemplateOutlet: 'ngTemplateOutlet' },
              features: [r.xb],
            })),
            t
          );
        })(),
        yt = (() => {
          class t {
            constructor(t) {
              this._locale = t;
            }
            transform(e, n, s) {
              if (
                (function (t) {
                  return null == t || '' === t || t != t;
                })(e)
              )
                return null;
              s = s || this._locale;
              try {
                return (function (t, e, n) {
                  return (function (t, e, n, r, s, i, o = !1) {
                    let a = '',
                      l = !1;
                    if (isFinite(t)) {
                      let c = (function (t) {
                        let e,
                          n,
                          r,
                          s,
                          i,
                          o = Math.abs(t) + '',
                          a = 0;
                        for (
                          (n = o.indexOf('.')) > -1 && (o = o.replace('.', '')),
                            (r = o.search(/e/i)) > 0
                              ? (n < 0 && (n = r), (n += +o.slice(r + 1)), (o = o.substring(0, r)))
                              : n < 0 && (n = o.length),
                            r = 0;
                          '0' === o.charAt(r);
                          r++
                        );
                        if (r === (i = o.length)) (e = [0]), (n = 1);
                        else {
                          for (i--; '0' === o.charAt(i); ) i--;
                          for (n -= r, e = [], s = 0; r <= i; r++, s++) e[s] = Number(o.charAt(r));
                        }
                        return (
                          n > 22 && ((e = e.splice(0, 21)), (a = n - 1), (n = 1)),
                          { digits: e, exponent: a, integerLen: n }
                        );
                      })(t);
                      o &&
                        (c = (function (t) {
                          if (0 === t.digits[0]) return t;
                          const e = t.digits.length - t.integerLen;
                          return (
                            t.exponent
                              ? (t.exponent += 2)
                              : (0 === e ? t.digits.push(0, 0) : 1 === e && t.digits.push(0), (t.integerLen += 2)),
                            t
                          );
                        })(c));
                      let u = e.minInt,
                        h = e.minFrac,
                        d = e.maxFrac;
                      if (i) {
                        const t = i.match(it);
                        if (null === t) throw new Error(i + ' is not a valid digit info');
                        const e = t[1],
                          n = t[3],
                          r = t[5];
                        null != e && (u = ot(e)),
                          null != n && (h = ot(n)),
                          null != r ? (d = ot(r)) : null != n && h > d && (d = h);
                      }
                      !(function (t, e, n) {
                        if (e > n)
                          throw new Error(
                            `The minimum number of digits after fraction (${e}) is higher than the maximum (${n}).`
                          );
                        let r = t.digits,
                          s = r.length - t.integerLen;
                        const i = Math.min(Math.max(e, s), n);
                        let o = i + t.integerLen,
                          a = r[o];
                        if (o > 0) {
                          r.splice(Math.max(t.integerLen, o));
                          for (let t = o; t < r.length; t++) r[t] = 0;
                        } else {
                          (s = Math.max(0, s)), (t.integerLen = 1), (r.length = Math.max(1, (o = i + 1))), (r[0] = 0);
                          for (let t = 1; t < o; t++) r[t] = 0;
                        }
                        if (a >= 5)
                          if (o - 1 < 0) {
                            for (let e = 0; e > o; e--) r.unshift(0), t.integerLen++;
                            r.unshift(1), t.integerLen++;
                          } else r[o - 1]++;
                        for (; s < Math.max(0, i); s++) r.push(0);
                        let l = 0 !== i;
                        const c = e + t.integerLen,
                          u = r.reduceRight(function (t, e, n, r) {
                            return (
                              (r[n] = (e += t) < 10 ? e : e - 10),
                              l && (0 === r[n] && n >= c ? r.pop() : (l = !1)),
                              e >= 10 ? 1 : 0
                            );
                          }, 0);
                        u && (r.unshift(u), t.integerLen++);
                      })(c, h, d);
                      let f = c.digits,
                        p = c.integerLen;
                      const g = c.exponent;
                      let m = [];
                      for (l = f.every((t) => !t); p < u; p++) f.unshift(0);
                      for (; p < 0; p++) f.unshift(0);
                      p > 0 ? (m = f.splice(p, f.length)) : ((m = f), (f = [0]));
                      const b = [];
                      for (
                        f.length >= e.lgSize && b.unshift(f.splice(-e.lgSize, f.length).join(''));
                        f.length > e.gSize;

                      )
                        b.unshift(f.splice(-e.gSize, f.length).join(''));
                      f.length && b.unshift(f.join('')),
                        (a = b.join(V(n, r))),
                        m.length && (a += V(n, s) + m.join('')),
                        g && (a += V(n, R.Exponential) + '+' + g);
                    } else a = V(n, R.Infinity);
                    return (a = t < 0 && !l ? e.negPre + a + e.negSuf : e.posPre + a + e.posSuf), a;
                  })(
                    t,
                    (function (t, e = '-') {
                      const n = {
                          minInt: 1,
                          minFrac: 0,
                          maxFrac: 0,
                          posPre: '',
                          posSuf: '',
                          negPre: '',
                          negSuf: '',
                          gSize: 0,
                          lgSize: 0,
                        },
                        r = t.split(';'),
                        s = r[0],
                        i = r[1],
                        o =
                          -1 !== s.indexOf('.')
                            ? s.split('.')
                            : [s.substring(0, s.lastIndexOf('0') + 1), s.substring(s.lastIndexOf('0') + 1)],
                        a = o[0],
                        l = o[1] || '';
                      n.posPre = a.substr(0, a.indexOf('#'));
                      for (let u = 0; u < l.length; u++) {
                        const t = l.charAt(u);
                        '0' === t ? (n.minFrac = n.maxFrac = u + 1) : '#' === t ? (n.maxFrac = u + 1) : (n.posSuf += t);
                      }
                      const c = a.split(',');
                      if (
                        ((n.gSize = c[1] ? c[1].length : 0), (n.lgSize = c[2] || c[1] ? (c[2] || c[1]).length : 0), i)
                      ) {
                        const t = s.length - n.posPre.length - n.posSuf.length,
                          e = i.indexOf('#');
                        (n.negPre = i.substr(0, e).replace(/'/g, '')), (n.negSuf = i.substr(e + t).replace(/'/g, ''));
                      } else (n.negPre = e + n.posPre), (n.negSuf = n.posSuf);
                      return n;
                    })(
                      (function (t, e) {
                        return Object(r.ib)(t)[r.Y.NumberFormats][e];
                      })(e, O.Percent),
                      V(e, R.MinusSign)
                    ),
                    e,
                    R.Group,
                    R.Decimal,
                    n,
                    !0
                  ).replace(new RegExp('%', 'g'), V(e, R.PercentSign));
                })(
                  (function (t) {
                    if ('string' == typeof t && !isNaN(Number(t) - parseFloat(t))) return Number(t);
                    if ('number' != typeof t) throw new Error(t + ' is not a number');
                    return t;
                  })(e),
                  s,
                  n
                );
              } catch (i) {
                throw (function (t, e) {
                  return Error(`InvalidPipeArgument: '${e}' for pipe '${Object(r.ub)(t)}'`);
                })(t, i.message);
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Mb(r.u));
            }),
            (t.ɵpipe = r.Lb({ name: 'percent', type: t, pure: !0 })),
            t
          );
        })(),
        vt = (() => {
          class t {}
          return (
            (t.ɵmod = r.Kb({ type: t })),
            (t.ɵinj = r.Jb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [{ provide: at, useClass: lt }],
            })),
            t
          );
        })();
      const _t = 'browser';
      function wt(t) {
        return t === _t;
      }
      let Ct = (() => {
        class t {}
        return (
          (t.ɵprov = Object(r.Ib)({
            token: t,
            providedIn: 'root',
            factory: () => new St(Object(r.Zb)(l), window, Object(r.Zb)(r.m)),
          })),
          t
        );
      })();
      class St {
        constructor(t, e, n) {
          (this.document = t), (this.window = e), (this.errorHandler = n), (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0];
        }
        scrollToPosition(t) {
          this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          if (this.supportScrollRestoration()) {
            t =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(t)
                : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            try {
              const e = this.document.querySelector('#' + t);
              if (e) return void this.scrollToElement(e);
              const n = this.document.querySelector(`[name='${t}']`);
              if (n) return void this.scrollToElement(n);
            } catch (e) {
              this.errorHandler.handleError(e);
            }
          }
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const e = t.getBoundingClientRect(),
            n = e.left + this.window.pageXOffset,
            r = e.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (t) {
            return !1;
          }
        }
      }
    },
    quSY: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var r = n('DH7j'),
        s = n('XoHu'),
        i = n('n6bG');
      const o = (() => {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? `${t.length} errors occurred during unsubscription:\n${t
                  .map((t, e) => `${e + 1}) ${t.toString()}`)
                  .join('\n  ')}`
              : ''),
            (this.name = 'UnsubscriptionError'),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      let a = (() => {
        class t {
          constructor(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && (this._unsubscribe = t);
          }
          unsubscribe() {
            let e;
            if (this.closed) return;
            let { _parentOrParents: n, _unsubscribe: a, _subscriptions: c } = this;
            if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), n instanceof t))
              n.remove(this);
            else if (null !== n) for (let t = 0; t < n.length; ++t) n[t].remove(this);
            if (Object(i.a)(a))
              try {
                a.call(this);
              } catch (u) {
                e = u instanceof o ? l(u.errors) : [u];
              }
            if (Object(r.a)(c)) {
              let t = -1,
                n = c.length;
              for (; ++t < n; ) {
                const n = c[t];
                if (Object(s.a)(n))
                  try {
                    n.unsubscribe();
                  } catch (u) {
                    (e = e || []), u instanceof o ? (e = e.concat(l(u.errors))) : e.push(u);
                  }
              }
            }
            if (e) throw new o(e);
          }
          add(e) {
            let n = e;
            if (!e) return t.EMPTY;
            switch (typeof e) {
              case 'function':
                n = new t(e);
              case 'object':
                if (n === this || n.closed || 'function' != typeof n.unsubscribe) return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof t)) {
                  const e = n;
                  (n = new t()), (n._subscriptions = [e]);
                }
                break;
              default:
                throw new Error('unrecognized teardown ' + e + ' added to Subscription.');
            }
            let { _parentOrParents: r } = n;
            if (null === r) n._parentOrParents = this;
            else if (r instanceof t) {
              if (r === this) return n;
              n._parentOrParents = [r, this];
            } else {
              if (-1 !== r.indexOf(this)) return n;
              r.push(this);
            }
            const s = this._subscriptions;
            return null === s ? (this._subscriptions = [n]) : s.push(n), n;
          }
          remove(t) {
            const e = this._subscriptions;
            if (e) {
              const n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }
          }
        }
        var e;
        return (t.EMPTY = (((e = new t()).closed = !0), e)), t;
      })();
      function l(t) {
        return t.reduce((t, e) => t.concat(e instanceof o ? e.errors : e), []);
      }
    },
    'rB/T': function (t, e, n) {
      'use strict';
      function r(t) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
      }
      Object.defineProperty(e, '__esModule', { value: !0 }), r(n('LbVS')), r(n('vauT')), r(n('PsNa'));
    },
    vauT: function (t, e, n) {
      'use strict';
      function r() {
        var t = document.querySelectorAll('input, textarea, select');
        return Array.prototype.slice.call(t).map(function (t) {
          var e = t.tagName.toLowerCase(),
            n = t.type,
            r = t.id && 'string' == typeof t.id ? t.id : null,
            s = t.name && 'string' == typeof t.name ? t.name : null,
            i = t.value && 'string' == typeof t.value ? t.value : null,
            o = t.childNodes,
            a = Boolean(t.selected),
            l = { tag: e, type: null, id: r, name: s, value: '', checked: !1, options: [] };
          if ('input' === e || 'textarea' === e) {
            if (((l.type = n), 'input' !== e)) return (l.value = i), l;
            switch (n) {
              case 'checkbox':
              case 'radio':
                return (l.checked = a), (l.value = i), l;
              case 'image':
              case 'button':
              case 'submit':
              case 'reset':
              default:
                return l;
            }
          } else if ('select' === e) {
            var c = Array.prototype.slice.call(o).map(function (t, e) {
              return { value: t.value, selected: Boolean(t.selected) };
            });
            return (l.options = c), l;
          }
          return l;
        });
      }
      function s(t) {
        var e = document.querySelectorAll('input, textarea');
        t.forEach(function (t, n) {
          if ('input' === t.tag || 'textarea' === t.tag)
            if ('input' !== t.tag || ('checkbox' !== t.type && 'radio' !== t.type))
              ('input' !== t.tagName.toLowerCase() ||
                ('image' !== t.type && 'button' !== t.type && 'submit' !== t.type && 'reset' !== t.type)) &&
                (null === t.id && null === t.name
                  ? !t.value.length ||
                    !e[n] ||
                    e[n].tagName.toLowerCase() !== t.tag ||
                    ('textarea' !== t.tag && e[n].getAttribute('type') !== t.type) ||
                    ('string' == typeof e[n].id && e[n].id.length) ||
                    ('string' == typeof e[n].getAttribute('name') && e[n].getAttribute('name').length) ||
                    ((e[n].value = t.value), e[n].dispatchEvent(new CustomEvent('input', { detail: e[n].value })))
                  : ((r =
                      'input' +
                      (null !== t.id ? '#' + t.id : '') +
                      ('input' === t.tag ? '[type="' + t.type + '"]' : '') +
                      (null !== t.name ? '[name="' + t.name + '"]' : '')),
                    (s = document.body.querySelector(r)) &&
                      t.value.length &&
                      ((s.value = t.value), s.dispatchEvent(new CustomEvent('input', { detail: s.value })))));
            else {
              var r =
                'input' +
                (null !== t.id ? '#' + t.id : '') +
                '[type="' +
                t.type +
                '"]' +
                (null !== t.name ? '[name="' + t.name + '"]' : '') +
                '[value="' +
                t.value +
                '"]';
              (s = document.body.querySelector(r)) &&
                Boolean(t.checked) &&
                ((s.checked = 'checked'), s.dispatchEvent(new CustomEvent('input', { detail: s.checked })));
            }
          else if ('select' === t.tag) {
            var s,
              i = null;
            null === t.id && null === t.name
              ? !e[n] ||
                e[n].tagName.toLowerCase() !== t.tag ||
                ('string' == typeof e[n].id && e[n].id.length) ||
                ('string' == typeof e[n].getAttribute('name') && e[n].getAttribute('name').length) ||
                (i = e[n])
              : ((r =
                  'select' + (null !== t.id ? '#' + t.id : '') + (null !== t.name ? '[name="' + t.name + '"]' : '')),
                (s = document.body.querySelector(r)) && (i = s)),
              i &&
                t.options.forEach(function (t, e) {
                  var n = i.querySelector('option[value="' + t.value + '"]');
                  n ||
                    !i.childNodes[e] ||
                    ('string' == typeof i.childNodes[e].value && i.childNodes[e].value.length) ||
                    (n = i.childNodes[e]),
                    n &&
                      t.selected &&
                      ((n.selected = 'selected'), n.dispatchEvent(new CustomEvent('input', { detail: n.selected })));
                });
          }
        });
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.__getInputValues = r),
        (e.__setInputValues = s),
        (e.__createInputTransfer = function () {
          var t = r();
          return function () {
            return s(t);
          };
        });
    },
    w1tV: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return p;
      });
      var r = n('XNiG'),
        s = n('HDdC'),
        i = n('7o/Q'),
        o = n('quSY');
      function a() {
        return function (t) {
          return t.lift(new l(t));
        };
      }
      class l {
        constructor(t) {
          this.connectable = t;
        }
        call(t, e) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new c(t, n),
            s = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class c extends i.a {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _unsubscribe() {
          const { connectable: t } = this;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          const e = t._refCount;
          if (e <= 0) return void (this.connection = null);
          if (((t._refCount = e - 1), e > 1)) return void (this.connection = null);
          const { connection: n } = this,
            r = t._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      class u extends s.a {
        constructor(t, e) {
          super(), (this.source = t), (this.subjectFactory = e), (this._refCount = 0), (this._isComplete = !1);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (t && !t.isStopped) || (this._subject = this.subjectFactory()), this._subject;
        }
        connect() {
          let t = this._connection;
          return (
            t ||
              ((this._isComplete = !1),
              (t = this._connection = new o.a()),
              t.add(this.source.subscribe(new d(this.getSubject(), this))),
              t.closed && ((this._connection = null), (t = o.a.EMPTY))),
            t
          );
        }
        refCount() {
          return a()(this);
        }
      }
      const h = (() => {
        const t = u.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: t._subscribe },
          _isComplete: { value: t._isComplete, writable: !0 },
          getSubject: { value: t.getSubject },
          connect: { value: t.connect },
          refCount: { value: t.refCount },
        };
      })();
      class d extends r.b {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _error(t) {
          this._unsubscribe(), super._error(t);
        }
        _complete() {
          (this.connectable._isComplete = !0), this._unsubscribe(), super._complete();
        }
        _unsubscribe() {
          const t = this.connectable;
          if (t) {
            this.connectable = null;
            const e = t._connection;
            (t._refCount = 0), (t._subject = null), (t._connection = null), e && e.unsubscribe();
          }
        }
      }
      function f() {
        return new r.a();
      }
      function p() {
        return (t) => {
          return a()(
            ((e = f),
            function (t) {
              let n;
              n =
                'function' == typeof e
                  ? e
                  : function () {
                      return e;
                    };
              const r = Object.create(t, h);
              return (r.source = t), (r.subjectFactory = n), r;
            })(t)
          );
          var e;
        };
      }
    },
    yCtX: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('HDdC'),
        s = n('ngJS'),
        i = n('jZKg');
      function o(t, e) {
        return e ? Object(i.a)(t, e) : new r.a(Object(s.a)(t));
      }
    },
    'z+Ro': function (t, e, n) {
      'use strict';
      function r(t) {
        return t && 'function' == typeof t.schedule;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    zUnb: function (t, e, n) {
      'use strict';
      n.r(e),
        function (t) {
          var e = n('fXoL'),
            r = n('AytR'),
            s = n('0QMH'),
            i = n('ZAI4'),
            o = n('jhN1');
          r.a.production && Object(e.R)();
          const a = () => o.c().bootstrapModule(i.a);
          r.a.hmr ? Object(s.a)(t, a) : a().catch((t) => console.error(t));
        }.call(this, n('3UD+')(t));
    },
    zn8P: function (t, e) {
      function n(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = 'zn8P');
    },
  },
  [[0, 0]],
]);
