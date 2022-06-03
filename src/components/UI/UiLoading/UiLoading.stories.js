import UiLoading from './UiLoading'

export default {
    title: 'Ui-Kit/UiLoading',
    component: UiLoading,
}

const Template = (args) => <UiLoading {...args} />

const props = {
    isShadow: true,
    theme: 'black',
    classes: '',
}

export const Black = Template.bind({})

Black.args = {
    ...props,
    theme: 'black',
}

export const White = Template.bind({})

White.args = {
    ...props,
    theme: 'white',
}

export const Blue = Template.bind({})

Blue.args = {
    ...props,
    theme: 'blue'
}
