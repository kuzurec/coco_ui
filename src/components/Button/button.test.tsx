import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

describe('test Button component', () => {
  it('should render the correct default botton', () => {
    const { getByText } = render(<Button>Nice</Button>)
    const element = getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
  })
  it('should render the correct component based on different props', () => {
    const wrapper1 = render(<Button btnType='primary' btnSize='lg'>Primary</Button>)
    const element1 = wrapper1.getByText('Primary')
    expect(element1).toHaveClass('btn btn-primary btn-lg')
    
    const wrapper2 = render(<Button btnType='danger' btnSize='sm'>Danger</Button>)
    const element2 = wrapper2.getByText('Danger')
    expect(element2).toHaveClass('btn btn-danger btn-sm')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const { getByText } = render(<Button btnType='link' href='www.baidu.cn'>链接</Button>)
    const element = getByText('链接')
    expect(element.tagName).toEqual('A')
  })
  it('should render disabled button when disabled set to true', () => {
    const { getByText } = render(<Button disabled>disabled</Button>)
    const element = getByText('disabled')
    expect(element).toHaveAttribute('disabled')
  })
})