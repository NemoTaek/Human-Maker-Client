import React, { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import './Goal.css';
import Plan from './plan/Plan'


function Goal() {

  // const viewGoal = useSelector(state => state.plan.goalTitle);
  // const viewPlan = useSelector(state => state.plan.planContents);

  // const id = useSelector(state => state.User.id);
  // useEffect(() => {
  //   axios
  //     .post("http://54.180.120.81:5000/goalAchievementTable", { userId: id })
  //     .then(data => {
  //       if (data) {
  //         console.log(data);
  //       }
  //       else {
  //         alert("새 목표를 만들어야 합니다.");
  //       }
  //     }).catch(err => {
  //       console.log(err);
  //     })
  // })

  const goalRef = useRef();
  const goalOpenModal = () => {
    goalRef.current.goalOpen();
  }

  let input = document.getElementsByClassName("plan_detail");
  let count = 0;
  let completed = 0;
  const completedGoal = (e) => {
    if (e.target.checked) {
      count++;
      completed += (1 / input.length) * 100;
      completed = Math.round(completed);
      if (completed === 99) {
        completed = 100;
      }
      document.getElementsByClassName("completed_rate")[0].textContent = "달성률: " + completed + "%";
    }
    else {
      count--;
      if (completed === 100) {
        completed = 99;
      }
      completed -= (1 / input.length) * 100;
      completed = Math.round(completed);
      document.getElementsByClassName("completed_rate")[0].textContent = "달성률: " + completed + "%";
    }
    completedBtn();
  }

  const completedBtn = () => {
    if (count === input.length) {
      document.getElementsByClassName("completed_btn")[0].disabled = false;
    }
    else {
      document.getElementsByClassName("completed_btn")[0].disabled = true;
    }
  }


  return (
    <div className="goal">
      <div className="calendar_wrap">
        <div className="calendar_title">내 계획표</div>
        <table className="calendar" border="1">
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
          </tr>
          <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
          </tr>
          <tr>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
          </tr>
          <tr>
            <td>31</td>
            <td>32</td>
            <td>33</td>
            <td>34</td>
            <td>35</td>
            <td>36</td>
            <td>37</td>
            <td>38</td>
            <td>39</td>
            <td>40</td>
          </tr>
          <tr>
            <td>41</td>
            <td>42</td>
            <td>43</td>
            <td>44</td>
            <td>45</td>
            <td>46</td>
            <td>47</td>
            <td>48</td>
            <td>49</td>
            <td>50</td>
          </tr>
          <tr>
            <td>51</td>
            <td>52</td>
            <td>53</td>
            <td>54</td>
            <td>55</td>
            <td>56</td>
            <td>57</td>
            <td>58</td>
            <td>59</td>
            <td>60</td>
          </tr>
          <tr>
            <td>61</td>
            <td>62</td>
            <td>63</td>
            <td>64</td>
            <td>65</td>
            <td>66</td>
            <td>67</td>
            <td>68</td>
            <td>69</td>
            <td>70</td>
          </tr>
          <tr>
            <td>71</td>
            <td>72</td>
            <td>73</td>
            <td>74</td>
            <td>75</td>
            <td>76</td>
            <td>77</td>
            <td>78</td>
            <td>79</td>
            <td>80</td>
          </tr>
          <tr>
            <td>81</td>
            <td>82</td>
            <td>83</td>
            <td>84</td>
            <td>85</td>
            <td>86</td>
            <td>87</td>
            <td>88</td>
            <td>89</td>
            <td>90</td>
          </tr>
          <tr>
            <td>91</td>
            <td>92</td>
            <td>93</td>
            <td>94</td>
            <td>95</td>
            <td>96</td>
            <td>97</td>
            <td>98</td>
            <td>99</td>
            <td>100</td>
          </tr>
        </table>
      </div>

      <div className="goal_wrap">
        <button className="goal_btn" onClick={goalOpenModal} >목표 설정하기</button>
        <Plan ref={goalRef}></Plan>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


        <div className="view_plan_wrap">
          <div className="view_plan_title_wrap">
            <p className="plan_title">&lt; 오늘의 목표 &gt;</p>
            <p className="view_plan_title">모달에서 목표 적으면 DB에서 가져와서 출력될 것이다</p>
          </div>

          <div className="plan_detail_wrap">
            <label className="plan_detail">
              <input type="checkbox" onChange={e => completedGoal(e)} />모달에서 세부목표 적으면 DB에서 가져와서 출력될 것이다.
            </label>
            <label className="plan_detail">
              <input type="checkbox" onChange={e => completedGoal(e)} />모달에서 세부목표 적으면 DB에서 가져와서 출력될 것이다.
            </label>
            <label className="plan_detail">
              <input type="checkbox" onChange={e => completedGoal(e)} />모달에서 세부목표 적으면 DB에서 가져와서 출력될 것이다.
            </label>
          </div>

          <div className="completed_wrap">
            <button className="completed_btn" disabled>달성했다!</button>
            <span className="completed_rate">달성률: 0%</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Goal;
