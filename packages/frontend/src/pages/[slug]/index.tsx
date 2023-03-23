import DetailComponent from '@components/PageComponent/DetailComponent';
export default DetailComponent;

export async function getServerSideProps({ resolvedUrl }: any) {
    return {
        props: { resolvedUrl },
    };
}
