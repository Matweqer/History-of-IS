import { BranchOfHistory } from "../../components/branch-of-history/BranchOfHistory"
import Footer from "../../components/footer"
import Header from "../../components/header"

export const GenesisPage = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <BranchOfHistory />
      <Footer />
    </div>
  )
}
