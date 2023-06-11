$(document).ready(function () {
  function handler(e) {
    e.preventDefault();
    let _this = $(this);
    let taxonomy = _this.data('tax');
    let term = _this.data('term');

    $.ajax({
      url: `/entries-by-term/${taxonomy}/${term}`,
      type: 'GET',
      success: function (response) {
        console.log(response);
        const entries = response;

        var html = '';

        entries.forEach(function (entry) {
          if( _this.hasClass('.btn') ) {
            html += `<div class="section__col d-flex flex-column">`;
          } else {
            html += `<div class="layout__objects-col col d-flex flex-column">`;
          }
          html += `
              <div class="card card_object flex-grow-1">

                <div class="card__img"> <img src="${entry.featured_image.url}" alt=""></div>
                <div class="card__body flex-grow-1">
                  <h3>${entry.title}</h3>
                  <div class="card__attributes">

                    <div class="block block_attribute">
                      <div class="block__name">
                        <svg class="svg-icon">
                          <use xlink:href="/img/svgSprite.svg#icon-world"></use>
                        </svg>
                        <span>Тип Недвижимости:</span>
                      </div>
                      <div class="block__value">
                        ${entry.properties[0]}
                      </div>
                    </div>

                    <div class="block block_attribute">
                      <div class="block__name">
                        <svg class="svg-icon">
                          <use xlink:href="/img/svgSprite.svg#icon-pin"></use>
                        </svg>
                        <span>Город:</span>
                      </div>
                      <div class="block__value">
                        ${entry.cities[0]}
                      </div>
                    </div>

                    <div class="block block_attribute">
                      <div class="block__name">
                        <svg class="svg-icon">
                          <use xlink:href="/img/svgSprite.svg#icon-pin"></use>
                        </svg>
                        <span>Район:</span>
                      </div>
                      <div class="block__value">
                        ${entry.districts[0]}
                      </div>
                    </div>

                    <div class="block block_attribute">
                      <div class="block__name">
                        <svg class="svg-icon">
                          <use xlink:href="/img/svgSprite.svg#icon-bed"></use>
                        </svg>
                        <span>Комнат:</span>
                      </div>
                      <div class="block__value">${entry.rooms[0]}</div>
                    </div>

                  </div>
                  <div class="mt-auto">
                    <div class="card__price mb-3">${entry.price ? entry.price : 'Цена не указана'} €</div>
                    <div class="card__body-foot"> <a class="btn btn_secondary" href="${entry.url}">Подробнее</a></div>
                  </div>
                </div>
              </div>
            </div>`;

          if ($('.section_new-objects .section__row').length) {
            $('.section_new-objects .section__row').html(html);
          }
          if ($('.layout__objects .layout__objects-row').length) {
            $('.layout__objects .layout__objects-row').html(html);
          }

          if ($('.section_new-objects .section__links .btn').length) {
            console.log('test');
            $('.section_new-objects .section__links .btn').removeClass('active');
          }

          if ($('.sidebar_primary .form-radio__link').length) {
            $('.sidebar_primary .form-radio__link').removeClass('active');
          }

          _this.addClass('active');

        })
      },
      error: function (xhr, status, error) {
      }
    });
  }



  $('.section_new-objects .section__links .btn').on('click', handler);
  $('.sidebar_primary .form-radio__link').on('click', handler);
});
