# New Dotcom Components

Hello all & welcome to the New Dotcom Components repo.  The purpose of this repo is to be a collection point for any/all components that are created for the new dotcom redesign projects.

# What's a component?

A component is a collective piece of HTML markup & it's corresponding CSS/SCSS that compiles to create a functional page element that can be used on the dotcom with the addition of any required content.

# How do I know if the component is new?

A new component is one that has not been developed but has been created, reviewed, & approved within the designer/IA [invision application workflow](https://unum.invisionapp.com/d/main#/projects/prototypes/10920806/workflow).  Please contact a designer for access to the invision application & current project.

# Are there components already built?

Yes.  Our repo uses the [Willow framework](https://github.com/unumux/willow) and the Colonial Life [default theme](https://github.com/unumux/willow#available-themes) as a base.  Within Willow, there are several [components](https://github.com/unumux/willow/tree/master/components) that have been built & can be used with any of the new components.

# What if there is a Willow component that is close, but not exact to what is in invision?

Ask yourself the following:

* **Is it only a style or design difference that doesn't require any HTML changes or additions?**

If so, then the Willow component should work & you will need to make the style/design adjustments in your CSS overrides.

If not, then a new component is required.

# How do I start creating a new component?

 1. Clone this repo.
 2. In the newly cloned folder, open the `/components` folder and make a copy of the `_boilerplate` folder.
 3. Rename the `_boilerplate` folder copy to the name of your component.
 4. In the root folder, run `oak start` and when the page loads in your browser, navigate to `http://localhost:3000/components/` followed by your new component folder name.
 5.  Open your new component folder in the editor of your choice, and happy coding.