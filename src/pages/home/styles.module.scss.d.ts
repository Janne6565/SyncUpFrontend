import {FC, ComponentProps} from 'react'

interface StyledHomeProps {
  
  
}

export declare const Home: FC<ComponentProps<'div'>>

interface ClassName {
  'homePage' : StyledHomeProps
}

type ApplyStyle = <C extends keyof ClassName, P>(className: C, Component: FC<P>) => FC<P & ClassName[C]>

export declare const applyStyle: ApplyStyle
