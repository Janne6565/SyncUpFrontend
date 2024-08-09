import {FC, ComponentProps} from 'react'

interface StyledMapPageComponentProps {
  
  
}

export declare const MapPageComponent: FC<ComponentProps<'div'>>

interface ClassName {
  'mapPage' : StyledMapPageComponentProps
}

type ApplyStyle = <C extends keyof ClassName, P>(className: C, Component: FC<P>) => FC<P & ClassName[C]>

export declare const applyStyle: ApplyStyle
