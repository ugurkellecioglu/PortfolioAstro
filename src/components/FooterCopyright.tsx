type IFooterCopyrightProps = {
  site_name: string;
};

const FooterCopyright = (props: IFooterCopyrightProps) => (
  <div className="border-t border-gray-600 pt-5">
    <div className="text-sm text-slate-600">
      © Copyright {new Date().getFullYear()} by {props.site_name}.
    </div>
  </div>
);

export { FooterCopyright };
