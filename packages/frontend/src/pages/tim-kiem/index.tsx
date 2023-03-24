import SearchPage from '@components/PageComponent/SearchPage';
export default SearchPage;

export async function getServerSideProps({ resolvedUrl }: any) {
    return {
        props: { resolvedUrl },
    };
}
