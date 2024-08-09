import {FC, ComponentProps} from 'react'

interface StyledSearchPageComponentProps {
  
  
}

export declare const SearchPageComponent: FC<ComponentProps<'div'>>

interface ClassName {
  'searchPageComponent' : StyledSearchPageComponentProps
}

type ApplyStyle = <C extends keyof ClassName, P>(className: C, Component: FC<P>) => FC<P & ClassName[C]>

export declare const applyStyle: ApplyStyle
