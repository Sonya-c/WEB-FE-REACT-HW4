
export default function (plop) {
    plop.setGenerator("Component", {
        description: 'Generate a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{properCase name}}/{{properCase name}}.tsx',
                templateFile: 'templates/component/component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{properCase name}}/{{properCase name}}.stories.tsx',
                templateFile: 'templates/component/component.stories.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{properCase name}}/index.ts',
                templateFile: 'templates/component/index.ts.hbs',
            },
    ]
    })
}