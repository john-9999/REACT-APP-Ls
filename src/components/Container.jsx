export const Container = ({children})=> {
  return (
    <div className="container p-4 bg-dark">
        <div className="col-md-4 offset-md-4">
            {children}
        </div>
    </div>
  )
}
