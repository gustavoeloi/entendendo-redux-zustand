# Gerenciando Estados com Redux e Zustand

Recentemente comecei a avançar meus estudos em React por conta de projetos que estou desenvolvendo.

Me deparei durante um curso com Redux e comecei a entender o gerenciamento de estados globais em uma aplicação.

Redux é uma ferramenta de gerenciamento de estado, sendo estado nada mais que a informação que é armazenada com o propósito de exibir alguma informação na tela/manipular alguam ação.

Tipos de Estado no React

    Local State (useState, ContextAPI)
    Global State (Redux)
    Server State (React Query, SWR, Redux Toolkit)

Existem outras alternativas para gerenciamento de estados como o ContextAPI, Zustand, Jotai e etc.

    Podemos usar o ContextAPI com useReducer
    Zustand é comparável ao Redux
    O Jotai, do mesmo criador do Redux, tem o objetivo de substituir o ContextAPI.

O Redux usa a Arquitetura (Flux)

Aonde temos o View, Actions, Dispatcher, Stores, Reducers e State.
