
function Footer() {
    return (
        <>
            <div>
  <footer className="page-footer">
    <div className="font-13">2018 © <b>AdminCAST</b> - All rights reserved.</div>
    <a className="px-4" href="http://themeforest.net/item/adminca-responsive-bootstrap-4-3-angular-4-admin-dashboard-template/20912589" target="_blank">BUY PREMIUM</a>
    <div className="to-top"><i className="fa fa-angle-double-up" /></div>
  </footer>
  {/* BEGIN THEME CONFIG PANEL*/}
  <div className="theme-config">
    <div className="theme-config-toggle"><i className="fa fa-cog theme-config-show" /><i className="ti-close theme-config-close" /></div>
    <div className="theme-config-box">
      <div className="text-center font-18 m-b-20">SETTINGS</div>
      <div className="font-strong">LAYOUT OPTIONS</div>
      <div className="check-list m-b-20 m-t-10">
        <label className="ui-checkbox ui-checkbox-gray">
          <input id="_fixedNavbar" type="checkbox" defaultChecked />
          <span className="input-span" />Fixed navbar</label>
        <label className="ui-checkbox ui-checkbox-gray">
          <input id="_fixedlayout" type="checkbox" />
          <span className="input-span" />Fixed layout</label>
        <label className="ui-checkbox ui-checkbox-gray">
          <input className="js-sidebar-toggler" type="checkbox" />
          <span className="input-span" />Collapse sidebar</label>
      </div>
      <div className="font-strong">LAYOUT STYLE</div>
      <div className="m-t-10">
        <label className="ui-radio ui-radio-gray m-r-10">
          <input type="radio" name="layout-style" defaultValue defaultChecked />
          <span className="input-span" />Fluid</label>
        <label className="ui-radio ui-radio-gray">
          <input type="radio" name="layout-style" defaultValue={1} />
          <span className="input-span" />Boxed</label>
      </div>
      <div className="m-t-10 m-b-10 font-strong">THEME COLORS</div>
      <div className="d-flex m-b-20">
        <div className="color-skin-box" data-toggle="tooltip" data-original-title="Default">
          <label>
            <input type="radio" name="setting-theme" defaultValue="default" defaultChecked />
            <span className="color-check-icon"><i className="fa fa-check" /></span>
            <div className="color bg-white" />
            <div className="color-small bg-ebony" />
          </label>
        </div>
        <div className="color-skin-box" data-toggle="tooltip" data-original-title="Blue">
          <label>
            <input type="radio" name="setting-theme" defaultValue="blue" />
            <span className="color-check-icon"><i className="fa fa-check" /></span>
            <div className="color bg-blue" />
            <div className="color-small bg-ebony" />
          </label>
        </div>
        <div className="color-skin-box" data-toggle="tooltip" data-original-title="Green">
          <label>
            <input type="radio" name="setting-theme" defaultValue="green" />
            <span className="color-check-icon"><i className="fa fa-check" /></span>
            <div className="color bg-green" />
            <div className="color-small bg-ebony" />
          </label>
        </div>
        <div className="color-skin-box" data-toggle="tooltip" data-original-title="Purple">
          <label>
            <input type="radio" name="setting-theme" defaultValue="purple" />
            <span className="color-check-icon"><i className="fa fa-check" /></span>
            <div className="color bg-purple" />
            <div className="color-small bg-ebony" />
          </label>
        </div>
        <div className="color-skin-box" data-toggle="tooltip" data-original-title="Orange">
          <label>
            <input type="radio" name="setting-theme" defaultValue="orange" />
            <span className="color-check-icon"><i className="fa fa-check" /></span>
            <div className="color bg-orange" />
            <div className="color-small bg-ebony" />
          </label>
        </div>
        <div className="color-skin-box" data-toggle="tooltip" data-original-title="Pink">
          <label>
            <input type="radio" name="setting-theme" defaultValue="pink" />
            <span className="color-check-icon"><i className="fa fa-check" /></span>
            <div className="color bg-pink" />
            <div className="color-small bg-ebony" />
          </label>
        </div>
      </div>
      <div className="d-flex">
        <div className="color-skin-box" data-toggle="tooltip" data-original-title="White">
          <label>
            <input type="radio" name="setting-theme" defaultValue="white" />
            <span className="color-check-icon"><i className="fa fa-check" /></span>
            <div className="color" />
            <div className="color-small bg-silver-100" />
          </label>
        </div>
        <div className="color-skin-box" data-toggle="tooltip" data-original-title="Blue light">
          <label>
            <input type="radio" name="setting-theme" defaultValue="blue-light" />
            <span className="color-check-icon"><i className="fa fa-check" /></span>
            <div className="color bg-blue" />
            <div className="color-small bg-silver-100" />
          </label>
        </div>
        <div className="color-skin-box" data-toggle="tooltip" data-original-title="Green light">
          <label>
            <input type="radio" name="setting-theme" defaultValue="green-light" />
            <span className="color-check-icon"><i className="fa fa-check" /></span>
            <div className="color bg-green" />
            <div className="color-small bg-silver-100" />
          </label>
        </div>
        <div className="color-skin-box" data-toggle="tooltip" data-original-title="Purple light">
          <label>
            <input type="radio" name="setting-theme" defaultValue="purple-light" />
            <span className="color-check-icon"><i className="fa fa-check" /></span>
            <div className="color bg-purple" />
            <div className="color-small bg-silver-100" />
          </label>
        </div>
        <div className="color-skin-box" data-toggle="tooltip" data-original-title="Orange light">
          <label>
            <input type="radio" name="setting-theme" defaultValue="orange-light" />
            <span className="color-check-icon"><i className="fa fa-check" /></span>
            <div className="color bg-orange" />
            <div className="color-small bg-silver-100" />
          </label>
        </div>
        <div className="color-skin-box" data-toggle="tooltip" data-original-title="Pink light">
          <label>
            <input type="radio" name="setting-theme" defaultValue="pink-light" />
            <span className="color-check-icon"><i className="fa fa-check" /></span>
            <div className="color bg-pink" />
            <div className="color-small bg-silver-100" />
          </label>
        </div>
      </div>
    </div>
  </div>
  {/* END THEME CONFIG PANEL*/}
  {/* BEGIN PAGA BACKDROPS*/}
  <div className="sidenav-backdrop backdrop" />
  <div className="preloader-backdrop">
    <div className="page-preloader">Loading</div>
  </div>
</div>

        </>
    )
}
export default Footer;