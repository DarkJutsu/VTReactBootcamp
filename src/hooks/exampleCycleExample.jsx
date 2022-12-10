import { Component } from 'react'

class LifeCycle extends Component {
  constructor(props){
    super(props)
    console.log('Al instanciar el componente')
  }

  componentWillMount(){
    console.log('antes de instanciar el componente')
  }
  componentDidMount(){
    console.log('antes de mostrar el componente')
  }
  componentWillReceiveProps(){
    console.log('Si el componente recive nuevas props')
  }
  shouldComponentUpdate(nextProps, nextState){
    /**
     * return true/false
     * determina si el componente debe actualizase o no
     */
  }
  componentWillUpdate(){
    console.log('antes de actualizar el componente')
  }
  componentDidUpdate(){
    console.log('Despues de actualizar el componente')
  }
  componentWillUnmount(){
    console.log('Al desaparecer el componente')
  }


}