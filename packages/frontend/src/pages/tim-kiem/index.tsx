import SearchComponent from '@components/PageComponent/SearchComponent';
export default SearchComponent;

export async function getServerSideProps({ resolvedUrl }: any) {
    return {
        props: { resolvedUrl },
    };
}
