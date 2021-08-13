const Index = ({ host }) => {
  return (
    <>
      <h1>Hello!</h1>
      <p>Domain: {host}</p>
    </>
  )
}
export default Index

export async function getServerSideProps(context) {
  const { req } = context
  return {
    props: {
      host: req.headers.host
    }
  }
}
