# Singleton Service
Creating a singleton service in your app, in order to share state/data over different components without using a Vuex Store.

This is more like the Angular way of doing services. But now inside Vue.

## Status: Work In Progress (WIP)
Credits: paragraph `Singleton Pattern` in this post (although this is written for TypeScript). It is here implemented in JavaScript.
https://www.javascripttuts.com/using-vue-as-an-angular-alternative-for-ionic-the-services/

## Steps to reproduce (high level overview)
1. create a new app, add a component (`ComponentA`)
1. Add a counter and logic to the HelloWorld Component
	1. Counter should be of type number on the data object, `counter: 0`
1. Create a service, `CounterService`, following the Singleton Pattern. It should return a -shared- instance.
	1. It also should contain logic to add/subtract/reset the counter
	1. It countains a method `getCounter` that returns the current state of counter.
1. Add logic to `HelloWorld` Component to update the counter.
	1. Import the CounterService, in the create.
	1. In the `data` object, return an instance of the counter
	1. A call to `this.counterService.getCounter()` is necessary to update the counter in the view after every modification.
1. Also import it in other component. It works after manually getting the latest value of counter every time.
1. Update counter to object, instead of number. Objects are Passed by Reference, instead of Passed by Value.
	1. It now updates both on `HelloWorld` and `ComponentA`.
1. Move logic to mixin. Import mixin to both `HelloWorld` and `Component`. 

We now have a fully functional singleton service holding some data, and updating in every component that asks for it, without the need to use Observables or RxJS.

[TODO: update documentation]
