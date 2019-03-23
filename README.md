My Recipes Mobile
======

> Ionic App; Recipe App with shopping lists and cooking tips etc

## Overview
Compatible with [My Recipes Web](https://github.com/highjump0615/MyRecipes_Web)

### Main Features
- Manage recipes  
Add, Update, Remove, ...  
- Manage ingredients for recipes  
  - Auto adding to all ingredient list  
  - Select ingredients from list when adding a new recipe
- Menu management  
...  
 
## Techniques 
Ionic Framework v3.9.2  
AngularJS v5.2.11  
### 1. UI Implementation  
#### Implement UI pages based on Flexbox layout
- Solutions for Image Stretching In Flex Row  
[https://codepen.io/dudleystorey/pen/pejpYW](https://codepen.io/dudleystorey/pen/pejpYW)  
Place the image inside another container, and make that the flex-child  
  - Recipes list in Menu detail page  

#### Custom components
- Checkbox ``<check-box>``  
Checkboxes for showing validation status in Signup pages
- Star rate ``<star-rate>``  
Showing or selecting stars for rate

#### Accordian without animation  
Implemented accordion with conditional style  
- Signup Allergies Page  
- Preference Setting Page  
```html
<div [class.collapsed]="condition">
```
```css
.collapsed {
	max-height: 0 !important;
}
```
  
### 2. Function Implementation
- Google Firebase for backend

#### Db Structure
```
|
+-- allergies
|  |
|  +-- {index}
|
+-- cuisines
|  |
|  +-- {index}
|
+-- dislikes
|  |
|  +-- {index}
|    
+-- userAllergies
|  |
|  +-- {userId}
|     |
|     +-- {allergyIndex}: true
|
+-- userDiets
|  |
|  +-- {userId}
|     |
|     +-- {cuisineIndex}: true
|
+-- userDislikes
|  |
|  +-- {userId}
|     |
|     +-- {dislikeIndex}: true
|
+-- userFavouriteCuisines
|  |
|  +-- {userId}
|     |
|     +-- {cuisineIndex}: true
|
+-- users
   |
   +-- {id}
```

### 3. Code tricks  
#### Fit ``<ion-textarea>`` to ``<div>``  
- Write Review Page
```html  
<div class="input-item">
  <ion-textarea
    name="content"
    placeholder="Write your review here"
    [style.height] = "initDone ? '100%' : 'auto'"
    [(ngModel)]="content"></ion-textarea>
</div>
```  
```css
ion-textarea {
  padding: 0 0 20px 0;

  textarea {
    width: 100%;
    height: 100%;
  }
}
```

### 4. Third-Party Libraries
#### Cordova plugins
- [Google Plus](https://github.com/EddyVerbruggen/cordova-plugin-googleplus) v6.0.0  
Google Signin
- [Facebook4](https://github.com/jeduan/cordova-plugin-facebook4#readme) v4.0.0  
Facebook Signin
- [Email Composer](https://github.com/katzer/cordova-plugin-email-composer) v0.8.15  
Report a problem in Settings


## Need to Improve
##### Lazy Loading of list and grids  
- Effective use of ``virtualScroll``

##### Animation of accordian  
The height of each item is not fixed and different  

##### Complete the features
