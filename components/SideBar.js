import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {IoGridOutline} from 'react-icons/io5'
import {VscArrowUp} from 'react-icons/vsc'
import {HiPlus} from 'react-icons/hi'
import {RiUser3Line} from 'react-icons/ri'

const SideBar = ()=> {
    const route = useRouter()
    const [active, setActive] = useState('/')
    useEffect(()=>{
        setActive(route.pathname)
    }, [route.pathname])
    const menu = [
        {link: '/dashboard', name: 'Dashboard', icon: IoGridOutline},
        {link: '/transfer', name: 'Transfer', icon: VscArrowUp},
        {link: '/topup', name: 'Topup', icon: HiPlus},
        {link: '/profile', name: 'Profile', icon: RiUser3Line},
    ]
    return(
        <>
        <style jsx>
        {`
            .menu {
                background-color: white;
                border-radius: 25px;
                list-style-type: none;
            }
            .menu li {
                margin: 10px 0;
            }
            .menu li a{
                color: rgba(58, 61, 66, 0.8);
                padding-left: 10px;
                text-decoration: none;
                border-left: 3px solid transparent;
            }
            .menu li a.active{
                color: #533E85;
                border-color: #533E85;
            }
        `}
        </style>
        <ul className="menu">
        {menu.map(item => {
            const Icon = item.icon
            return (
                <li key={item.name}>
                    <Link href={item.link}>
                        <a className={active===item.link?'active':''}>
                            <Icon className='me-3' />
                            {item.name}
                        </a>
                    </Link>
                </li>
            )
        })}
        </ul>
        </>
    )
}

export default SideBar