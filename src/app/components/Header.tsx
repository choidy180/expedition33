import Image from "next/image"
import styled from "styled-components"
import frame from '@/../images/header/Header_Frame_min.avif'
import frameBackground from '@/../images/header/Header_image.avif'
import logo from '@/../images/header/EX33_Logo_HighRez.avif'
import button from '@/../images/header/ButtonBG.avif'

const Container = styled.div`
    width: 100%;
    min-height: 800px;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    
    margin-top: 200px;

    .image {
        position: absolute;
        object-fit: cover;
    }
    .frame {
        position: absolute;
        object-fit: cover;
    }
    .logo {
        position: absolute;
        margin-top: 20px;
        object-fit: cover;
    }
    .button {
        width: 505px;
        margin-top: 740px;
        z-index: 10;
    }

    .title_ment {
        width: 100%;
        font-family: 'BookkMyungjo-Bd';
        text-align: center;
        position: absolute;
        margin-top: -46px;
        transform: translateY(-50%);
        z-index: 10;
        color: #ECCFA3;
        text-transform: uppercase;
    }
`

const Header = () => {
    return (
        <Container>
            <Image
                src={frameBackground}
                width={1600}
                height={800}
                alt="..."
                className="image"
            />
            <Image
                src={frame}
                width={1600}
                height={800}
                alt="..."
                className="frame"
            />
            <Image
                src={logo}
                width={451}
                height={247}
                alt="..."
                className="logo"
            />

            <div data-aos="fade-up" className="button">
                <Image
                    src={button}
                    width={505}
                    height={84}
                    alt="..."
                />
                <h1 className="title_ment">Story</h1>
            </div>
        </Container>
    )
}

export default Header;