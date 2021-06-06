import Link from "next/link";
import { VFC } from "react";

const Header: VFC = () => {
  return (
    <>
      <header>
        <div style={{ width: 150 }}>
          <Link href="/">
            <a>
              <img src="/images/akispacecrea-logo.svg" alt="ロゴ" />
            </a>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
