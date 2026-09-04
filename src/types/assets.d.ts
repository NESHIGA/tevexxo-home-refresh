declare module "*.asset.json" {
  const value: {
    url: string;
    original_filename: string;
    content_type: string;
  };
  export default value;
}
