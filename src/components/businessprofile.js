import React from "react";

function businessprofile() {
  return (
    <>
      <div className="content" id="maincontent">
        <main className="profile profile--home">
          <div className="profile-wrap">
            <div className="profile-sticky-header--wrapper">
              <div className="profile-sticky-header--top-row-wrapper">
                <div className="profile-sticky-header--info-wrapper">
                  <div className="profile-sticky-header-title">
                    Massachusetts Institute of Technology
                  </div>
                  <ul className="postcard__attrs">
                    <li className="postcard__attr">4 Year</li>
                    <li className="postcard__attr">CAMBRIDGE, MA</li>
                  </ul>
                </div>
                <div className="profile-sticky-header--ctas-wrapper">
                  <button
                    className="button button--green button--small button--outline button--compact button--has-icon button--icon-only button--icon-heart"
                    aria-label="Add to List, add Massachusetts Institute of Technology to your List"
                    tabindex="0"
                  >
                    <span className="add-to-list__text button__text">
                      Add to List
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="profile-header__blocks" id="profile-header">
              <div className="profile-blocks">
                <header className="profile-postcard-header">
                  <div className="postcard postcard--responsive" id="header">
                    <div className="postcard__content-container">
                      <div className="postcard__image-container">
                        <figure className="postcard__figure">
                          <div className="postcard__figure__image">
                            {/* <style type="text/css">
                                  .postcard__figure__image {
                                      background-image: url(https://d13b2ieg84qqce.cloudfront.net/3dbd39d4c1401beb7773c38566cc4d728d7db4ed.jpg), url(data:image/gif;base64,R0lGODlhbgAjAOYAAGzCuJXSxpLEoa3dwIvRyGO0mpHDm4m9k5vMs4O6k3PKxGq8rZTKs4O8m3vLw2GylWu6o6HWxYPNwozEq4zBo3HFu3vDspPNupLGqoTRyHjArovLvK3awom+m3u6m47Am4PBq4PFspLTyHO7o3u9oqrawnLCs6rZvH25lJzQvIPJvJnJpWq2mnS5nGW4pIzAlIK+oozQxXK+q2q0lJrUxp3VxnTNyXnOyJ7NrYrOwn3PyJrOuKXXxajWu6XVtaHRsXO2lKbVuKnYxInGs5rJqY3ItWa6qXrGuanYuqTStmu/snzIvafVvqXVwJnKrZbHop/Os6LQtW7GwIi8j4XApoDPyKHSvJ3SwJvMqKDQuWO3n6HUwq3bvqnXv6vZv5TIr3XIv6fYxHq3k3G3mJjRwKzZxKXTuXy/qW64nafYuoXPxZ7Uwp/PrpfGpqDSwJHPwJvLrpvNqavbvpjTxaXTvHe4l5jHqqPUv4HGt6jXt6TUs6DPr6TSs5zLq6DRrq3ewCH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjNGRTZGQUI0MkYxMUU4QkIxMkM5RTREQjc3NDVEOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjNGRTZGOUI0MkYxMUU4QkIxMkM5RTREQjc3NDVEOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQkE0MTgyNkEzMjA2MTVFQkE2MkM0RkI0N0UzNUY5QjIiIHN0UmVmOmRvY3VtZW50SUQ9IkJBNDE4MjZBMzIwNjE1RUJBNjJDNEZCNDdFMzVGOUIyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAAG4AIwAAB/+Af4KDhIWGh38DA4eKihyPkCWSZWVClpdhYTybETwRn6A1ojSkNHMBqCKqqgStrgQZsbJVtDq2Ojc3iLu8iYuGjQOQkZNlJZeWmZueoM2iNaWmqAGrrK+usrG0Vbe4ub3ghIqMjcOPkiWUx8jKnM2ho6Vzp9TVItet2Rnb3bnf4eDGAStnjgM6Y8iEtOPEDB40efTs3cOnj98tf/8A8vpVKJgwcwcRYtK0rNO7Zw9NRbSHD1a2bdxsYcyokRw5RyCLJVzoqaHDaPTqrWqpb1+tixht1ETEsSPBYSHXJVto8mQ8UiurEa14VGZSpUud3vwIVedOkj6dXSU1TSJFrjH/vfqzQTesuKaDghU0mK7S2ZLvPj2LJk3o0LezunqbSxesXYFOceaklFAh2p5WU6pMxRKxNsUzbzS24bG0aUGmS+89KHUq4MCD5U0zPPEa3H5fR6fe3UiO79++B3AZzgUSJWOTWlMFtWVLqDUQg3KOEYMA9VZq1MRSAxN37tHEw4sXD7y8b+Je0nvpwr69+ybw4zdpTn/LmvtrrkBXKT3AGxHUBZhDDtkVKIEEtTgglwO50KXAgxCeIOGEFFZo4YUUutcFExxuyGF8d4R4hxsklpjfFVeQoeKKZLzh4otvCDgggQYe6MCNOOYI4Y47IuHjj0AGCWQaRBaZBpA9JKkk/4dMftiEiCGW6AaKVKbIooowvjjjlgd2aWOOOYLB445SlCnkmUgQmUcPeRhJpJJwBmHGnHPSYScdVuSpZ54pWJHCn4CmcGWWWuawwQYDeuklmDeC4eijj0oBYZll5mHppZhmmkcQnHbq6ad0hpqEGVZkkcWepqaQxZ87ALrDqztcIOusF7xx6K23qqCrChLousSvwP4KKaSUFkupD8gmq+yyzCabxLN0PivttFGYaq21sGYLK6204urtruCqEOyvRxwxbAUVgIFuBcZSqse78MYbLx/01msvvVHkq++++ULh77/aBhwrt7IW4e2h4YYLbLkMl6vuuhBHDPEPFFds8f/FGF8MRRQ/6PvvxwiELPLIDJRs8skMFKHyyioP4bLLeMQsc8wNNyxxxADkrPPOfvTs888/7yH00EQL7S8OHx898tIoN10yyyu/7HIIIeBR9cwWZH2E1haY4PXXXlew89hjs2H22WibjQMbOLTt9ttwtw3H3HQ7YffdX3zBQN5895131EVIPTXVhIeQ9eGIg6241zsr4fjjkCsRx+SUV2555X1krnnmdd/tuRN2OOH36F9ggMEEqKcudeGFI364BhZooMHikdduu+NY5K777rzvTsTvwAdvx/DEF2+H6cgnf3rqzDMPwvPQQ4+47NRTL8PsJsighPaQL9D9AuCHH/7/CuSXb/756Jvfxvrr28E++8oj3/z8qEdvP/RnnFF99TL077//4gugAAWYvhU84YAITCAC1/eE9zmwDQKIoAQjSIEJUOCCqLsgBqnAwQ5yEH/5C2EIZfe/EgJwgEZIoQpXuEIFuvCFB5ygDGc4QQ3a8IYU8KAHYcDDM8BAhCQ4AwlIMIIi9q+ISJQBBJbIRAiw8IlQNEICaUhFCRqgihcUAA63eMEO8vCLYByiGMeIxDKWsYlodIEa18jGNrLRAHCMoxznSMc6fuCOeMSjDTvAxz7yEYyAhMEYB2lGM6LxkG5MpCLryEg55vGRkLyjHyfZgEpa8pKV9IAmPUCCTWqy7QWgDGUR0UDKUh4SAi7QgirVqMpWuvKVqoTjC2b5gkjaEpKTzGUfMcnLTHryl6EMZgtKSUw0sOCYyGQBLJfJTFXS8pnQjOYz+3iAalqzmru0ZAIquU1e/nKTdQhnHYTZgjGYcwykTKY6C8DOdrrznfB8pzShec162vOeCcinPvepTxT485/+FKdAgXDOgppTnQiNp0IX2s57XnMKU3CoRPlJ0X4C9J9iyOhAgcBRghZ0BjMYA0hHSlKQtvMBDygASlfK0pa69AEQjalMZ0pTmlaUoijI50VRkNGeiqGjQA0qEEpK1JG+9KhIbWkgAAA7);
                                  }

                                  @media only screen and (min-width: 768px) {
                                      .postcard__figure__image {
                                          background-image: url(https://d13b2ieg84qqce.cloudfront.net/9e4d828e5f5cfe5eac16bdee876a58919082288f.jpg), url(data:image/gif;base64,R0lGODlhbgAjAOYAAGzCuJXSxpLEoa3dwIvRyGO0mpHDm4m9k5vMs4O6k3PKxGq8rZTKs4O8m3vLw2GylWu6o6HWxYPNwozEq4zBo3HFu3vDspPNupLGqoTRyHjArovLvK3awom+m3u6m47Am4PBq4PFspLTyHO7o3u9oqrawnLCs6rZvH25lJzQvIPJvJnJpWq2mnS5nGW4pIzAlIK+oozQxXK+q2q0lJrUxp3VxnTNyXnOyJ7NrYrOwn3PyJrOuKXXxajWu6XVtaHRsXO2lKbVuKnYxInGs5rJqY3ItWa6qXrGuanYuqTStmu/snzIvafVvqXVwJnKrZbHop/Os6LQtW7GwIi8j4XApoDPyKHSvJ3SwJvMqKDQuWO3n6HUwq3bvqnXv6vZv5TIr3XIv6fYxHq3k3G3mJjRwKzZxKXTuXy/qW64nafYuoXPxZ7Uwp/PrpfGpqDSwJHPwJvLrpvNqavbvpjTxaXTvHe4l5jHqqPUv4HGt6jXt6TUs6DPr6TSs5zLq6DRrq3ewCH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjNGRTZGQUI0MkYxMUU4QkIxMkM5RTREQjc3NDVEOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjNGRTZGOUI0MkYxMUU4QkIxMkM5RTREQjc3NDVEOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQkE0MTgyNkEzMjA2MTVFQkE2MkM0RkI0N0UzNUY5QjIiIHN0UmVmOmRvY3VtZW50SUQ9IkJBNDE4MjZBMzIwNjE1RUJBNjJDNEZCNDdFMzVGOUIyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAAG4AIwAAB/+Af4KDhIWGh38DA4eKihyPkCWSZWVClpdhYTybETwRn6A1ojSkNHMBqCKqqgStrgQZsbJVtDq2Ojc3iLu8iYuGjQOQkZNlJZeWmZueoM2iNaWmqAGrrK+usrG0Vbe4ub3ghIqMjcOPkiWUx8jKnM2ho6Vzp9TVItet2Rnb3bnf4eDGAStnjgM6Y8iEtOPEDB40efTs3cOnj98tf/8A8vpVKJgwcwcRYtK0rNO7Zw9NRbSHD1a2bdxsYcyokRw5RyCLJVzoqaHDaPTqrWqpb1+tixht1ETEsSPBYSHXJVto8mQ8UiurEa14VGZSpUud3vwIVedOkj6dXSU1TSJFrjH/vfqzQTesuKaDghU0mK7S2ZLvPj2LJk3o0LezunqbSxesXYFOceaklFAh2p5WU6pMxRKxNsUzbzS24bG0aUGmS+89KHUq4MCD5U0zPPEa3H5fR6fe3UiO79++B3AZzgUSJWOTWlMFtWVLqDUQg3KOEYMA9VZq1MRSAxN37tHEw4sXD7y8b+Je0nvpwr69+ybw4zdpTn/LmvtrrkBXKT3AGxHUBZhDDtkVKIEEtTgglwO50KXAgxCeIOGEFFZo4YUUutcFExxuyGF8d4R4hxsklpjfFVeQoeKKZLzh4otvCDgggQYe6MCNOOYI4Y47IuHjj0AGCWQaRBaZBpA9JKkk/4dMftiEiCGW6AaKVKbIooowvjjjlgd2aWOOOYLB445SlCnkmUgQmUcPeRhJpJJwBmHGnHPSYScdVuSpZ54pWJHCn4CmcGWWWuawwQYDeuklmDeC4eijj0oBYZll5mHppZhmmkcQnHbq6ad0hpqEGVZkkcWepqaQxZ87ALrDqztcIOusF7xx6K23qqCrChLousSvwP4KKaSUFkupD8gmq+yyzCabxLN0PivttFGYaq21sGYLK6204urtruCqEOyvRxwxbAUVgIFuBcZSqse78MYbLx/01msvvVHkq++++ULh77/aBhwrt7IW4e2h4YYLbLkMl6vuuhBHDPEPFFds8f/FGF8MRRQ/6PvvxwiELPLIDJRs8skMFKHyyioP4bLLeMQsc8wNNyxxxADkrPPOfvTs888/7yH00EQL7S8OHx898tIoN10yyyu/7HIIIeBR9cwWZH2E1haY4PXXXlew89hjs2H22WibjQMbOLTt9ttwtw3H3HQ7YffdX3zBQN5895131EVIPTXVhIeQ9eGIg6241zsr4fjjkCsRx+SUV2555X1krnnmdd/tuRN2OOH36F9ggMEEqKcudeGFI364BhZooMHikdduu+NY5K777rzvTsTvwAdvx/DEF2+H6cgnf3rqzDMPwvPQQ4+47NRTL8PsJsighPaQL9D9AuCHH/7/CuSXb/756Jvfxvrr28E++8oj3/z8qEdvP/RnnFF99TL077//4gugAAWYvhU84YAITCAC1/eE9zmwDQKIoAQjSIEJUOCCqLsgBqnAwQ5yEH/5C2EIZfe/EgJwgEZIoQpXuEIFuvCFB5ygDGc4QQ3a8IYU8KAHYcDDM8BAhCQ4AwlIMIIi9q+ISJQBBJbIRAiw8IlQNEICaUhFCRqgihcUAA63eMEO8vCLYByiGMeIxDKWsYlodIEa18jGNrLRAHCMoxznSMc6fuCOeMSjDTvAxz7yEYyAhMEYB2lGM6LxkG5MpCLryEg55vGRkLyjHyfZgEpa8pKV9IAmPUCCTWqy7QWgDGUR0UDKUh4SAi7QgirVqMpWuvKVqoTjC2b5gkjaEpKTzGUfMcnLTHryl6EMZgtKSUw0sOCYyGQBLJfJTFXS8pnQjOYz+3iAalqzmru0ZAIquU1e/nKTdQhnHYTZgjGYcwykTKY6C8DOdrrznfB8pzShec162vOeCcinPvepTxT485/+FKdAgXDOgppTnQiNp0IX2s57XnMKU3CoRPlJ0X4C9J9iyOhAgcBRghZ0BjMYA0hHSlKQtvMBDygASlfK0pa69AEQjalMZ0pTmlaUoijI50VRkNGeiqGjQA0qEEpK1JG+9KhIbWkgAAA7);
                                  }
                                </style> */}
                          </div>
                          <cite className="postcard__figure__cite">
                            <a
                              className="profile-photo-attribution__link"
                              href="https://www.flickr.com/photos/justinjensen/4979561102/in/album-72157623671307590/"
                              rel="noopener nofollow noreferrer"
                              target="_blank"
                            >
                              justinjensen
                            </a>
                            &nbsp;/&nbsp;
                            <a
                              className="profile-photo-attribution__link"
                              href="https://creativecommons.org/licenses/by/2.0/"
                              rel="noopener nofollow noreferrer"
                              target="_blank"
                            >
                              CC BY
                            </a>
                          </cite>
                        </figure>
                        <div
                          className="postcard-add-to-list"
                          id="postcard-add-to-list"
                        >
                          <button
                            data-event-action="Add_to_List"
                            data-event-category="Revenue"
                            data-event-label="Profile_Header"
                            className="button button--has-icon button--icon-left button--icon-heart button--postcard-atl"
                            aria-label="Add to List, add Massachusetts Institute of Technology to your List"
                            tabindex="0"
                          >
                            <span className="add-to-list__text button__text">
                              Add to List
                            </span>
                          </button>
                        </div>
                        <div className="postcard__genus--wrap">
                          <span className="postcard__genus postcard__genus--current">
                            College
                          </span>
                          <a
                            className="postcard__genus"
                            href="https://www.niche.com/graduate-schools/massachusetts-institute-of-technology/"
                          >
                            Grad School
                          </a>
                        </div>
                      </div>
                      <div className="postcard__content-wrap">
                        <div className="postcard__content postcard__content--primary">
                          <h1 className="postcard__title">
                            Massachusetts Institute of Technology
                          </h1>
                          <div className="postcard__badge">
                            <a href="https://www.niche.com/colleges/search/best-colleges/">
                              <em></em> in Best Colleges in America
                            </a>
                          </div>
                          <ul className="postcard__attrs">
                            <li className="postcard__attr postcard-fact">
                              4 Year
                            </li>
                            <li className="postcard__attr postcard-fact">
                              CAMBRIDGE, MA
                            </li>
                            <li className="postcard__attr postcard__attr--has-reviews">
                              <div
                                className="profile-review-stars profile-review-stars--home"
                                data-testid="profile-review-stars"
                              >
                                <div className="review__stars review__stars--gray">
                                  <span
                                    className="review__stars__icon review__stars__icon--gray--40"
                                    data-testid="review-stars"
                                  ></span>
                                  <span className="visually-hidden">
                                    Rating
                                    {/* <!-- -->4.15<!-- --> */}
                                    out of 5{" "}
                                  </span>
                                  <span className="review__stars__number__reviews">
                                    <span className="visually-hidden">
                                      &nbsp;
                                    </span>
                                    650 reviews
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <ul className="postcard__attrs postcard__attrs--fact"></ul>
                        </div>
                        <div className="postcard__content postcard__content--secondary">
                          <div className="postcard__cta postcard__cta--full-width">
                            <a
                              className="button button--small button--light-blue button--full-width"
                              href="https://www.niche.com/colleges/massachusetts-institute-of-technology/how-to-apply/"
                            >
                              How to Apply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </div>
            <div className="profile-body-wrap">
              <div className="profile-body profile-body--with-nav">
                <div className="profile-nav-container-wrap profile-nav-container-wrap--sticky-header">
                  <div></div>
                  <div className="profile-nav-container">
                    <nav className="profile-nav">
                      <ol className="profile-nav__sections">
                        <li className="profile-nav__section profile-nav__section--active">
                          <a href="#report-card" tabindex="-1">
                            Report Card
                          </a>
                        </li>
                        <li className="profile-nav__section">
                          <a href="#about" tabindex="-1">
                            About
                          </a>
                        </li>
                        <li className="profile-nav__section">
                          <a href="#rankings" tabindex="-1">
                            Rankings
                          </a>
                        </li>
                        <li className="profile-nav__section">
                          <a href="#admissions" tabindex="-1">
                            Admissions
                          </a>
                        </li>
                        <li className="profile-nav__section">
                          <a href="#scatterplot" tabindex="-1">
                            Will You Get In?
                          </a>
                        </li>
                        <li className="profile-nav__section">
                          <a href="#cost" tabindex="-1">
                            Cost
                          </a>
                        </li>
                        <li className="profile-nav__section">
                          <a href="#scholarship-cta" tabindex="-1">
                            Scholarship
                          </a>
                        </li>
                        <li className="profile-nav__section">
                          <a href="#academics" tabindex="-1">
                            Academics
                          </a>
                        </li>
                        <li className="profile-nav__section">
                          <a href="#majors" tabindex="-1">
                            Majors
                          </a>
                        </li>
                        <li className="profile-nav__section">
                          <a href="#online" tabindex="-1">
                            Online
                          </a>
                        </li>
                        <li className="profile-nav__section">
                          <a href="#students" tabindex="-1">
                            Students
                          </a>
                        </li>
                        <li className="profile-nav__section">
                          <a href="#campus-life" tabindex="-1">
                            Campus Life
                          </a>
                        </li>
                        <li className="profile-nav__section">
                          <a href="#after" tabindex="-1">
                            After College
                          </a>
                        </li>
                        <li className="profile-nav__section">
                          <a href="#similar-colleges" tabindex="-1">
                            Similar Colleges
                          </a>
                        </li>
                        <li className="profile-nav__section">
                          <a href="#reviews" tabindex="-1">
                            Reviews
                          </a>
                        </li>
                      </ol>
                      <div
                        className="profile-nav__active-indicator"
                        style={{ transform: "translateX(0px) scaleX(0)" }}
                      ></div>
                    </nav>
                    <button className="button profile-nav__panel-trigger">
                      <svg
                        className="niche-icon niche-icon--meatball"
                        height="24"
                        viewBox="0 0 24 24"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="13" r="2.5"></circle>
                          <circle cx="21.5" cy="13" r="2.5"></circle>
                          <circle cx="2.5" cy="13" r="2.5"></circle>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="profile-blocks">
                  <section
                    className="block--report-card"
                    aria-label="Report Card"
                    id="report-card"
                  >
                    <h2 className="visually-hidden">Report Card</h2>
                    <div className="card card--profile">
                      <div className="report-card">
                        <div className="profile__buckets">
                          <div className="profile__bucket--1">
                            <div className="blank__bucket">
                              <div className="overall-grade">
                                <div className="overall-grade__niche-grade">
                                  <div className="niche__grade niche__grade--a-plus">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    A+
                                  </div>
                                </div>
                                <div className="overall-grade__label">
                                  Overall Niche Grade
                                </div>
                                <div className="overall-grade__methodology-link-wrap">
                                  <a
                                    className="overall-grade__methodology-link"
                                    href="https://www.niche.com/about/where-niche-grades-come-from/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    How are grades calculated?
                                  </a>
                                  <a
                                    className="overall-grade__methodology-link"
                                    href="https://www.niche.com/about/data/#data-college"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Data Sources
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="profile__bucket--2">
                            <ol className="ordered__list__bucket">
                              <li className="ordered__list__bucket__item">
                                <div className="profile-grade--two">
                                  <div className="profile-grade__label">
                                    Academics
                                  </div>
                                  <div className="niche__grade niche__grade--section--a-plus">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    A+
                                  </div>
                                </div>
                              </li>
                              <li className="ordered__list__bucket__item">
                                <div className="profile-grade--two">
                                  <div className="profile-grade__label">
                                    Value
                                  </div>
                                  <div className="niche__grade niche__grade--section--a-plus">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    A+
                                  </div>
                                </div>
                              </li>
                              <li className="ordered__list__bucket__item">
                                <div className="profile-grade--two">
                                  <div className="profile-grade__label">
                                    Diversity
                                  </div>
                                  <div className="niche__grade niche__grade--section--a-plus">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    A+
                                  </div>
                                </div>
                              </li>
                              <li className="ordered__list__bucket__item">
                                <div className="profile-grade--two">
                                  <div className="profile-grade__label">
                                    Campus
                                  </div>
                                  <div className="niche__grade niche__grade--section--a-minus">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    A minus
                                  </div>
                                </div>
                              </li>
                              <li className="ordered__list__bucket__item">
                                <div className="profile-grade--two">
                                  <div className="profile-grade__label">
                                    Athletics
                                  </div>
                                  <div className="niche__grade niche__grade--section--b-minus">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    B minus
                                  </div>
                                </div>
                              </li>
                              <li className="ordered__list__bucket__item">
                                <div className="profile-grade--two">
                                  <div className="profile-grade__label">
                                    Party Scene
                                  </div>
                                  <div className="niche__grade niche__grade--section--a">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    A
                                  </div>
                                </div>
                              </li>
                              <li className="ordered__list__bucket__item">
                                <div className="profile-grade--two">
                                  <div className="profile-grade__label">
                                    Professors
                                  </div>
                                  <div className="niche__grade niche__grade--section--a-plus">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    A+
                                  </div>
                                </div>
                              </li>
                              <li className="ordered__list__bucket__item">
                                <div className="profile-grade--two">
                                  <div className="profile-grade__label">
                                    Location
                                  </div>
                                  <div className="niche__grade niche__grade--section--a-plus">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    A+
                                  </div>
                                </div>
                              </li>
                              <li className="ordered__list__bucket__item">
                                <div className="profile-grade--two">
                                  <div className="profile-grade__label">
                                    Dorms
                                  </div>
                                  <div className="niche__grade niche__grade--section--a">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    A
                                  </div>
                                </div>
                              </li>
                              <li className="ordered__list__bucket__item">
                                <div className="profile-grade--two">
                                  <div className="profile-grade__label">
                                    Campus Food
                                  </div>
                                  <div className="niche__grade niche__grade--section--b-minus">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    B minus
                                  </div>
                                </div>
                              </li>
                              <li className="ordered__list__bucket__item">
                                <div className="profile-grade--two">
                                  <div className="profile-grade__label">
                                    Student Life
                                  </div>
                                  <div className="niche__grade niche__grade--section--a-plus">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    A+
                                  </div>
                                </div>
                              </li>
                              <li className="ordered__list__bucket__item">
                                <div className="profile-grade--two">
                                  <div className="profile-grade__label">
                                    Safety
                                  </div>
                                  <div className="niche__grade niche__grade--section--b">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    B
                                  </div>
                                </div>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                      <div className="card__action card__action--centered">
                        <button
                          className="report-card__toggle"
                          aria-expanded="false"
                          aria-label="View Full Report Card, grades are above"
                        >
                          View Full Report Card
                          {/* <!-- --> */}
                          <i className="icon icon-arrowdown-thin"></i>
                        </button>
                      </div>
                    </div>
                  </section>
                  <section
                    className="block--one"
                    aria-label="editorial"
                    id="editorial"
                  >
                    <div className="block__title">
                      <h3 className="visually-hidden">editorial</h3>
                    </div>
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <span className="bare-value">
                            MIT is an elite private college located in
                            Cambridge, Massachusetts in the Boston Area. It is a
                            small institution with an enrollment of 4,234
                            undergraduate students. Admissions is extremely
                            competitive as the MIT acceptance rate is only 7%.
                            Popular majors include Computer Science, Mechanical
                            Engineering, and Mathematics. Graduating 96% of
                            students, MIT alumni go on to earn a starting salary
                            of $82,200.
                          </span>
                        </div>
                      </div>
                      <div className="profile__bucket--2">
                        <div className="blank__bucket"></div>
                      </div>
                    </div>
                  </section>
                  <section className="block--two" aria-label="About" id="about">
                    <div className="block__title">
                      <h3 className="visually-hidden">About</h3>
                    </div>
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div className="fact-with-icon fact-with-icon--website">
                            <svg
                              aria-label="website"
                              className="fact-with-icon__icon"
                              role="img"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .8C5.8.8.8 5.8.8 12s5 11.2 11.2 11.2 11.2-5 11.2-11.2S18.2.8 12 .8zm8.4 7.1h-4.3c-.2-1.7-.7-3.4-1.4-4.9 2.5.7 4.5 2.5 5.7 4.9zM12 2.6c.7 0 1.8 2 2.4 5.2H9.6c.6-3.2 1.7-5.2 2.4-5.2zM9.3 3c-.7 1.5-1.2 3.1-1.4 4.9H3.6C4.8 5.5 6.8 3.7 9.3 3zm-6.8 9v-.2c.1-.7.2-1.5.3-2.1h4.8c-.1.8-.1 1.6-.1 2.4 0 .8 0 1.4.1 2.1H2.8c-.2-.8-.3-1.5-.3-2.2zm.9 3.8h4.5c.2 1.8.7 3.6 1.4 5.2-2.6-.8-4.7-2.7-5.9-5.2zm8.6 5.6c-.8 0-1.8-1.9-2.4-5.5h4.7c-.5 3.5-1.5 5.5-2.3 5.5zm2.5-7.3H9.4c-.1-.7-.1-1.3-.1-2.1v-1.2-1.1h5.1c.1.8.1 1.5.1 2.4.1.8.1 1.3 0 2zm.2 6.9c.8-1.7 1.3-3.5 1.5-5.2h4.4c-1.2 2.5-3.3 4.4-5.9 5.2zm1.5-6.9v-1c0-.4.1-.8.1-1.1V9.6h4.8c.2.7.3 1.6.3 2.4 0 .7-.1 1.4-.3 2.1h-4.9z"></path>
                            </svg>
                            <div className="fact-with-icon__content">
                              <a
                                className="profile__website__link"
                                href="http://web.mit.edu/"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                                aria-label="website"
                              >
                                web.mit.edu
                              </a>
                            </div>
                          </div>
                          <div className="fact-with-icon fact-with-icon--address">
                            <svg
                              aria-label="address"
                              className="fact-with-icon__icon"
                              role="img"
                              viewBox="0 0 24 24"
                            >
                              <path d="M99.9 11c-3.7 0-6.7 3.2-6.7 7.1 0 5.5 6.1 11.6 6.3 11.8.2.2.3.3.4.3.1 0 .2-.1.4-.3.1-.1 6.4-6.2 6.3-11.8 0-4-3-7.1-6.7-7.1zm.1 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4c.1 2.3-1.7 4-4 4zM84.7 22.8c-1.1 0-2 1-2 2.1s.9 2 2 2 2-1 2-2.1-.9-2-2-2zM88.3 42v25.5h27.6V42H88.3zm15.2 23.8c-.6.6-1.4.9-2 .9s-1.3-.3-2-.9c-.3-.3-7-6.9-7-13.6 0-5.2 4-9.5 9-9.5s9 4.3 9 9.5c0 6.7-6.7 13.3-7 13.6zM12 2.4c3.7 0 6.7 3.1 6.7 7.1.1 5.7-6.2 11.7-6.3 11.8-.2.2-.3.3-.4.3-.1 0-.2-.1-.4-.3-.2-.2-6.3-6.3-6.3-11.8 0-3.9 3-7.1 6.7-7.1m0-2.1C7.1.3 3.2 4.4 3.2 9.5c0 6.2 6.2 12.6 6.9 13.3.3.3.9.9 1.9.9 1 0 1.6-.6 1.9-.9 1.2-1.2 7-7.2 6.9-13.4 0-5-3.9-9.1-8.8-9.1z"></path>
                              <path d="M12.1 7.4c1.1 0 2 .9 2 2s-.9 2.1-2 2.1-2-.9-2-2 .9-2.1 2-2.1m0-2.1C9.9 5.3 8 7.2 8 9.5c0 2.2 1.8 4.1 4.1 4.1 2.2 0 4.1-1.9 4.1-4.2 0-2.3-1.8-4.1-4.1-4.1z"></path>
                            </svg>
                            <div className="fact-with-icon__content">
                              <address className="profile__address--compact">
                                77 MASSACHUSETTS AVENUE
                                <br />
                                CAMBRIDGE
                                {/* <!-- -->, */}
                                {/* MA<!-- --> */}
                                02139
                              </address>
                            </div>
                          </div>
                          <div className="claim-cta__container">
                            <div className="claim-cta__body">
                              <div className="claim-cta__icon">
                                <div className="niche-icon-wrap">
                                  <svg
                                    aria-label="checkmark"
                                    className="niche-icon niche-icon--claimed"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                  >
                                    <g transform="scale(0.16, 0.16)">
                                      <circle
                                        cx="50"
                                        cy="50.2"
                                        fill="#5DC5F1"
                                        r="50"
                                      ></circle>
                                      <path
                                        d="M77.8,29.1c-3.5-3.5-7.3-1.7-9.9,0.8L43,54.9L32.2,44.1c-2.5-2.5-6.6-4.1-9.9-0.8c-3.5,3.5-1.7,7.3,0.8,9.9 L43,73.2L76.9,39C79.5,36.6,81,32.4,77.8,29.1z"
                                        fill="#FFFFFF"
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <span className="claim-cta__text">
                                Work Here?&nbsp;
                                <a href="https://www.niche.com/claim-your-school/">
                                  Claim Your
                                  {/* <!-- -->College */}
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--2">
                        <div className="blank__bucket">
                          <div className="search-tags">
                            <div className="search-tags__label">
                              About MIT...
                            </div>
                            <div className="search-tags__wrap">
                              <ul
                                className="search-tags__wrap__list"
                                aria-label="search tags"
                              >
                                <li className="search-tags__wrap__list__tag">
                                  <a
                                    href="https://www.niche.com/colleges/search/top-private-universities/s/massachusetts/"
                                    className="search-tags__wrap__list__tag__a"
                                  >
                                    Private
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="scalar--two">
                            <div className="scalar__label">
                              <span>Athletic Division</span>
                            </div>
                            <div className="scalar__value">
                              <span>NCAA Division III (with football)</span>
                            </div>
                          </div>
                          <div className="scalar--two">
                            <div className="scalar__label">
                              <span>Athletic Conference</span>
                            </div>
                            <div className="scalar__value">
                              <span>
                                New England Women's &amp; Men's Athletic
                                Conference
                              </span>
                            </div>
                          </div>
                          <div className="text-cta">
                            <a
                              className="text-cta__link"
                              href="/colleges/compare/?type=college&amp;colleges=massachusetts-institute-of-technology"
                            >
                              <span>Compare to Other Colleges</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--3">
                        <div className="blank__bucket">
                          <ul className="profile-breadcrumbs">
                            <li className="profile-breadcrumbs__item">
                              <a href="https://www.niche.com/places-to-live/s/massachusetts/">
                                Massachusetts
                              </a>
                            </li>
                            <li className="profile-breadcrumbs__item">
                              <a href="https://www.niche.com/places-to-live/cambridge-middlesex-ma/">
                                Cambridge
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="block--blank" aria-label="">
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div
                            className="ad-spot"
                            id="colleges_profile-home_01_728x90"
                            aria-label="Advertisement"
                          ></div>
                          <div
                            className="ad-spot--mobile"
                            id="colleges_profile-home_01_320x50"
                            aria-label="Advertisement"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="block--rankings"
                    aria-label="Rankings"
                    id="rankings"
                  >
                    <div className="block--rankings__list">
                      <div className="block__title">
                        <h2 className="block__heading">
                          <span>
                            Massachusetts Institute of Technology Rankings
                          </span>
                        </h2>
                        <p className="block__description">
                          Niche rankings are based on rigorous analysis of key
                          statistics from the U.S. Department of Education and
                          millions of reviews.
                        </p>
                      </div>
                      <div
                        className="rankings-badge"
                        data-size="large"
                        data-theme="green"
                        data-vertical="colleges"
                        data-testid="rankings-badge"
                      ></div>
                      <div className="profile__buckets">
                        <div className="profile__bucket--1">
                          <div className="blank__bucket">
                            <ul className="rankings__collection">
                              <li className="rankings__collection__item">
                                <button
                                  className="button button--bare rankings__collection__link"
                                  href="https://www.niche.com/colleges/search/best-colleges/"
                                >
                                  <div className="rankings__collection__name">
                                    Best Colleges in America
                                  </div>
                                  <div className="rankings__collection__ranking">
                                    <span className="rankings__collection__ordinal">
                                      1
                                    </span>
                                    {/* of<!-- --> */}
                                    1,555
                                  </div>
                                </button>
                              </li>
                              <li className="rankings__collection__item">
                                <button
                                  className="button button--bare rankings__collection__link"
                                  href="https://www.niche.com/colleges/search/best-college-academics/"
                                >
                                  <div className="rankings__collection__name">
                                    Colleges with the Best Academics in America
                                  </div>
                                  <div className="rankings__collection__ranking">
                                    <span className="rankings__collection__ordinal">
                                      1
                                    </span>
                                    {/* of<!-- --> */}
                                    1,552
                                  </div>
                                </button>
                              </li>
                              <li className="rankings__collection__item">
                                <button
                                  className="button button--bare rankings__collection__link"
                                  href="https://www.niche.com/colleges/search/top-private-universities/"
                                >
                                  <div className="rankings__collection__name">
                                    Top Private Universities in America
                                  </div>
                                  <div className="rankings__collection__ranking">
                                    <span className="rankings__collection__ordinal">
                                      1
                                    </span>
                                    {/* of<!-- --> */}
                                    954
                                  </div>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="profile__bucket--2">
                          <div className="blank__bucket">
                            <div className="expansion-link">
                              <a
                                className="expansion-link__text"
                                href="https://www.niche.com/colleges/massachusetts-institute-of-technology/rankings/"
                              >
                                <span>
                                  See All Massachusetts Institute of Technology
                                  Rankings
                                </span>
                                <i className="icon-arrowright-thin--expansion"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="block--blank block--sponsored-listings"
                    aria-label="Sponsored Schools"
                    id="sponsored-listings"
                  >
                    <h2 className="visually-hidden">Sponsored Schools</h2>
                    <div className="sponsored-listings-card">
                      <div className="sponsored-listings-card__atl-container">
                        <button
                          className="button--small button--icon-only button button--inverted button--green button--has-icon button--icon-left button--collapse-atl button--icon-heart"
                          aria-label="Add to List, add Massachusetts Maritime Academy to your List"
                          tabindex="0"
                        >
                          <span className="add-to-list__text button__text">
                            Add to List
                          </span>
                        </button>
                      </div>
                      <a
                        className="sponsored-listings-card__link"
                        href="https://www.niche.com/colleges/massachusetts-maritime-academy/"
                      >
                        <div className="carte sponsored-listings-card__card carte--with-image carte--with-header carte--with-tabs carte--with-rounded-corners">
                          <div className="carte__header">
                            <div className="sponsored-tag">Sponsored</div>
                            <div className="carte--with-image__image"></div>
                            <div className="carte__tabs">
                              <div className="postcard__genus--wrap">
                                <span className="postcard__genus postcard__genus--current postcard__genus--small-fry">
                                  College
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="carte__body">
                            <div className="sponsored-listings-card__title">
                              Massachusetts Maritime Academy
                              <span
                                className="claimed-entity-icon"
                                aria-label="blue checkmark"
                              ></span>
                            </div>
                            <ul
                              className="sponsored-listings-card__attributes"
                              aria-label="4 Year,BUZZARDS BAY, MA"
                            >
                              <li className="postcard__attr">4 Year</li>
                              <li className="postcard__attr">
                                BUZZARDS BAY, MA
                              </li>
                              <li className="postcard__attr">
                                <div className="review__stars review__stars--gray">
                                  <span
                                    className="review__stars__icon review__stars__icon--gray--30"
                                    data-testid="review-stars"
                                  ></span>
                                  <span className="visually-hidden">
                                    Rating 2.99 out of 5{" "}
                                  </span>
                                  <span className="review__stars__number__reviews">
                                    <span className="visually-hidden">
                                      &nbsp;
                                    </span>
                                    179
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="sponsored-listings-card">
                      <div className="sponsored-listings-card__atl-container">
                        <button
                          className="button--small button--icon-only button button--inverted button--green button--has-icon button--icon-left button--collapse-atl button--icon-heart"
                          aria-label="Add to List, add Lasell University to your List"
                          tabindex="0"
                        >
                          <span className="add-to-list__text button__text">
                            Add to List
                          </span>
                        </button>
                      </div>
                      <a
                        className="sponsored-listings-card__link"
                        href="https://www.niche.com/colleges/lasell-university/"
                      >
                        <div className="carte sponsored-listings-card__card carte--with-image carte--with-header carte--with-tabs carte--with-rounded-corners">
                          <div className="carte__header">
                            <div className="sponsored-tag">Sponsored</div>
                            <div className="carte--with-image__image"></div>
                            <div className="carte__tabs">
                              <div className="postcard__genus--wrap">
                                <span className="postcard__genus postcard__genus--current postcard__genus--small-fry">
                                  College
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="carte__body">
                            <div className="sponsored-listings-card__title">
                              Lasell University
                              <span
                                className="claimed-entity-icon"
                                aria-label="blue checkmark"
                              ></span>
                            </div>
                            <ul
                              className="sponsored-listings-card__attributes"
                              aria-label="4 Year,NEWTON, MA"
                            >
                              <li className="postcard__attr">4 Year</li>
                              <li className="postcard__attr">NEWTON, MA</li>
                              <li className="postcard__attr">
                                <div className="review__stars review__stars--gray">
                                  <span
                                    className="review__stars__icon review__stars__icon--gray--35"
                                    data-testid="review-stars"
                                  ></span>
                                  <span className="visually-hidden">
                                    Rating 3.59 out of 5{" "}
                                  </span>
                                  <span className="review__stars__number__reviews">
                                    <span className="visually-hidden">
                                      &nbsp;
                                    </span>
                                    558
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="sponsored-listings-card">
                      <div className="sponsored-listings-card__atl-container">
                        <button
                          className="button--small button--icon-only button button--inverted button--green button--has-icon button--icon-left button--collapse-atl button--icon-heart"
                          aria-label="Add to List, add Berklee College of Music to your List"
                          tabindex="0"
                        >
                          <span className="add-to-list__text button__text">
                            Add to List
                          </span>
                        </button>
                      </div>
                      <a
                        className="sponsored-listings-card__link"
                        href="https://www.niche.com/colleges/berklee-college-of-music/"
                      >
                        <div className="carte sponsored-listings-card__card carte--with-image carte--with-header carte--with-tabs carte--with-rounded-corners">
                          <div className="carte__header">
                            <div className="sponsored-tag">Sponsored</div>
                            <div className="carte--with-image__image"></div>
                            <div className="carte__tabs">
                              <div className="postcard__genus--wrap">
                                <span className="postcard__genus postcard__genus--current postcard__genus--small-fry">
                                  College
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="carte__body">
                            <div className="sponsored-listings-card__title">
                              Berklee College of Music
                              <span
                                className="claimed-entity-icon"
                                aria-label="blue checkmark"
                              ></span>
                            </div>
                            <ul
                              className="sponsored-listings-card__attributes"
                              aria-label="4 Year,BOSTON, MA"
                            >
                              <li className="postcard__attr">4 Year</li>
                              <li className="postcard__attr">BOSTON, MA</li>
                              <li className="postcard__attr">
                                <div className="review__stars review__stars--gray">
                                  <span
                                    className="review__stars__icon review__stars__icon--gray--40"
                                    data-testid="review-stars"
                                  ></span>
                                  <span className="visually-hidden">
                                    Rating 3.85 out of 5{" "}
                                  </span>
                                  <span className="review__stars__number__reviews">
                                    <span className="visually-hidden">
                                      &nbsp;
                                    </span>
                                    1,151
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section
                    className="block--two-two"
                    aria-label="MIT Admissions"
                    id="admissions"
                  >
                    <div className="block__title">
                      <h2 className="block__heading">
                        <span>MIT Admissions</span>
                      </h2>
                    </div>
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div className="scalar">
                            <div className="scalar__label">
                              <span>Acceptance Rate</span>
                            </div>
                            <div className="scalar__value">
                              <span>7%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--2">
                        <div className="blank__bucket">
                          <div className="scalar">
                            <div className="scalar__label">
                              <span>Application Deadline</span>
                              <div id="tooltip" className="tooltip">
                                <button
                                  className="button button--bare tooltip-trigger"
                                  aria-label="tooltip trigger"
                                >
                                  <div className="niche-icon-wrap">
                                    <svg
                                      className="niche-icon niche-icon--question"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 18.4C11.1 18.4 10.5 17.7 10.5 16.9C10.5 16.3 11 15.5 12 15.5C13 15.5 13.4 16.1 13.4 16.9C13.4 17.5 12.9 18.4 12 18.4ZM12.9 13.1C12.9 13.8 12.4 14.2 11.8 14.2C11.2 14.2 10.8 13.8 10.8 13.2C10.8 10.7 14 9.9 14.2 8.8C14.3 8.1 13.8 7.4 12.4 7.4C10.5 7.4 10.5 8.9 9.6 9.1C9.2 9.2 8.9 9.1 8.6 8.8C8.4 8.7 8.3 8.4 8.4 8C8.6 7.2 9.9 5.6 12.2 5.6C15.5 5.6 16.3 7.5 16.3 8.5C16.3 11.1 12.9 11.6 12.9 13.1Z"></path>
                                    </svg>
                                  </div>
                                </button>
                                <div
                                  className="tooltip-message"
                                  id="tooltip-description--tooltip"
                                  role="tooltip"
                                  style={{
                                    width: "300px",
                                    marginLeft: "-142px",
                                  }}
                                >
                                  Deadline for application submissions. Please
                                  contact the school for more details.
                                </div>
                              </div>
                            </div>
                            <div className="scalar__value">
                              <span>January 5</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--3">
                        <div className="blank__bucket">
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>SAT Range</span>
                            </div>
                            <div className="scalar__value">
                              <span>1510-1580</span>
                            </div>
                          </div>
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>ACT Range</span>
                            </div>
                            <div className="scalar__value">
                              <span>34-36</span>
                            </div>
                          </div>
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>Application Fee</span>
                            </div>
                            <div className="scalar__value">
                              <span>$75</span>
                            </div>
                          </div>
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>SAT/ACT</span>
                            </div>
                            <div className="scalar__value">
                              <span>Required</span>
                            </div>
                          </div>
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>High School GPA</span>
                            </div>
                            <div className="scalar__value">
                              <span>Recommended</span>
                            </div>
                          </div>
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>Early Decision/Early Action</span>
                            </div>
                            <div className="scalar__value">
                              <span>Yes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--4">
                        <div className="blank__bucket">
                          <div className="profile__website">
                            <div className="profile__website__label">
                              Application Website
                            </div>
                            <div className="profile__website__url">
                              <a
                                className="profile__website__link"
                                href="http://my.mit.edu/"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                              >
                                my.mit.edu
                              </a>
                            </div>
                          </div>
                          <div className="popular-entities">
                            <div className="popular-entities__title--wrapper">
                              <h3 className="popular-entities__title">
                                Students also applied to ...
                              </h3>
                            </div>
                            <div className="toggle__content--profiles--hidden">
                              <ul className="popular-entities-list">
                                <li
                                  className="popular-entities-list-item popular-entities-list-item--visible"
                                  style={{ animationDelay: "0s" }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__grade">
                                      <div className="niche__grade niche__grade--small--a-plus">
                                        <span className="visually-hidden">
                                          grade&nbsp;
                                        </span>
                                        A+
                                      </div>
                                    </div>
                                    <div className="popular-entity__name">
                                      <a
                                        className="popular-entity-link"
                                        href="https://www.niche.com/colleges/california-institute-of-technology/"
                                      >
                                        California Institute of Technology
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item popular-entities-list-item--visible"
                                  style={{ animationDelay: "0s" }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__grade">
                                      <div className="niche__grade niche__grade--small--a-plus">
                                        <span className="visually-hidden">
                                          grade&nbsp;
                                        </span>
                                        A+
                                      </div>
                                    </div>
                                    <div className="popular-entity__name">
                                      <a
                                        className="popular-entity-link"
                                        href="https://www.niche.com/colleges/princeton-university/"
                                      >
                                        Princeton University
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item popular-entities-list-item--visible"
                                  style={{ animationDelay: "0s" }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__grade">
                                      <div className="niche__grade niche__grade--small--a-plus">
                                        <span className="visually-hidden">
                                          grade&nbsp;
                                        </span>
                                        A+
                                      </div>
                                    </div>
                                    <div className="popular-entity__name">
                                      <a
                                        className="popular-entity-link"
                                        href="https://www.niche.com/colleges/georgia-institute-of-technology/"
                                      >
                                        Georgia Institute of Technology
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item"
                                  style={{ animationDelay: "0s" }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__grade">
                                      <div className="niche__grade niche__grade--small--a-plus">
                                        <span className="visually-hidden">
                                          grade&nbsp;
                                        </span>
                                        A+
                                      </div>
                                    </div>
                                    <div className="popular-entity__name">
                                      <a
                                        className="popular-entity-link"
                                        href="https://www.niche.com/colleges/harvey-mudd-college/"
                                      >
                                        Harvey Mudd College
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item"
                                  style={{ animationDelay: "0.05s" }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__grade">
                                      <div className="niche__grade niche__grade--small--a-plus">
                                        <span className="visually-hidden">
                                          grade&nbsp;
                                        </span>
                                        A+
                                      </div>
                                    </div>
                                    <div className="popular-entity__name">
                                      <a
                                        className="popular-entity-link"
                                        href="https://www.niche.com/colleges/harvard-university/"
                                      >
                                        Harvard University
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item"
                                  style={{ animationDelay: "0.01s" }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__grade">
                                      <div className="niche__grade niche__grade--small--a-plus">
                                        <span className="visually-hidden">
                                          grade&nbsp;
                                        </span>
                                        A+
                                      </div>
                                    </div>
                                    <div className="popular-entity__name">
                                      <a
                                        className="popular-entity-link"
                                        href="https://www.niche.com/colleges/yale-university/"
                                      >
                                        Yale University
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item"
                                  style={{
                                    animationDelay: "0.15000000000000002s",
                                  }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__grade">
                                      <div className="niche__grade niche__grade--small--a-plus">
                                        <span className="visually-hidden">
                                          grade&nbsp;
                                        </span>
                                        A+
                                      </div>
                                    </div>
                                    <div className="popular-entity__name">
                                      <a
                                        className="popular-entity-link"
                                        href="https://www.niche.com/colleges/stanford-university/"
                                      >
                                        Stanford University
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item"
                                  style={{ animationDelay: "0.2s" }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__grade">
                                      <div className="niche__grade niche__grade--small--a-plus">
                                        <span className="visually-hidden">
                                          grade&nbsp;
                                        </span>
                                        A+
                                      </div>
                                    </div>
                                    <div className="popular-entity__name">
                                      <a
                                        className="popular-entity-link"
                                        href="https://www.niche.com/colleges/carnegie-mellon-university/"
                                      >
                                        Carnegie Mellon University
                                      </a>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                              <span
                                role="button"
                                tabindex="0"
                                className="toggle__content__link--profiles"
                                aria-hidden="false"
                                aria-expanded="false"
                                aria-label="more"
                              >
                                More
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--5">
                        <div className="blank__bucket">
                          <div className="expansion-link">
                            <a
                              className="expansion-link__text"
                              href="https://www.niche.com/colleges/massachusetts-institute-of-technology/admissions/"
                            >
                              <span>Read More About Admissions</span>
                              <i className="icon-arrowright-thin--expansion"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="block--blank"
                    aria-label="Will You Get In?"
                    id="scatterplot"
                  >
                    <h2 className="visually-hidden">Will You Get In?</h2>
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div className="scatterplot" role="presentation">
                            <header className="scatterplot__header--profile">
                              <h2
                                className="scatterplot__title"
                                role="presentation"
                              >
                                Will You Get Into MIT?
                              </h2>
                              <p className="scatterplot__subtitle">
                                Test Scores and High School GPA for
                                Massachusetts Institute of Technology
                                {/* <!-- --> */}
                                <a
                                  className="scatterplot__subtitle--cta-link"
                                  href="https://www.niche.com/colleges/admissions-calculator/"
                                >
                                  See Other Colleges
                                  <span className="icon-arrowright-thin--expansion"></span>
                                </a>
                              </p>
                            </header>
                            <div className="scatterplot__body">
                              <div className="scatterplot-filters">
                                <ul className="scatterplot-filters__filter-group">
                                  <li className="scatterplot-filters__checkbox-wrapper">
                                    <label className="scatterplot-checkbox">
                                      <input
                                        aria-checked="true"
                                        aria-labelledby="scatterplot-checkbox--Accepted"
                                        className="scatterplot-checkbox__input"
                                        type="checkbox"
                                        value="Accepted"
                                        checked=""
                                      />
                                      <span
                                        className="scatterplot-checkbox__label"
                                        id="scatterplot-checkbox--Accepted"
                                        style={{ color: "rgb(41, 133, 65)" }}
                                      >
                                        Accepted
                                      </span>
                                      <span
                                        className="scatterplot-checkbox__indicator"
                                        style={{
                                          backgroundColor: "rgb(41,133,65)",
                                          borderColor: "rgb(41, 133, 65)",
                                        }}
                                      ></span>
                                    </label>
                                  </li>
                                  <li className="scatterplot-filters__checkbox-wrapper">
                                    <label className="scatterplot-checkbox">
                                      <input
                                        aria-checked="true"
                                        aria-labelledby="scatterplot-checkbox--Rejected"
                                        className="scatterplot-checkbox__input"
                                        type="checkbox"
                                        value="Rejected"
                                        checked=""
                                      />
                                      <span
                                        className="scatterplot-checkbox__label"
                                        id="scatterplot-checkbox--Rejected"
                                        style={{ color: "rgb(205, 74, 39)" }}
                                      >
                                        Rejected
                                      </span>
                                      <span
                                        className="scatterplot-checkbox__indicator"
                                        style={{
                                          backgroundColor: "rgb(205,74,39)",
                                          borderColor: "rgb(205, 74, 39)",
                                        }}
                                      ></span>
                                    </label>
                                  </li>
                                  <li className="scatterplot-filters__checkbox-wrapper">
                                    <label className="scatterplot-checkbox">
                                      <input
                                        aria-checked="true"
                                        aria-labelledby="scatterplot-checkbox--Considering"
                                        className="scatterplot-checkbox__input"
                                        type="checkbox"
                                        value="Considering"
                                        checked=""
                                      />
                                      <span
                                        className="scatterplot-checkbox__label"
                                        id="scatterplot-checkbox--Considering"
                                        style={{ color: "rgb(70, 70, 70)" }}
                                      >
                                        Considering
                                      </span>
                                      <span
                                        className="scatterplot-checkbox__indicator"
                                        style={{
                                          backgroundColor: "rgb(145,145,145)",
                                          borderColor: "rgb(145, 145, 145)",
                                        }}
                                      ></span>
                                    </label>
                                  </li>
                                </ul>
                                <ul className="scatterplot-filters__filter-group">
                                  <li className="scatterplot-filters__select-wrapper">
                                    <div className="scatterplot-select">
                                      <span className="scatterplot-select__value">
                                        All Majors
                                      </span>
                                      <select
                                        aria-label="Major select menu"
                                        className="scatterplot-select__input"
                                      >
                                        <option
                                          className="scatterplot-select__option"
                                          value="All Majors"
                                        >
                                          All Majors
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Anthropology and Sociology"
                                        >
                                          Anthropology and Sociology
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Architecture"
                                        >
                                          Architecture
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Biology"
                                        >
                                          Biology
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Business and Management"
                                        >
                                          Business and Management
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Chemistry"
                                        >
                                          Chemistry
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Communications"
                                        >
                                          Communications
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Computer Science"
                                        >
                                          Computer Science
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Economics"
                                        >
                                          Economics
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Engineering"
                                        >
                                          Engineering
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="English"
                                        >
                                          English
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Environmental Science"
                                        >
                                          Environmental Science
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Foreign Languages"
                                        >
                                          Foreign Languages
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="History"
                                        >
                                          History
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Interdisciplinary Studies"
                                        >
                                          Interdisciplinary Studies
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Math"
                                        >
                                          Math
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Performing Arts"
                                        >
                                          Performing Arts
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Philosophy"
                                        >
                                          Philosophy
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Physics"
                                        >
                                          Physics
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Political Science"
                                        >
                                          Political Science
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Psychology"
                                        >
                                          Psychology
                                        </option>
                                        <option
                                          className="scatterplot-select__option"
                                          value="Public Policy and Social Services"
                                        >
                                          Public Policy and Social Services
                                        </option>
                                      </select>
                                    </div>
                                  </li>
                                </ul>
                                <div className="scatterplot__add-scores-message">
                                  <p className="scatterplot__add-scores-text">
                                    Enter your high school GPA and test scores
                                    to see how you compare
                                  </p>
                                  <button
                                    className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButtonBase-root button button-small nss-pxm4ma"
                                    tabindex="0"
                                    type="button"
                                  >
                                    Add Scores
                                  </button>
                                </div>
                              </div>
                              <div
                                className="scatterplot-chart"
                                aria-live="polite"
                              >
                                <div className="scatterplot__add-scores-message">
                                  <p className="scatterplot__add-scores-text">
                                    Enter your high school GPA and test scores
                                    to see how you compare
                                  </p>
                                  <button
                                    className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButtonBase-root button button-small nss-pxm4ma"
                                    tabindex="0"
                                    type="button"
                                  >
                                    Add Scores
                                  </button>
                                </div>
                                <canvas
                                  className="scatterplot-chart__canvas"
                                  height="700"
                                  width="1100"
                                  aria-label="Scatterplot displaying students' likelihood of admittance based on their GPA in vertical axis and standardized tests (SAT and ACT) in horizontal axis."
                                  style={{ width: "550px", height: "350px" }}
                                ></canvas>
                                <div className="scatterplot__disclaimer">
                                  <span className="scatterplot__disclaimer-text">
                                    Data provided by 9,664 Niche users
                                  </span>
                                  <div id="tooltip" className="tooltip">
                                    <button
                                      className="button button--bare tooltip-trigger"
                                      aria-label="tooltip trigger"
                                    >
                                      <div className="niche-icon-wrap">
                                        <svg
                                          className="niche-icon niche-icon--question"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 18.4C11.1 18.4 10.5 17.7 10.5 16.9C10.5 16.3 11 15.5 12 15.5C13 15.5 13.4 16.1 13.4 16.9C13.4 17.5 12.9 18.4 12 18.4ZM12.9 13.1C12.9 13.8 12.4 14.2 11.8 14.2C11.2 14.2 10.8 13.8 10.8 13.2C10.8 10.7 14 9.9 14.2 8.8C14.3 8.1 13.8 7.4 12.4 7.4C10.5 7.4 10.5 8.9 9.6 9.1C9.2 9.2 8.9 9.1 8.6 8.8C8.4 8.7 8.3 8.4 8.4 8C8.6 7.2 9.9 5.6 12.2 5.6C15.5 5.6 16.3 7.5 16.3 8.5C16.3 11.1 12.9 11.6 12.9 13.1Z"></path>
                                        </svg>
                                      </div>
                                    </button>
                                    <div
                                      className="tooltip-message"
                                      id="tooltip-description--tooltip"
                                      role="tooltip"
                                      style={{
                                        width: "300px",
                                        marginLeft: "-142px",
                                      }}
                                    >
                                      Our scatterplot compares your scores with
                                      other Niche users associated with each
                                      college or university. Your percentage
                                      score and the datapoints in each
                                      admissions chart are meant only as general
                                      estimates and may not reflect your actual
                                      chances of admission.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="block--blank" aria-label="">
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div className="profile-cta">
                            <div className="card">
                              <h2 className="visually-hidden">
                                Find Student Loans
                              </h2>
                              <a
                                className="illustrated-cta-large"
                                href="https://www.niche.com/about/find-private-student-loans/#?ref=profile&amp;IpedID=166683"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <div className="button button--large button--wide">
                                  Find Student Loans
                                </div>
                                <div
                                  className="illustrated-cta-large__image illustrated-cta-large__image--student-loans"
                                  role="img"
                                ></div>
                                <div className="illustrated-cta-large__overlay"></div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="block--two-two"
                    aria-label="Cost"
                    id="cost"
                  >
                    <div className="block__title">
                      <h2 className="block__heading">
                        <span>Cost</span>
                      </h2>
                    </div>
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="scalar__bucket">
                          <div className="scalar">
                            <div className="scalar__label">
                              <span>Net Price</span>
                            </div>
                            <div className="scalar__value">
                              <span>$19,998</span>
                              <span className="scalar__value__suffix">
                                &nbsp;year
                              </span>
                              <div className="scalar__national__value">
                                <div className="scalar__national__label">
                                  National
                                </div>
                                $15,523
                              </div>
                            </div>
                          </div>
                          <div className="scalar__bucket__description">
                            Average cost after financial aid for students
                            receiving grant or scholarship aid, as reported by
                            the college.
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--2">
                        <div className="blank__bucket">
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>Average Total Aid Awarded</span>
                            </div>
                            <div className="scalar__value">
                              <span>$53,162</span>
                              <span className="scalar__value__suffix">
                                &nbsp; year
                              </span>
                              <div className="scalar__national__value">
                                <div className="scalar__national__label">
                                  National
                                </div>
                                $7,535
                              </div>
                            </div>
                          </div>
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>Students Receiving Financial Aid</span>
                            </div>
                            <div className="scalar__value">
                              <span>75%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--3">
                        <div className="blank__bucket">
                          <div className="text-cta">
                            <a
                              className="text-cta__link"
                              href="https://www.niche.com/about/find-private-student-loans/"
                              target=""
                            >
                              <span>Find Private Student Loans</span>
                            </a>
                          </div>
                          <div className="text-cta">
                            <a
                              className="text-cta__link"
                              href="https://www.niche.com/colleges/scholarships/"
                              target=""
                            >
                              <span>Find College Scholarships</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--4">
                        <div className="blank__bucket"></div>
                      </div>
                      <div className="profile__bucket--5">
                        <div className="blank__bucket">
                          <div className="expansion-link">
                            <a
                              className="expansion-link__text"
                              href="https://www.niche.com/colleges/massachusetts-institute-of-technology/cost/"
                            >
                              <span>Explore Tuition &amp; Cost Breakdown</span>
                              <i className="icon-arrowright-thin--expansion"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="block--blank"
                    aria-label="Scholarship"
                    id="scholarship-cta"
                  >
                    <h2 className="visually-hidden">Scholarship</h2>
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div className="profile-cta">
                            <div className="card illustrated-cta__card">
                              <a
                                className="illustrated-cta illustrated-cta--colleges search__cardCTA"
                                href="https://www.niche.com/colleges/scholarships/"
                                rel="noopener"
                                target=""
                              >
                                <span className="illustrated-cta__text">
                                  <span className="illustrated-cta__text-prompt">
                                    Find college scholarships
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="block--two-poll"
                    aria-label="Academics"
                    id="academics"
                  >
                    <div className="block__title">
                      <h2 className="block__heading">
                        <span>Academics</span>
                      </h2>
                    </div>
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div className="profile-grade">
                            <div className="profile-grade__label">
                              Professors
                            </div>
                            <div className="niche__grade niche__grade--section--a-plus">
                              <span className="visually-hidden">
                                grade&nbsp;
                              </span>
                              A+
                            </div>
                            <div className="profile-grade__description">
                              Based on faculty accomplishments, salary, student
                              reviews, and additional factors.
                            </div>
                          </div>
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>Student Faculty Ratio</span>
                            </div>
                            <div className="scalar__value">
                              <span>3:1</span>
                            </div>
                          </div>
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>Evening Degree Programs</span>
                            </div>
                            <div className="scalar__value">
                              <span>No</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--2">
                        <div className="blank__bucket">
                          <div className="poll__single">
                            <div className="poll__single__value">
                              <div className="poll__single__percent poll__single__percent__label">
                                82%
                              </div>
                              <span className="poll__single__body">
                                of students agree that professors put a lot of
                                effort into teaching their classes.&nbsp;
                                <span className="poll__single__responses">
                                  45 responses
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="poll__single">
                            <div className="poll__single__value">
                              <div className="poll__single__percent poll__single__percent__label">
                                90%
                              </div>
                              <span className="poll__single__body">
                                of students agree that it is easy to get the
                                classes they want.&nbsp;
                                <span className="poll__single__responses">
                                  58 responses
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="poll__single">
                            <div className="poll__single__value">
                              <div className="poll__single__percent poll__single__percent__label">
                                34%
                              </div>
                              <span className="poll__single__body">
                                of students agree that the workload is easy to
                                manage.&nbsp;
                                <span className="poll__single__responses">
                                  58 responses
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--3">
                        <div className="blank__bucket">
                          <div className="expansion-link">
                            <a
                              className="expansion-link__text"
                              href="https://www.niche.com/colleges/massachusetts-institute-of-technology/academics/"
                            >
                              <span>Read More About Academics</span>
                              <i className="icon-arrowright-thin--expansion"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="block--blank" aria-label="">
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div
                            className="claim-cta-large__container"
                            aria-label="Do You Work at Massachusetts Institute of Technology? Claim Your college Today!"
                          >
                            <h2 className="visually-hidden">
                              Claim Your college Today!
                            </h2>
                            <div className="claim-cta-large__title">
                              Do You Work at Massachusetts Institute of
                              Technology?
                              <a
                                className="claim-cta-large__title-js"
                                href="https://www.niche.com/claim-your-school/"
                              >
                                Claim Your College Today!
                              </a>
                            </div>
                            <div className="claim-cta-large__image claim-cta-large__image--college"></div>
                            <div className="claim-cta-large__body">
                              <a
                                className="claim-cta-large__body-js"
                                href="https://www.niche.com/claim-your-school/"
                              >
                                Claim your free account
                              </a>
                              to keep your college's data up-to-date and get
                              insights on user activity for your profile.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="block--one"
                    aria-label="Majors"
                    id="majors"
                  >
                    <div className="block__title">
                      <h2 className="block__heading">
                        <span>Majors</span>
                      </h2>
                    </div>
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div className="popular-entities">
                            <div className="popular-entities__title--wrapper">
                              <h3 className="popular-entities__title">
                                Most Popular Majors
                              </h3>
                            </div>
                            <div className="toggle__content--profiles--hidden">
                              <ul className="popular-entities-list">
                                <li
                                  className="popular-entities-list-item popular-entities-list-item--visible"
                                  style={{ animationDelay: "0s" }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__name">
                                      Computer Science
                                    </div>
                                    <div className="popular-entity-descriptor">
                                      424
                                      <span className="popular-entity-descriptor__suffix">
                                        Graduates
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item popular-entities-list-item--visible"
                                  style={{ animationDelay: "0s" }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__name">
                                      Mechanical Engineering
                                    </div>
                                    <div className="popular-entity-descriptor">
                                      147
                                      <span className="popular-entity-descriptor__suffix">
                                        Graduates
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item popular-entities-list-item--visible"
                                  style={{ animationDelay: "0s" }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__name">
                                      Mathematics
                                    </div>
                                    <div className="popular-entity-descriptor">
                                      112
                                      <span className="popular-entity-descriptor__suffix">
                                        Graduates
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item"
                                  style={{ animationDelay: "0s" }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__name">
                                      Physics
                                    </div>
                                    <div className="popular-entity-descriptor">
                                      83
                                      <span className="popular-entity-descriptor__suffix">
                                        Graduates
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item"
                                  style={{ animationDelay: "0.05s" }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__name">
                                      Aerospace Engineering
                                    </div>
                                    <div className="popular-entity-descriptor">
                                      53
                                      <span className="popular-entity-descriptor__suffix">
                                        Graduates
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item"
                                  style={{ animationDelay: "0.1s" }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__name">
                                      Bioengineering and Biomedical Engineering
                                    </div>
                                    <div className="popular-entity-descriptor">
                                      50
                                      <span className="popular-entity-descriptor__suffix">
                                        Graduates
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item"
                                  style={{
                                    animationDelay: "0.15000000000000002s",
                                  }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__name">
                                      Economics
                                    </div>
                                    <div className="popular-entity-descriptor">
                                      45
                                      <span className="popular-entity-descriptor__suffix">
                                        Graduates
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item"
                                  style={{ animationDelay: "0.2s" }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__name">
                                      Electrical Engineering
                                    </div>
                                    <div className="popular-entity-descriptor">
                                      44
                                      <span className="popular-entity-descriptor__suffix">
                                        Graduates
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item"
                                  style={{ animationDelay: "0.25s" }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__name">
                                      Chemical Engineering
                                    </div>
                                    <div className="popular-entity-descriptor">
                                      42
                                      <span className="popular-entity-descriptor__suffix">
                                        Graduates
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="popular-entities-list-item"
                                  style={{
                                    animationDelay: "0.30000000000000004s",
                                  }}
                                >
                                  <div className="popular-entity">
                                    <div className="popular-entity__name">
                                      Computational and Applied Mathematics
                                    </div>
                                    <div className="popular-entity-descriptor">
                                      37
                                      <span className="popular-entity-descriptor__suffix">
                                        Graduates
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                              <span
                                role="button"
                                tabindex="0"
                                className="toggle__content__link--profiles"
                                aria-hidden="false"
                                aria-expanded="false"
                                aria-label="more"
                              >
                                More
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--2">
                        <div className="blank__bucket">
                          <div className="expansion-link">
                            <a
                              className="expansion-link__text"
                              href="https://www.niche.com/colleges/massachusetts-institute-of-technology/majors/"
                            >
                              <span>See All Majors</span>
                              <i className="icon-arrowright-thin--expansion"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="block--two-two"
                    aria-label="Online"
                    id="online"
                  >
                    <div className="block__title">
                      <h2 className="block__heading">
                        <span>Online</span>
                      </h2>
                    </div>
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div className="scalar">
                            <div className="scalar__label">
                              <span>Online Programs Offered</span>
                              <div id="tooltip" className="tooltip">
                                <button
                                  className="button button--bare tooltip-trigger"
                                  aria-label="tooltip trigger"
                                >
                                  <div className="niche-icon-wrap">
                                    <svg
                                      className="niche-icon niche-icon--question"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 18.4C11.1 18.4 10.5 17.7 10.5 16.9C10.5 16.3 11 15.5 12 15.5C13 15.5 13.4 16.1 13.4 16.9C13.4 17.5 12.9 18.4 12 18.4ZM12.9 13.1C12.9 13.8 12.4 14.2 11.8 14.2C11.2 14.2 10.8 13.8 10.8 13.2C10.8 10.7 14 9.9 14.2 8.8C14.3 8.1 13.8 7.4 12.4 7.4C10.5 7.4 10.5 8.9 9.6 9.1C9.2 9.2 8.9 9.1 8.6 8.8C8.4 8.7 8.3 8.4 8.4 8C8.6 7.2 9.9 5.6 12.2 5.6C15.5 5.6 16.3 7.5 16.3 8.5C16.3 11.1 12.9 11.6 12.9 13.1Z"></path>
                                    </svg>
                                  </div>
                                </button>
                                <div
                                  className="tooltip-message"
                                  id="tooltip-description--tooltip"
                                  role="tooltip"
                                  style={{
                                    width: "300px",
                                    marginLeft: "-142px",
                                  }}
                                >
                                  Total number of complete undergraduate
                                  programs offered online or through distance
                                  learning.
                                </div>
                              </div>
                            </div>
                            <div className="scalar__value">
                              <span>0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--2">
                        <div className="blank__bucket">
                          <div className="scalar">
                            <div className="scalar__label">
                              <span>Offers Online Courses</span>
                              <div id="tooltip" className="tooltip">
                                <button
                                  className="button button--bare tooltip-trigger"
                                  aria-label="tooltip trigger"
                                >
                                  <div className="niche-icon-wrap">
                                    <svg
                                      className="niche-icon niche-icon--question"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 18.4C11.1 18.4 10.5 17.7 10.5 16.9C10.5 16.3 11 15.5 12 15.5C13 15.5 13.4 16.1 13.4 16.9C13.4 17.5 12.9 18.4 12 18.4ZM12.9 13.1C12.9 13.8 12.4 14.2 11.8 14.2C11.2 14.2 10.8 13.8 10.8 13.2C10.8 10.7 14 9.9 14.2 8.8C14.3 8.1 13.8 7.4 12.4 7.4C10.5 7.4 10.5 8.9 9.6 9.1C9.2 9.2 8.9 9.1 8.6 8.8C8.4 8.7 8.3 8.4 8.4 8C8.6 7.2 9.9 5.6 12.2 5.6C15.5 5.6 16.3 7.5 16.3 8.5C16.3 11.1 12.9 11.6 12.9 13.1Z"></path>
                                    </svg>
                                  </div>
                                </button>
                                <div
                                  className="tooltip-message"
                                  id="tooltip-description--tooltip"
                                  role="tooltip"
                                  style={{
                                    width: "300px",
                                    marginLeft: "-142px",
                                  }}
                                >
                                  College offers distance education courses.
                                </div>
                              </div>
                            </div>
                            <div className="scalar__value">
                              <span>Yes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--3">
                        <div className="blank__bucket">
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>Online Certificate Programs</span>
                              <div id="tooltip" className="tooltip">
                                <button
                                  className="button button--bare tooltip-trigger"
                                  aria-label="tooltip trigger"
                                >
                                  <div className="niche-icon-wrap">
                                    <svg
                                      className="niche-icon niche-icon--question"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 18.4C11.1 18.4 10.5 17.7 10.5 16.9C10.5 16.3 11 15.5 12 15.5C13 15.5 13.4 16.1 13.4 16.9C13.4 17.5 12.9 18.4 12 18.4ZM12.9 13.1C12.9 13.8 12.4 14.2 11.8 14.2C11.2 14.2 10.8 13.8 10.8 13.2C10.8 10.7 14 9.9 14.2 8.8C14.3 8.1 13.8 7.4 12.4 7.4C10.5 7.4 10.5 8.9 9.6 9.1C9.2 9.2 8.9 9.1 8.6 8.8C8.4 8.7 8.3 8.4 8.4 8C8.6 7.2 9.9 5.6 12.2 5.6C15.5 5.6 16.3 7.5 16.3 8.5C16.3 11.1 12.9 11.6 12.9 13.1Z"></path>
                                    </svg>
                                  </div>
                                </button>
                                <div
                                  className="tooltip-message"
                                  id="tooltip-description--tooltip"
                                  role="tooltip"
                                  style={{
                                    width: "300px",
                                    marginLeft: "-142px",
                                  }}
                                >
                                  Total number of certificate degree programs
                                  offered online or through distance education.
                                </div>
                              </div>
                            </div>
                            <div className="scalar__value">
                              <span>0</span>
                            </div>
                          </div>
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>Online Associates Programs</span>
                              <div id="tooltip" className="tooltip">
                                <button
                                  className="button button--bare tooltip-trigger"
                                  aria-label="tooltip trigger"
                                >
                                  <div className="niche-icon-wrap">
                                    <svg
                                      className="niche-icon niche-icon--question"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 18.4C11.1 18.4 10.5 17.7 10.5 16.9C10.5 16.3 11 15.5 12 15.5C13 15.5 13.4 16.1 13.4 16.9C13.4 17.5 12.9 18.4 12 18.4ZM12.9 13.1C12.9 13.8 12.4 14.2 11.8 14.2C11.2 14.2 10.8 13.8 10.8 13.2C10.8 10.7 14 9.9 14.2 8.8C14.3 8.1 13.8 7.4 12.4 7.4C10.5 7.4 10.5 8.9 9.6 9.1C9.2 9.2 8.9 9.1 8.6 8.8C8.4 8.7 8.3 8.4 8.4 8C8.6 7.2 9.9 5.6 12.2 5.6C15.5 5.6 16.3 7.5 16.3 8.5C16.3 11.1 12.9 11.6 12.9 13.1Z"></path>
                                    </svg>
                                  </div>
                                </button>
                                <div
                                  className="tooltip-message"
                                  id="tooltip-description--tooltip"
                                  role="tooltip"
                                  style={{
                                    width: "300px",
                                    marginLeft: "-142px",
                                  }}
                                >
                                  Total number of associate degree programs
                                  offered online or through distance education.
                                </div>
                              </div>
                            </div>
                            <div className="scalar__value">
                              <span>0</span>
                            </div>
                          </div>
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>Online Bachelor's Programs</span>
                              <div id="tooltip" className="tooltip">
                                <button
                                  className="button button--bare tooltip-trigger"
                                  aria-label="tooltip trigger"
                                >
                                  <div className="niche-icon-wrap">
                                    <svg
                                      className="niche-icon niche-icon--question"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 18.4C11.1 18.4 10.5 17.7 10.5 16.9C10.5 16.3 11 15.5 12 15.5C13 15.5 13.4 16.1 13.4 16.9C13.4 17.5 12.9 18.4 12 18.4ZM12.9 13.1C12.9 13.8 12.4 14.2 11.8 14.2C11.2 14.2 10.8 13.8 10.8 13.2C10.8 10.7 14 9.9 14.2 8.8C14.3 8.1 13.8 7.4 12.4 7.4C10.5 7.4 10.5 8.9 9.6 9.1C9.2 9.2 8.9 9.1 8.6 8.8C8.4 8.7 8.3 8.4 8.4 8C8.6 7.2 9.9 5.6 12.2 5.6C15.5 5.6 16.3 7.5 16.3 8.5C16.3 11.1 12.9 11.6 12.9 13.1Z"></path>
                                    </svg>
                                  </div>
                                </button>
                                <div
                                  className="tooltip-message"
                                  id="tooltip-description--tooltip"
                                  role="tooltip"
                                  style={{
                                    width: "300px",
                                    marginLeft: "-142px",
                                  }}
                                >
                                  Total number of bachelor's degree programs
                                  offered online or through distance education.
                                </div>
                              </div>
                            </div>
                            <div className="scalar__value">
                              <span>0</span>
                            </div>
                          </div>
                          <div className="text-cta">
                            <a
                              className="text-cta__link"
                              href="https://www.niche.com/colleges/online-majors/"
                              target=""
                            >
                              <span>Explore All Online Majors</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--4">
                        <div className="blank__bucket">
                          <div className="breakdown--bar_chart">
                            <div className="breakdown__header">
                              How Students Learn
                              <div id="tooltip" className="tooltip">
                                <button
                                  className="button button--bare tooltip-trigger"
                                  aria-label="tooltip trigger"
                                >
                                  <div className="niche-icon-wrap">
                                    <svg
                                      className="niche-icon niche-icon--question"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 18.4C11.1 18.4 10.5 17.7 10.5 16.9C10.5 16.3 11 15.5 12 15.5C13 15.5 13.4 16.1 13.4 16.9C13.4 17.5 12.9 18.4 12 18.4ZM12.9 13.1C12.9 13.8 12.4 14.2 11.8 14.2C11.2 14.2 10.8 13.8 10.8 13.2C10.8 10.7 14 9.9 14.2 8.8C14.3 8.1 13.8 7.4 12.4 7.4C10.5 7.4 10.5 8.9 9.6 9.1C9.2 9.2 8.9 9.1 8.6 8.8C8.4 8.7 8.3 8.4 8.4 8C8.6 7.2 9.9 5.6 12.2 5.6C15.5 5.6 16.3 7.5 16.3 8.5C16.3 11.1 12.9 11.6 12.9 13.1Z"></path>
                                    </svg>
                                  </div>
                                </button>
                                <div
                                  className="tooltip-message"
                                  id="tooltip-description--tooltip"
                                  role="tooltip"
                                  style={{
                                    width: "300px",
                                    marginLeft: "-142px",
                                  }}
                                >
                                  Based on className setting of student
                                  enrollment.
                                </div>
                              </div>
                            </div>
                            <div className="toggle__content--profiles-visible--hidden">
                              <ul className="breakdown-facts">
                                <li className="fact__table__row">
                                  <div
                                    className="fact__table__row__fill"
                                    style={{width: "18.138041733547354%"}}
                                  ></div>
                                  <div className="fact__table__row__label">
                                    Mix of Online and on Campus
                                  </div>
                                  <div className="fact__table__row__value">
                                    18%
                                  </div>
                                </li>
                                <li className="fact__table__row">
                                  <div
                                    className="fact__table__row__fill"
                                    style={{ width: "0%" }}
                                  ></div>
                                  <div className="fact__table__row__label">
                                    On Campus
                                  </div>
                                  <div className="fact__table__row__value">
                                    0%
                                  </div>
                                </li>
                                <li className="fact__table__row">
                                  <div
                                    className="fact__table__row__fill"
                                    style={{ width: "81.86195826645265%" }}
                                  ></div>
                                  <div className="fact__table__row__label">
                                    Online
                                  </div>
                                  <div className="fact__table__row__value">
                                    82%
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--5">
                        <div className="blank__bucket"></div>
                      </div>
                    </div>
                  </section>
                  <section className="block--blank" aria-label="">
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div
                            className="ad-spot"
                            id="colleges_profile-home_02_728x90"
                            aria-label="Advertisement"
                          ></div>
                          <div
                            className="ad-spot--mobile"
                            id="colleges_profile-home_02_320x50"
                            aria-label="Advertisement"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="block--two"
                    aria-label="Students"
                    id="students"
                  >
                    <div className="block__title">
                      <h2 className="block__heading">
                        <span>Students</span>
                      </h2>
                    </div>
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div className="scalar">
                            <div className="scalar__label">
                              <span>Full-Time Enrollment</span>
                            </div>
                            <div className="scalar__value">
                              <span>4,234</span>
                              <span className="scalar__value__suffix">
                                &nbsp;Undergrads
                              </span>
                            </div>
                          </div>
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>Part-Time Undergrads</span>
                            </div>
                            <div className="scalar__value">
                              <span>127</span>
                            </div>
                          </div>
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>Undergrads Over 25</span>
                            </div>
                            <div className="scalar__value">
                              <span>1%</span>
                            </div>
                          </div>
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>Pell Grant</span>
                            </div>
                            <div className="scalar__value">
                              <span>20%</span>
                            </div>
                          </div>
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>Varsity Athletes</span>
                            </div>
                            <div className="scalar__value">
                              <span>15%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--2">
                        <div className="blank__bucket">
                          <div className="poll__table--bar_chart--bar_chart_color">
                            <div className="poll__table__icon">Poll</div>
                            <div className="poll__table__body">
                              What one word or phrase best describes the typical
                              student at this school?
                            </div>
                            <div className="poll__table__tagline">
                              <div className="poll__table__count">
                                Based on 38 responses
                              </div>
                              <button
                                className="button button--bare poll__table__flagging"
                                type="button"
                                aria-label="Report an item"
                              >
                                Report
                              </button>
                            </div>
                            <div className="toggle__content--profiles--hidden">
                              <ul className="poll__table__results">
                                <li className="poll__table__result__item">
                                  <div
                                    className="poll__table__result__fill"
                                    style={{ width: "39%" }}
                                  ></div>
                                  <div className="poll__table__result__label">
                                    Innovative
                                  </div>
                                  <div className="poll__table__result__percent">
                                    39%
                                  </div>
                                </li>
                                <li className="poll__table__result__item">
                                  <div
                                    className="poll__table__result__fill"
                                    style={{ width: "18%" }}
                                  ></div>
                                  <div className="poll__table__result__label">
                                    Atypical
                                  </div>
                                  <div className="poll__table__result__percent">
                                    18%
                                  </div>
                                </li>
                                <li className="poll__table__result__item">
                                  <div
                                    className="poll__table__result__fill"
                                    style={{ width: "16%" }}
                                  ></div>
                                  <div className="poll__table__result__label">
                                    Creative
                                  </div>
                                  <div className="poll__table__result__percent">
                                    16%
                                  </div>
                                </li>
                                <li className="poll__table__result__item">
                                  <div
                                    className="poll__table__result__fill"
                                    style={{ width: "16%" }}
                                  ></div>
                                  <div className="poll__table__result__label">
                                    Exceptional
                                  </div>
                                  <div className="poll__table__result__percent">
                                    16%
                                  </div>
                                </li>
                                <li className="poll__table__result__item">
                                  <div
                                    className="poll__table__result__fill"
                                    style={{ width: "3%" }}
                                  ></div>
                                  <div className="poll__table__result__label">
                                    Amazing
                                  </div>
                                  <div className="poll__table__result__percent">
                                    3%
                                  </div>
                                </li>
                                <li className="poll__table__result__item">
                                  <div
                                    className="poll__table__result__fill"
                                    style={{ width: "3%" }}
                                  ></div>
                                  <div className="poll__table__result__label">
                                    Driven
                                  </div>
                                  <div className="poll__table__result__percent">
                                    3%
                                  </div>
                                </li>
                                <li className="poll__table__result__item">
                                  <div
                                    className="poll__table__result__fill"
                                    style={{ width: "3%" }}
                                  ></div>
                                  <div className="poll__table__result__label">
                                    Leo
                                  </div>
                                  <div className="poll__table__result__percent">
                                    3%
                                  </div>
                                </li>
                              </ul>
                              <span
                                role="button"
                                tabindex="0"
                                className="toggle__content__link--profiles"
                                aria-hidden="false"
                                aria-expanded="false"
                                aria-label="more"
                              >
                                More
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--3">
                        <div className="blank__bucket">
                          <div className="expansion-link">
                            <a
                              className="expansion-link__text"
                              href="https://www.niche.com/colleges/massachusetts-institute-of-technology/students/"
                            >
                              <span>Read More About the Students</span>
                              <i className="icon-arrowright-thin--expansion"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="block--two"
                    aria-label="Campus Life"
                    id="campus-life"
                  >
                    <div className="block__title">
                      <h2 className="block__heading">
                        <span>Campus Life</span>
                      </h2>
                    </div>
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div className="scalar">
                            <div className="scalar__label">
                              <span>Freshmen Live On-Campus</span>
                            </div>
                            <div className="scalar__value">
                              <span>100%</span>
                            </div>
                          </div>
                          <div className="poll__single--piechart">
                            <div className="poll__single__icon">Poll</div>
                            <div className="poll__single__pie">
                              <div
                                className="poll__single__pie__angle"
                                style={{
                                  transform: "rotate(0.49turn)",
                                }}
                              ></div>
                            </div>
                            <div className="poll__single__value">
                              <div className="poll__single__percent poll__single__percent__label">
                                49%
                              </div>
                              <span className="poll__single__body">
                                of students say that Greek life is average, and
                                no one will treat you differently if you don't
                                join.&nbsp;
                                <span className="poll__single__responses">
                                  70 responses
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="poll__single--piechart">
                            <div className="poll__single__icon">Poll</div>
                            <div className="poll__single__pie">
                              <div
                                className="poll__single__pie__angle--inverted"
                                style={{
                                  transform: "rotate(0.10999999999999999turn)",
                                }}
                              ></div>
                            </div>
                            <div className="poll__single__value">
                              <div className="poll__single__percent poll__single__percent__label">
                                61%
                              </div>
                              <span className="poll__single__body">
                                of students say varsity sporting events are
                                attended, but not a huge part of campus
                                life.&nbsp;
                                <span className="poll__single__responses">
                                  72 responses
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--2">
                        <div className="blank__bucket">
                          <div className="poll__table--bar_chart--bar_chart_color">
                            <div className="poll__table__icon">Poll</div>
                            <div className="poll__table__body">
                              What one word or phrase best describes your
                              school?
                            </div>
                            <div className="poll__table__tagline">
                              <div className="poll__table__count">
                                Based on 8 responses
                              </div>
                              <button
                                className="button button--bare poll__table__flagging"
                                type="button"
                                aria-label="Report an item"
                              >
                                Report
                              </button>
                            </div>
                            <div className="toggle__content--profiles--hidden">
                              <ul className="poll__table__results">
                                <li className="poll__table__result__item">
                                  <div
                                    className="poll__table__result__fill"
                                    style={{ width: "38%" }}
                                  ></div>
                                  <div className="poll__table__result__label">
                                    It's pretty chill
                                  </div>
                                  <div className="poll__table__result__percent">
                                    38%
                                  </div>
                                </li>
                                <li className="poll__table__result__item">
                                  <div
                                    className="poll__table__result__fill"
                                    style={{ width: "25%" }}
                                  ></div>
                                  <div className="poll__table__result__label">
                                    Fast-paced
                                  </div>
                                  <div className="poll__table__result__percent">
                                    25%
                                  </div>
                                </li>
                                <li className="poll__table__result__item">
                                  <div
                                    className="poll__table__result__fill"
                                    style={{ width: "13%" }}
                                  ></div>
                                  <div className="poll__table__result__label">
                                    Innovative
                                  </div>
                                  <div className="poll__table__result__percent">
                                    13%
                                  </div>
                                </li>
                                <li className="poll__table__result__item">
                                  <div
                                    className="poll__table__result__fill"
                                    style={{ width: "13%" }}
                                  ></div>
                                  <div className="poll__table__result__label">
                                    Leonard
                                  </div>
                                  <div className="poll__table__result__percent">
                                    13%
                                  </div>
                                </li>
                                <li className="poll__table__result__item">
                                  <div
                                    className="poll__table__result__fill"
                                    style={{ width: "13%" }}
                                  ></div>
                                  <div className="poll__table__result__label">
                                    phenomonal
                                  </div>
                                  <div className="poll__table__result__percent">
                                    13%
                                  </div>
                                </li>
                              </ul>
                              <span
                                role="button"
                                tabindex="0"
                                className="toggle__content__link--profiles"
                                aria-hidden="false"
                                aria-expanded="false"
                                aria-label="more"
                              >
                                More
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--3">
                        <div className="blank__bucket">
                          <div className="expansion-link">
                            <a
                              className="expansion-link__text"
                              href="https://www.niche.com/colleges/massachusetts-institute-of-technology/campus-life/"
                            >
                              <span>Read More About Campus Life</span>
                              <i className="icon-arrowright-thin--expansion"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="block--horiz-poll"
                    aria-label="After College"
                    id="after"
                  >
                    <div className="block__title">
                      <h2 className="block__heading">
                        <span>After College</span>
                      </h2>
                    </div>
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div className="scalar">
                            <div className="scalar__label">
                              <span>
                                Median Earnings 6 Years After Graduation
                              </span>
                            </div>
                            <div className="scalar__value">
                              <span>$104,700</span>
                              <span className="scalar__value__suffix">
                                &nbsp; year
                              </span>
                              <div className="scalar__national__value">
                                <div className="scalar__national__label">
                                  National
                                </div>
                                $33,028
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--2">
                        <div className="blank__bucket">
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>Graduation Rate</span>
                            </div>
                            <div className="scalar__value">
                              <span>96%</span>
                              <div className="scalar__national__value">
                                <div className="scalar__national__label">
                                  National
                                </div>
                                49%
                              </div>
                            </div>
                          </div>
                          <div className="scalar--three">
                            <div className="scalar__label">
                              <span>Employed 2 Years After Graduation</span>
                            </div>
                            <div className="scalar__value">
                              <span>94%</span>
                              <div className="scalar__national__value">
                                <div className="scalar__national__label">
                                  National
                                </div>
                                83%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--3">
                        <div className="blank__bucket">
                          <div className="poll__single">
                            <div className="poll__single__value">
                              <div className="poll__single__percent poll__single__percent__label">
                                90%
                              </div>
                              <span className="poll__single__body">
                                of students feel confident they will find a job
                                in their field after graduation.&nbsp;
                                <span className="poll__single__responses">
                                  31 responses
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--4">
                        <div className="blank__bucket">
                          <div className="expansion-link">
                            <a
                              className="expansion-link__text"
                              href="https://www.niche.com/colleges/massachusetts-institute-of-technology/after-college/"
                            >
                              <span>Read More About Life After Graduation</span>
                              <i className="icon-arrowright-thin--expansion"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="block--blank" aria-label="">
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div
                            className="ad-spot"
                            id="colleges_profile-home_03_728x90"
                            aria-label="Advertisement"
                          ></div>
                          <div
                            className="ad-spot--mobile"
                            id="colleges_profile-home_03_320x50"
                            aria-label="Advertisement"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="block--one"
                    aria-label="Similar Colleges"
                    id="similar-colleges"
                  >
                    <div className="block__title">
                      <h3 className="visually-hidden">Similar Colleges</h3>
                    </div>
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div className="similar-entities-wrap">
                            <div className="similar-entities__title">
                              Colleges like Massachusetts Institute of
                              Technology
                            </div>
                            <ul
                              className="similar-entities"
                              aria-expanded="false"
                            >
                              <li
                                className="similar-entity"
                                style={{ animationDelay: "0s" }}
                              >
                                <div className="chip chip--with-grade">
                                  <div className="niche__grade niche__grade--a-plus">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    A+
                                  </div>
                                  <a
                                    className="chip__name"
                                    href="https://www.niche.com/colleges/california-institute-of-technology/"
                                  >
                                    California Institute of Technology
                                  </a>
                                  <ul className="chip__tagline">
                                    <li>4 Year</li>
                                    <li>PASADENA, CA</li>
                                    <li>
                                      <div className="review__stars review__stars--gray">
                                        <span
                                          className="review__stars__icon review__stars__icon--gray--40"
                                          data-testid="review-stars"
                                        ></span>
                                        <span className="visually-hidden">
                                          Rating 3.95 out of 5{" "}
                                        </span>
                                        <span className="review__stars__number__reviews">
                                          <span className="visually-hidden">
                                            &nbsp;
                                          </span>
                                          127 reviews
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li
                                className="similar-entity"
                                style={{ animationDelay: "0s" }}
                              >
                                <div className="chip chip--with-grade">
                                  <div className="niche__grade niche__grade--a-plus">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    A+
                                  </div>
                                  <a
                                    className="chip__name"
                                    href="https://www.niche.com/colleges/princeton-university/"
                                  >
                                    Princeton University
                                  </a>
                                  <ul className="chip__tagline">
                                    <li>4 Year</li>
                                    <li>PRINCETON, NJ</li>
                                    <li>
                                      <div className="review__stars review__stars--gray">
                                        <span
                                          className="review__stars__icon review__stars__icon--gray--40"
                                          data-testid="review-stars"
                                        ></span>
                                        <span className="visually-hidden">
                                          Rating 3.97 out of 5{" "}
                                        </span>
                                        <span className="review__stars__number__reviews">
                                          <span className="visually-hidden">
                                            &nbsp;
                                          </span>
                                          453 reviews
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li
                                className="similar-entity"
                                style={{ animationDelay: "0s" }}
                              >
                                <div className="chip chip--with-grade">
                                  <div className="niche__grade niche__grade--a-plus">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    A+
                                  </div>
                                  <a
                                    className="chip__name"
                                    href="https://www.niche.com/colleges/stanford-university/"
                                  >
                                    Stanford University
                                  </a>
                                  <ul className="chip__tagline">
                                    <li>4 Year</li>
                                    <li>STANFORD, CA</li>
                                    <li>
                                      <div className="review__stars review__stars--gray">
                                        <span
                                          className="review__stars__icon review__stars__icon--gray--40"
                                          data-testid="review-stars"
                                        ></span>
                                        <span className="visually-hidden">
                                          Rating 4.1 out of 5{" "}
                                        </span>
                                        <span className="review__stars__number__reviews">
                                          <span className="visually-hidden">
                                            &nbsp;
                                          </span>
                                          1,246 reviews
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li
                                className="similar-entity"
                                style={{ animationDelay: "0s" }}
                              >
                                <div className="chip chip--with-grade">
                                  <div className="niche__grade niche__grade--a-plus">
                                    <span className="visually-hidden">
                                      grade&nbsp;
                                    </span>
                                    A+
                                  </div>
                                  <a
                                    className="chip__name"
                                    href="https://www.niche.com/colleges/harvard-university/"
                                  >
                                    Harvard University
                                  </a>
                                  <ul className="chip__tagline">
                                    <li>4 Year</li>
                                    <li>CAMBRIDGE, MA</li>
                                    <li>
                                      <div className="review__stars review__stars--gray">
                                        <span
                                          className="review__stars__icon review__stars__icon--gray--40"
                                          data-testid="review-stars"
                                        ></span>
                                        <span className="visually-hidden">
                                          Rating 4.14 out of 5{" "}
                                        </span>
                                        <span className="review__stars__number__reviews">
                                          <span className="visually-hidden">
                                            &nbsp;
                                          </span>
                                          798 reviews
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                            <button className="show-more button button--bare">
                              <div className="niche-icon-wrap">
                                <svg
                                  className="niche-icon niche-icon--plus"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  width="24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    xmlns="http://www.w3.org/2000/svg"
                                    d="M18.5 11.9h-5.4V6.8c0-.7-.3-1.5-1.2-1.5-.9 0-1.2.8-1.2 1.5v5.1H5.5c-.7 0-1.5.3-1.5 1.1s.8 1.1 1.5 1.1h5.2v5.1c0 .7.3 1.5 1.2 1.5.9 0 1.2-.8 1.2-1.5v-5.1h5.4c.7 0 1.5-.3 1.5-1.1s-.8-1.1-1.5-1.1z"
                                  ></path>
                                </svg>
                              </div>
                              <span className="more-text">More</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--2">
                        <div className="blank__bucket"></div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="block--reviews"
                    aria-label="Reviews"
                    id="reviews"
                  >
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div
                            className="profile-review-stars profile-review-stars--home"
                            data-testid="profile-review-stars"
                          >
                            <div className="block__title">
                              <h2 className="block__heading">
                                <span>
                                  Massachusetts Institute of Technology Reviews
                                </span>
                              </h2>
                            </div>
                            <div className="review__stars">
                              <span
                                className="review__stars__icon review__stars__icon--40"
                                data-testid="review-stars"
                              ></span>
                              <span className="visually-hidden">
                                Rating 4.15 out of 5{" "}
                              </span>
                              <span className="review__stars__number__reviews">
                                <span className="visually-hidden">&nbsp;</span>
                                650 reviews
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--2">
                        <div className="blank__bucket">
                          <ul className="review__chart">
                            <li className="review__chart__item review__chart__item">
                              <button
                                type="button"
                                className="review__chart__item__button button button--bare button--reviews"
                              >
                                <div className="review__chart__item__label">
                                  <div className="review__stars">
                                    <span
                                      className="review__stars__icon review__stars__icon--50"
                                      data-testid="review-stars"
                                    ></span>
                                    <span className="visually-hidden">
                                      Rating 5 out of 5{" "}
                                    </span>
                                    <span className="review__stars__number__reviews">
                                      <span className="visually-hidden">
                                        &nbsp;
                                      </span>
                                    </span>
                                  </div>
                                  Excellent
                                </div>
                                <div className="review__chart__item__total">
                                  278
                                  <span className="visually-hidden">
                                    &nbsp; reviews
                                    {/* (<!-- -->43<!-- -->%) */}
                                  </span>
                                </div>
                                <div
                                  className="review__chart__item__fill"
                                  style={{ width: "43%" }}
                                ></div>
                              </button>
                            </li>
                            <li className="review__chart__item review__chart__item">
                              <button
                                type="button"
                                className="review__chart__item__button button button--bare button--reviews"
                              >
                                <div className="review__chart__item__label">
                                  <div className="review__stars">
                                    <span
                                      className="review__stars__icon review__stars__icon--40"
                                      data-testid="review-stars"
                                    ></span>
                                    <span className="visually-hidden">
                                      Rating 4 out of 5{" "}
                                    </span>
                                    <span className="review__stars__number__reviews">
                                      <span className="visually-hidden">
                                        &nbsp;
                                      </span>
                                    </span>
                                  </div>
                                  Very Good
                                </div>
                                <div className="review__chart__item__total">
                                  222
                                  <span className="visually-hidden">
                                    &nbsp; reviews
                                    {/* (<!-- -->34<!-- -->%) */}
                                  </span>
                                </div>
                                <div
                                  className="review__chart__item__fill"
                                  style={{ width: "34%" }}
                                ></div>
                              </button>
                            </li>
                            <li className="review__chart__item review__chart__item">
                              <button
                                type="button"
                                className="review__chart__item__button button button--bare button--reviews"
                              >
                                <div className="review__chart__item__label">
                                  <div className="review__stars">
                                    <span
                                      className="review__stars__icon review__stars__icon--30"
                                      data-testid="review-stars"
                                    ></span>
                                    <span className="visually-hidden">
                                      Rating 3 out of 5{" "}
                                    </span>
                                    <span className="review__stars__number__reviews">
                                      <span className="visually-hidden">
                                        &nbsp;
                                      </span>
                                    </span>
                                  </div>
                                  Average
                                </div>
                                <div className="review__chart__item__total">
                                  125
                                  <span className="visually-hidden">
                                    &nbsp; reviews
                                    {/* (<!-- -->19<!-- -->%) */}
                                  </span>
                                </div>
                                <div
                                  className="review__chart__item__fill"
                                  style={{ width: "19%" }}
                                ></div>
                              </button>
                            </li>
                            <li className="review__chart__item review__chart__item">
                              <button
                                type="button"
                                className="review__chart__item__button button button--bare button--reviews"
                              >
                                <div className="review__chart__item__label">
                                  <div className="review__stars">
                                    <span
                                      className="review__stars__icon review__stars__icon--20"
                                      data-testid="review-stars"
                                    ></span>
                                    <span className="visually-hidden">
                                      Rating 2 out of 5{" "}
                                    </span>
                                    <span className="review__stars__number__reviews">
                                      <span className="visually-hidden">
                                        &nbsp;
                                      </span>
                                    </span>
                                  </div>
                                  Poor
                                </div>
                                <div className="review__chart__item__total">
                                  18
                                  <span className="visually-hidden">
                                    &nbsp; reviews
                                    {/* (<!-- -->3<!-- -->%) */}
                                  </span>
                                </div>
                                <div
                                  className="review__chart__item__fill"
                                  style={{ width: "3%" }}
                                ></div>
                              </button>
                            </li>
                            <li className="review__chart__item review__chart__item">
                              <button
                                type="button"
                                className="review__chart__item__button button button--bare button--reviews"
                              >
                                <div className="review__chart__item__label">
                                  <div className="review__stars">
                                    <span
                                      className="review__stars__icon review__stars__icon--10"
                                      data-testid="review-stars"
                                    ></span>
                                    <span className="visually-hidden">
                                      Rating 1 out of 5{" "}
                                    </span>
                                    <span className="review__stars__number__reviews">
                                      <span className="visually-hidden">
                                        &nbsp;
                                      </span>
                                    </span>
                                  </div>
                                  Terrible
                                </div>
                                <div className="review__chart__item__total">
                                  7
                                  <span className="visually-hidden">
                                    &nbsp; reviews
                                    {/* (<!-- -->1<!-- -->%) */}
                                  </span>
                                </div>
                                <div
                                  className="review__chart__item__fill"
                                  style={{ width: "1%" }}
                                ></div>
                              </button>
                            </li>
                          </ul>
                          <div className="review-categories-wrap">
                            <span className="visually-hidden">
                              Selecting a category below will take you to
                              another page
                            </span>
                            <div className="review-categories__placeholder">
                              All Categories
                            </div>
                            <select
                              aria-label="select a category"
                              className="review-categories"
                              aria-controls="reviewExpansionBucket"
                            >
                              <option value="All">All Categories</option>
                              <option value="Academics">Academics</option>
                              <option value="Campus">Campus</option>
                              <option value="Food">Food</option>
                              <option value="Health &amp; Safety">
                                Health &amp; Safety
                              </option>
                              <option value="Housing">Housing</option>
                              <option value="Online Learning">
                                Online Learning
                              </option>
                              <option value="Overall Experience">
                                Overall Experience
                              </option>
                              <option value="Party Scene">Party Scene</option>
                              <option value="Student Life">Student Life</option>
                              <option value="Value">Value</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="profile__bucket--3">
                        <section className="reviews__bucket">
                          <div id="reviewExpansionBucket"></div>
                          <div>
                            <div
                              className="review"
                              itemscope=""
                              itemtype="http://schema.org/Review"
                            >
                              <span
                                className="review__entity-name"
                                itemprop="itemReviewed"
                                itemscope=""
                                itemtype="http://schema.org/CollegeOrUniversity"
                              >
                                <meta
                                  content="Massachusetts Institute of Technology"
                                  itemprop="name"
                                />
                              </span>
                              <div className="review__header">
                                <div
                                  className="review-rating"
                                  itemprop="reviewRating"
                                  itemscope=""
                                  itemtype="http://schema.org/Rating"
                                >
                                  <meta content="5" itemprop="ratingValue" />
                                  <meta content="5" itemprop="bestRating" />
                                  <div className="review__stars">
                                    <span
                                      className="review__stars__icon review__stars__icon--50"
                                      data-testid="review-stars"
                                    ></span>
                                    <span className="visually-hidden">
                                      Rating 5 out of 5{" "}
                                    </span>
                                    <span className="review__stars__number__reviews">
                                      <span className="visually-hidden">
                                        &nbsp;
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <span className="review__text">
                                <div
                                  className="overflow-text overflow-text--mobile-overflow overflow-text--desktop-overflow"
                                  tabindex="0"
                                  aria-expanded="false"
                                  data-testid="overflow-text"
                                  role="button"
                                >
                                  <div className="overflow-text__content">
                                    <div itemprop="reviewBody">
                                      <span>
                                        <span>
                                          Currently reaching near the middle of
                                          my time here, and this school truly
                                          works you to the bone. The baseline of
                                          this place is that everyone is very
                                          smart. Some are decently smart and
                                          work hard enough to get in, others
                                          come in doing Olympiads from when they
                                          were 5 years old.
                                          <br />
                                        </span>
                                        <span>
                                          <br />
                                        </span>
                                        <span>
                                          The students are very diverse. Some
                                          come in "normal", others finally get
                                          to truly express the weird and unique
                                          that they've been suppressing their
                                          whole lives. The campus is extremely
                                          welcoming and you really get to be who
                                          you want to be; it's very beautiful.
                                          Each dorm has an extant history and
                                          culture; you can automatically learn
                                          about someone by what dorm they live
                                          in.
                                          <br />
                                        </span>
                                        <span>
                                          <br />
                                        </span>
                                        <span>
                                          The academics are exceedingly
                                          difficult by content and pace. The
                                          problem set difficulty are elevated
                                          beyond a typical school's, and they
                                          force you to collaborate with others.
                                          Everyone must collaborate. You're
                                          forced to learn time management
                                          skills.
                                          <br />
                                        </span>
                                        <span>
                                          <br />
                                        </span>
                                        <span>
                                          I was finally able to satisfy my love
                                          for learning here. Truly an amazing
                                          and unique school!
                                          <br />
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </span>
                              <div className="review__footer">
                                <ul className="review-tagline">
                                  <li
                                    className="review-tagline__item"
                                    itemprop="author"
                                    itemscope=""
                                    itemtype="http://schema.org/Thing"
                                  >
                                    <span itemprop="name">Sophomore</span>
                                  </li>
                                  <li className="review-tagline__item">
                                    <meta
                                      content="2022-01-10"
                                      itemprop="datePublished"
                                    />
                                    Jan 10 2022
                                  </li>
                                  <li className="review-tagline__item">
                                    <span>
                                      <a href="">Overall Experience</a>
                                    </span>
                                  </li>
                                </ul>
                                <button
                                  className="button flagging-button"
                                  data-content-guid="6ceb20cc-76b8-4914-a71f-cb926646eee1"
                                >
                                  Report
                                </button>
                              </div>
                            </div>
                            <div className="review-stars-cta">
                              <span className="review-stars-cta__label">
                                Start Your Review of
                                <span className="review-stars-cta__entity">
                                  Massachusetts Institute of Technology
                                </span>
                              </span>
                              <a
                                className="review-stars-cta__link"
                                href="https://www.niche.com/colleges/survey/start/?t=u&amp;e=massachusetts-institute-of-technology"
                              >
                                <fieldset
                                  className="star-rating--large"
                                  id="rating-0ef82075-d2c7-47db-9f4a-8bb9433cbd89"
                                >
                                  <div className="">
                                    <div className="star-rating__stars">
                                      <input
                                        type="radio"
                                        aria-label="Excellent, "
                                        className="star-rating__input"
                                        name="rating-0ef82075-d2c7-47db-9f4a-8bb9433cbd89"
                                        tab-index="-1"
                                        value="f1c8c7de-2025-4949-919f-95d4b8de0da3"
                                        aria-hidden="true"
                                      />
                                      <label for="f1c8c7de-2025-4949-919f-95d4b8de0da3"></label>
                                      <input
                                        type="radio"
                                        aria-label="Very Good, "
                                        className="star-rating__input"
                                        name="rating-0ef82075-d2c7-47db-9f4a-8bb9433cbd89"
                                        tab-index="-1"
                                        value="7b578584-1bd1-49c0-9c32-da41f4e6035d"
                                        aria-hidden="true"
                                      />
                                      <label for="7b578584-1bd1-49c0-9c32-da41f4e6035d"></label>
                                      <input
                                        type="radio"
                                        aria-label="Average, "
                                        className="star-rating__input"
                                        name="rating-0ef82075-d2c7-47db-9f4a-8bb9433cbd89"
                                        tab-index="-1"
                                        value="3c473574-9668-4465-978b-9a0d7beeaa52"
                                        aria-hidden="true"
                                      />
                                      <label for="3c473574-9668-4465-978b-9a0d7beeaa52"></label>
                                      <input
                                        type="radio"
                                        aria-label="Poor, "
                                        className="star-rating__input"
                                        name="rating-0ef82075-d2c7-47db-9f4a-8bb9433cbd89"
                                        tab-index="-1"
                                        value="71fffeb1-a648-4ed4-a7b9-d163c0096ba7"
                                        aria-hidden="true"
                                      />
                                      <label for="71fffeb1-a648-4ed4-a7b9-d163c0096ba7"></label>
                                      <input
                                        type="radio"
                                        aria-label="Terrible, "
                                        className="star-rating__input"
                                        name="rating-0ef82075-d2c7-47db-9f4a-8bb9433cbd89"
                                        tab-index="-1"
                                        value="865b748a-b0dc-490b-98dc-461959b6bfc1"
                                        aria-hidden="true"
                                      />
                                      <label for="865b748a-b0dc-490b-98dc-461959b6bfc1"></label>
                                    </div>
                                    <span
                                      className="rate-it"
                                      aria-hidden="true"
                                    >
                                      Rate It!
                                    </span>
                                  </div>
                                </fieldset>
                              </a>
                            </div>
                          </div>
                          <div
                            className="review"
                            itemscope=""
                            itemtype="http://schema.org/Review"
                          >
                            <span
                              className="review__entity-name"
                              itemprop="itemReviewed"
                              itemscope=""
                              itemtype="http://schema.org/CollegeOrUniversity"
                            >
                              <meta
                                content="Massachusetts Institute of Technology"
                                itemprop="name"
                              />
                            </span>
                            <div className="review__header">
                              <div
                                className="review-rating"
                                itemprop="reviewRating"
                                itemscope=""
                                itemtype="http://schema.org/Rating"
                              >
                                <meta content="5" itemprop="ratingValue" />
                                <meta content="5" itemprop="bestRating" />
                                <div className="review__stars">
                                  <span
                                    className="review__stars__icon review__stars__icon--50"
                                    data-testid="review-stars"
                                  ></span>
                                  <span className="visually-hidden">
                                    Rating 5 out of 5{" "}
                                  </span>
                                  <span className="review__stars__number__reviews">
                                    <span className="visually-hidden">
                                      &nbsp;
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <span className="review__text">
                              <div
                                className="overflow-text overflow-text--mobile-overflow overflow-text--desktop-overflow"
                                tabindex="0"
                                aria-expanded="false"
                                data-testid="overflow-text"
                                role="button"
                              >
                                <div className="overflow-text__content">
                                  <div itemprop="reviewBody">
                                    <span>
                                      <span>
                                        Massachusetts Institute of Technology
                                        (MIT) is widely regarded as one of the
                                        top universities in the world. There are
                                        many reasons why MIT is considered a
                                        good institution of higher learning.
                                        <br />
                                      </span>
                                      <span>
                                        <br />
                                      </span>
                                      <span>
                                        One reason is the exceptional quality of
                                        the education that MIT provides. The
                                        university is known for its rigorous
                                        academic programs and its focus on
                                        hands-on, experiential learning. This
                                        allows students to gain a deep
                                        understanding of their chosen field of
                                        study and develop the skills and
                                        knowledge they need to succeed in their
                                        careers.
                                        <br />
                                      </span>
                                      <span>
                                        <br />
                                      </span>
                                      <span>
                                        Another reason why MIT is considered a
                                        good university is the caliber of its
                                        faculty. The university attracts some of
                                        the brightest minds in their respective
                                        fields, and many of its professors are
                                        world-renowned experts in their areas of
                                        research. This allows students to learn
                                        from the best and be exposed to
                                        cutting-edge ideas and theories.
                                        <br />
                                      </span>
                                      <span>
                                        <br />
                                      </span>
                                      <span>
                                        Additionally, MIT is known for its
                                        strong sense of community and its
                                        commitment to promoting diversity and
                                        inclusion.
                                        <br />
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </span>
                            <div className="review__footer">
                              <ul className="review-tagline">
                                <li
                                  className="review-tagline__item"
                                  itemprop="author"
                                  itemscope=""
                                  itemtype="http://schema.org/Thing"
                                >
                                  <span itemprop="name">Niche User</span>
                                </li>
                                <li className="review-tagline__item">
                                  <meta
                                    content="2022-12-11"
                                    itemprop="datePublished"
                                  />
                                  a month ago
                                </li>
                                <li className="review-tagline__item">
                                  <span>
                                    <a href="">Overall Experience</a>
                                  </span>
                                </li>
                              </ul>
                              <button
                                className="button flagging-button"
                                data-content-guid="0064b62d-34dd-4a8d-8982-9de29c80caa8"
                              >
                                Report
                              </button>
                            </div>
                          </div>
                          <div
                            className="review"
                            itemscope=""
                            itemtype="http://schema.org/Review"
                          >
                            <span
                              className="review__entity-name"
                              itemprop="itemReviewed"
                              itemscope=""
                              itemtype="http://schema.org/CollegeOrUniversity"
                            >
                              <meta
                                content="Massachusetts Institute of Technology"
                                itemprop="name"
                              />
                            </span>
                            <div className="review__header">
                              <div
                                className="review-rating"
                                itemprop="reviewRating"
                                itemscope=""
                                itemtype="http://schema.org/Rating"
                              >
                                <meta content="5" itemprop="ratingValue" />
                                <meta content="5" itemprop="bestRating" />
                                <div className="review__stars">
                                  <span
                                    className="review__stars__icon review__stars__icon--50"
                                    data-testid="review-stars"
                                  ></span>
                                  <span className="visually-hidden">
                                    Rating 5 out of 5{" "}
                                  </span>
                                  <span className="review__stars__number__reviews">
                                    <span className="visually-hidden">
                                      &nbsp;
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <span className="review__text">
                              <div
                                className="overflow-text overflow-text--mobile-overflow overflow-text--desktop-overflow"
                                tabindex="0"
                                aria-expanded="false"
                                data-testid="overflow-text"
                                role="button"
                              >
                                <div className="overflow-text__content">
                                  <div itemprop="reviewBody">
                                    <span>
                                      <span>
                                        MIT is every bit as amazing as you've
                                        heard. Opportunities afforded MIT
                                        students would be unimaginable for
                                        students at most schools. So too
                                        workload, course rigor, social scene,
                                        creativity &amp; level of student &amp;
                                        faculty accomplishments. Yeah there are
                                        unfortunate MIT stereotypes, they're far
                                        from reality; Maybe generated by people
                                        at other schools to help them feel
                                        better about not being at MIT.
                                        <br />
                                      </span>
                                      <span>
                                        <br />
                                      </span>
                                      <span>
                                        One aspect of MIT worth mention-money
                                        doesn't rule. Getting a deposit in
                                        quickly won't get you a better dorm. No
                                        deposit is required. You won't be closed
                                        out of MIT related trips cause you can't
                                        afford them.MIT doesn't charge for them.
                                        Admit chances aren't higher if you're
                                        wealthy, donate money, mom went to MIT.
                                        You won’t be surrounded by people who
                                        flaunt money or use it to beat out
                                        others. It’s not lack of students from
                                        wealthy families but money isn't coin of
                                        realm-that's achievement. Looking for a
                                        place where money speaks more? Go up
                                        Mass Ave.
                                        <br />
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </span>
                            <div className="review__footer">
                              <ul className="review-tagline">
                                <li
                                  className="review-tagline__item"
                                  itemprop="author"
                                  itemscope=""
                                  itemtype="http://schema.org/Thing"
                                >
                                  <span itemprop="name">Alum</span>
                                </li>
                                <li className="review-tagline__item">
                                  <meta
                                    content="2022-02-25"
                                    itemprop="datePublished"
                                  />
                                  11 months ago
                                </li>
                                <li className="review-tagline__item">
                                  <span>
                                    <a href="">Overall Experience</a>
                                  </span>
                                </li>
                              </ul>
                              <button
                                className="button flagging-button"
                                data-content-guid="9deeccb1-430d-4901-be1e-920c755ff314"
                              >
                                Report
                              </button>
                            </div>
                          </div>
                        </section>
                      </div>
                      <div className="profile__bucket--4">
                        <div className="blank__bucket">
                          <div className="expansion-link">
                            <a
                              className="expansion-link__text"
                              href="https://www.niche.com/colleges/massachusetts-institute-of-technology/reviews/"
                            >
                              <span>Read More Reviews</span>
                              <i className="icon-arrowright-thin--expansion"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="block--blank" aria-label="Add to List">
                    <h2 className="visually-hidden">Add to List</h2>
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div
                            className="profile-add-to-list"
                            id="profile-add-to-list"
                          >
                            <button
                              className="button button--xlarge button--green button--has-icon button--icon-left button--icon-heart button--full-width"
                              aria-label="Add to List, add Massachusetts Institute of Technology to your List"
                              tabindex="0"
                            >
                              <span className="add-to-list__text button__text">
                                Add to List
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="block--blank" aria-label="">
                    <div className="profile__buckets">
                      <div className="profile__bucket--1">
                        <div className="blank__bucket">
                          <div
                            className="ad-spot"
                            id="colleges_profile-home_04_728x90"
                            aria-label="Advertisement"
                          ></div>
                          <div
                            className="ad-spot--mobile"
                            id="colleges_profile-home_04_320x50"
                            aria-label="Advertisement"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default businessprofile;
