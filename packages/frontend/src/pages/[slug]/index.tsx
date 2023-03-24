import DetailPage from '@/components/PageComponent/DetailPage';
export default DetailPage;

export async function getServerSideProps({ resolvedUrl }: any) {
    return {
        props: { resolvedUrl },
    };
}
