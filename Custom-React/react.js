// function customRender(reactElement,container){
//     const domElement=document.createElement.reactElement.type
//     domElement.innerHTML=reactElement.Children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)


//     container.appendChild(domElement)
// }


function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerText = reactElement.props.children 
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
}

const reactElement={
    type:'a',
    props : {
        href:"https://google.com",
        target:"_blank"
    },
    children: 'Click me to visit google'
}


const mainContainer=document.getElementById('root')

customRender(reactElement,mainContainer)
