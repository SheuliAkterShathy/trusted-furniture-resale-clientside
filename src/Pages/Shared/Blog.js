import React from "react";

const Blog = () => {
  return (
    <div className="pt-8">
      <div className="mb-8 rounded-lg p-8">
        <h2 className="text-xl font-semibold mb-3 text-orange-300">
          Questions No 1:What are the different ways to manage a state in a
          React application?
        </h2>
        <p className="text-xl">
          Answer:1. In React apps, there are at least seven ways to handle the
          state.Some of them given below:-
          <br />
          1.URL:We can use URL to store some data such as The id of the current
          item, being viewed,Filter parameters Pagination offset and
          limit,Sorting data,Keeping such data in the URL allows users to share
          deep links with others.
          <br />
          2.Web Storage:The second option is to store the state in the browser
          via web storage. This is useful when we want to persist state between
          reloads and reboots. Examples include cookies, local storage, and
          IndexedDB.
          <br />
          3.Local State:The third option is to use store state locally. It is
          useful when one component needs the state. Examples include a toggle
          button, a form, etc.
          <br />
          4.Lifted State:The Fourth option is to define the state in the parent
          component to maintain consistency.
          <br />
          5:Derived State:The fifth option is to compute the new state based on
          the available state
        </p>
      </div>
      <div className="mb-8 bg-pink-10 rounded-lg p-8">
        <h2 className="text-xl font-semibold mb-3 text-orange-300">
          Questions No 2:How does prototypical inheritance work?
        </h2>
        <p className="text-xl">
          Answer:2. The Prototypal Inheritance is a feature in javascript used to
          add methods and properties in objects. It is a method by which an
          object can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.That means What is a
          prototype chain or how does inheritance work in JavaScript? When it
          comes to inheritance, JavaScript only has one construct: objects. Each
          object has a private property which holds a link to another object
          called its prototype. That prototype object has a prototype of its
          own, and so on until an object is reached with null as its prototype
        </p>
      </div>

      <div className="mb-8 bg-pink-10 rounded-lg p-8">
        <h2 className="text-xl font-semibold mb-3 text-orange-300">
          Questions No 3: What is a unit test? Why should we write unit tests?
        </h2>
        <p className="text-xl">
          Answer:3. A unit test is a type of software test that focuses on
          components of a software product. The purpose is to ensure that each
          unit of software code works as expected. A unit can be a function,
          method, module, object, or other entity in an application's source
          code.
          <br />
          NodeJS Unit testing is the method of testing small pieces of
          code/components in isolation in your NodeJS application. This helps in
          improving the code quality and helps in finding bugs early on in the
          development life cycle.
        </p>
      </div>
      <div className="mb-8 bg-amber-0 rounded-lg p-8">
        <h2 className="text-xl font-semibold mb-3 text-orange-300">
          Questions No 4: React vs. Angular vs. Vue?
        </h2>
        <p className="text-xl">
           Answer:4. The differences are given below-<br/>
           1.React is Open Source JS Library,Angular is Javascript framework,Vue.js is Progressive js.framework.<br/>
           2.React coding speed is normal,Angular is slow codespeed,whereas Vue.js is fast.<br/>
           3.React is Uni-directional,Angular is Bi-directional,Vue.js is bi-directional.<br/>
           4.React needs to be integrated with many other tools,Angular can be used on standalonebasis,Vue.js requires third party tools.<br/>
           5.React and Vue.js startup time is quick but Angular is longer due to large codebase.
        </p>
      </div>
    </div>
  );
};

export default Blog;
