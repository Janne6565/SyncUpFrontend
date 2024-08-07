import {FC, ComponentProps} from 'react'

interface StyledPageProps {
  
  
}

export declare const Page: FC<ComponentProps<'div'>>

interface ClassName {
  'page' : StyledPageProps
}

type ApplyStyle = <C extends keyof ClassName, P>(className: C, Component: FC<P>) => FC<P & ClassName[C]>

export declare const applyStyle: ApplyStyle
