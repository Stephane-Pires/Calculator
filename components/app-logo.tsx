import Link from 'next/link'

import { Avatar } from '@chakra-ui/react'

function AppLogo() {
    return (
        <Link href="https://www.linkedin.com/in/stephane-pires/" passHref>
            <Avatar
                boxSize="4em"
                bg="gray.200"
                cursor="pointer"
                src="/images/divers/avatar.JPG"
            />
        </Link>
    )
}

export default AppLogo
