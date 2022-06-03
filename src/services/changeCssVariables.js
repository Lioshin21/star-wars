/*
Format CSS-variables:
--theme-default-UniqueName # default variable
--theme-light-UniqueName # for 'light' theme
--theme-dark-UniqueName # for 'dark' theme
--theme-neutral-UniqueName # for 'neutral' theme
*/

export const changeCssVariables = theme => {
  const root = document.querySelector(':root');

  const cssVariables = ['header', 'bgimage'];

  cssVariables.forEach(element => {
    root.style.setProperty(`--theme-default-${element}`, `var(--theme-${theme}-${element})`)
  })

}