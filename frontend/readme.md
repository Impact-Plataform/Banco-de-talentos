# Star Wars Characters 

## [Sumary](#sumary) 
* [About this application](#about-this-application)
* [Funcionalities](#funcionalities)
* [SWAPI](#swapi)
* [Figma layout Reference](#figma-layout-reference)
* [Dependencies](#dependencies)
* [How to run locally](#how-to-run-locally)
* [Application architecture](#application-architecture)
* [Application standards](#application-standards)
  * [Conventional Commits](#conventional-commits) 
  * [File names](#file-names)
  * [Block element modifier](#block-element-modifier)
* [Views](#views)


# [About This Application](#sumary)

This appliaction consists in show all characters from Star Wars and some informations about then.

You can see a lot of characers informations at all characters page and you can get in character page and see just a chosen one informations. 

All informations have been taken from: [SWAPI](#swapi). 

This application uses react with typescript, css for styles and context API to state management. 



# [Funcionalities](#sumary)
  * Filter Characters by name
  * Filter By specie, movie or gender
  * See more informations about the character in a modal and at his own informations page.


# [SWAPI](#sumary)
  This is a API from Star wars with a lot informations about people, species, films, vehicles, starships and planets.
  You can see more at [SWAPI documentation](https://swapi.dev/documentation)
  


# [Figma layout Reference](#sumary)
  The layout reference of this application has been made by me.
  You can access it just clicking [here](https://www.figma.com/file/CDVndimwKlsLynWiBcZyGF/front-end-impact-test?node-id=7%3A14&t=pID3se3DLVp4mDeS-1)
  

# [Dependencies](#sumary)

```JSON
 "dependencies": {
    "axios": "^1.2.2",
    "framer-motion": "^9.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.7.1",
    "react-modal": "^3.16.1",
    "react-router-dom": "^6.7.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.24",
    "@types/react-dom": "^18.0.8",
    "@types/react-modal": "^3.13.1",
    "@vitejs/plugin-react": "^2.2.0",
    "typescript": "^4.6.4",
    "vite": "^3.2.3",
    "vitest": "^0.27.1"
    }
 ```
 
 * [axios](https://axios-http.com/ptbr/docs/intro) - Api Requests
 * [framer motion](https://www.framer.com/motion/) - animate routes
 * [react](https://reactjs.org/) - create frontend interfaces
 * [react icons](https://react-icons.github.io/react-icons/) - easily get icons 
 * [react modal](https://reactcommunity.org/react-modal/) - make modals
 * [react-router-dom](https://reactrouter.com/en/main) - routes of aplication
 

# [How to run it locally](#sumary)
1. You need have nodejs installed in your machine.
2. Fork or clone this repository.
3. You need to run 'npm run dev' in terminal.  

# [Application standards](#sumary)
  
  ## Conventional Commits
    This application uses conventional commits to standardize commit messages. You can know more [here](https://www.conventionalcommits.org/en/v1.0.0/)
  ## File names

    * If you open the project, you can see that i difficultly use 'index' name to my files.
    * Components have this structure: component
                                          |-Component.tsx
                                          |-stylesComponent.css
    * I choose this approach because it is better to code, because you don't confuse diffent files named 'index'.
  ## Block element modifier 
    * It is always good organize css classes names. So i choose using BEM. It consists in name classes using the rule 'block__element--modifier'.
    * for classes i use convention naming [kebab-case](https://www.theserverside.com/definition/Kebab-case). ex: character-info__container
  
# [Views](#sumary)
