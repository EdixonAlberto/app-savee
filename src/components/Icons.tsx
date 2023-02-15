interface IconsProps {
  color?: string
  size?: number
}

const COLOR_DEFAULT = '#000'
const SIZE_DEFAULT = 25

function Home({ color = COLOR_DEFAULT, size = SIZE_DEFAULT }: IconsProps) {
  return (
    <svg
      className="sa-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      fill={color}
      width={`${size}px`}
      height={`${size}px`}
    >
      <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
    </svg>
  )
}

function Calendar({ color = COLOR_DEFAULT, size = SIZE_DEFAULT }: IconsProps) {
  return (
    <svg
      className="sa-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill={color}
      width={`${size}px`}
      height={`${size}px`}
    >
      <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H368c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
    </svg>

    /*
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
    */
  )
}

function Cart({ color = COLOR_DEFAULT, size = SIZE_DEFAULT }: IconsProps) {
  return (
    <svg
      className="sa-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      fill={color}
      width={`${size}px`}
      height={`${size}px`}
    >
      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </svg>
  )
}

function User({ color = COLOR_DEFAULT, size = SIZE_DEFAULT }: IconsProps) {
  return (
    <svg
      className="sa-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill={color}
      width={`${size}px`}
      height={`${size}px`}
    >
      <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
    </svg>
  )
}

export const Icon = {
  Home,
  Calendar,
  Cart,
  User
}
