export type AddProductToWishListProps = {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishList({ onAddToWishList, onRequestClose }: AddProductToWishListProps) {
  return (
    <span>
      Desenha adicionar aos fav?
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )
}