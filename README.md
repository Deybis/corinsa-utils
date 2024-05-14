# Corinsa Utils

## Descripción

    Corinsa Utils es una biblioteca de utilidades diseñada para facilitar 
    el desarrollo de aplicaciones frontend en proyectos de Grupo Corinsa. 
    Este paquete contiene una serie de funciones, componentes y estilos predefinidos 
    que pueden ser utilizados en diversos proyectos para mejorar la productividad 
    y la consistencia del desarrollo.

## Características

    - Funciones útiles para tareas comunes.
    - Componentes reutilizables y personalizables.
    - Estilos predefinidos y temas de diseño.
    - Documentación detallada y ejemplos de uso.

## Instalación

    npm install corinsa-utils

## Importar

    import { createUrl } from 'corinsa-utils'

## Utilizar una función

    const filters = {
        month:1,
        year:2024
    }

    const query = createUrl(filters)
    const url = `https://corinsademo/api/clientes${query}` 
    console.log(url); // "https://corinsademo/api/clientes?month=1&year=2024"
