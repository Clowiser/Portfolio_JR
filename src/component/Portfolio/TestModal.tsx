interface ITestModal {
    closeModal: () => void;
}

const TestModal = (props: ITestModal) => {
    const {closeModal} = props;

    return (
        <>
            <h1>Hello World</h1>
            <button onClick={(): void => {
                closeModal()
            }}>Close
            </button>
        </>

    )

}
export default TestModal;