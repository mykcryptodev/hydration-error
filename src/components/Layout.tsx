import WalletComponents from "./Wallet";

type Props = {
  children: React.ReactNode;
}
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My App</h1>
        <WalletComponents />
      </header>
      <main>{children}</main>
    </div>
  );
};