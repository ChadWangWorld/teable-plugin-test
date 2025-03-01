import dynamic from 'next/dynamic';

// 使用动态导入并禁用 SSR
const PrivateChatBroadcast = dynamic(
  () => import('./reach-business-workbench'),
  { ssr: false }
);

export default function BulkMessagingAssistant() {
  return <PrivateChatBroadcast />;
}
