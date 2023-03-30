import { PaginationContainer, LeftButton, Text, PreviousIcon, NextIcon, RightButton } from "./styles";

export const Pagination = ({ currentPage, setCurrentPage }) => {
  const totalPages = 9;

  const onLeftClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onRightClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <PaginationContainer>
        <LeftButton onClick={onLeftClick}>
          <PreviousIcon />
        </LeftButton>
        <Text>
          {currentPage} de {totalPages}
        </Text>
        <RightButton onClick={onRightClick}>
          <NextIcon />
        </RightButton>
      </PaginationContainer>
    </>
  );
};
