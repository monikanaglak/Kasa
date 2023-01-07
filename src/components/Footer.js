export function Footer(){
    return(
        <div>
            <div className="container_footer">
                <div className="logo_footer">
                    <K></K>
                    <LogoWhite></LogoWhite>
                    <S></S>
                    <A></A>
                </div>
                <All/>
            </div>
        </div>
    )
}
const LogoWhite = () =><img src="/images/house.png" className="logowhite" alt="pho"></img>
const K = () =><img src="/images/k.svg" className="k" alt="pho"></img>
const S = () =><img src="/images/s.svg" className="k" alt="pho"></img>
const A = () =><img src="/images/a.svg" className="k"alt="pho"></img>
const All = () =><img src="/images/foot.png" className="all_rigths" alt="pho"></img>