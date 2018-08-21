/**
 * A notification class for pemedia plugins
 * 
 * @class PemediaNotification
 */
class PemediaNotification {

  /**
   * Creates an instance of PemediaNotification.
   * 
   * @memberOf PemediaNotification
   */
  constructor() {
    let $body = document.body,
      id      = 'pemedia-admin-notifications';

    if (!$body.querySelector(`#${id}`)) {
      this.$wrapper = document.createElement('div');

      this.$wrapper.id = id;

      $body.appendChild(this.$wrapper);
    } else {
      this.$wrapper = $body.querySelector(`#${id}`);
    }
  }

  /**
   * Show a notification
   * 
   * @param {string} [message=''] 
   * @param {string} [mode='success'] 
   * @param {number} [duration=5000] 
   * 
   * @memberOf PemediaNotification
   */
  show(message = '', mode = 'success', duration = 5000) {
    let $notification = document.createElement('div'),
      $wrapper        = this.$wrapper;

    $notification.classList.add('notification');
    $notification.classList.add(mode);

    $notification.innerHTML = message;

    $wrapper.appendChild($notification);

    setTimeout(() => {
      $wrapper.removeChild($notification);
    }, duration);
  }

  /**
   * Show a success notification. Shorthand for `show(message, 'success', duration)`
   * 
   * @param {string} [message=''] 
   * @param {number} [duration=5000] 
   * 
   * @memberOf PemediaNotification
   */
  success(message = '', duration = 5000) {
    this.show(message, 'success', duration);
  }

  /**
   * Show an error notification. Shorthand for `show(message, 'error', duration)`
   * 
   * @param {string} [message=''] 
   * @param {number} [duration=5000] 
   * 
   * @memberOf PemediaNotification
   */
  error(message = '', duration = 5000) {
    this.show(message, 'error', duration);
  }
}

export default PemediaNotification;
